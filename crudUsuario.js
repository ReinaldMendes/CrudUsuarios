const prompt = require("prompt-sync")();

let nextUserId = 1;
const usuarios = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const emailInvalido = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(email.trim());
};

const emailDuplicado = (email) => {
  return usuarios.some((usuario) => usuario.email === email.trim());
};

const idInvalido = (id) => {
  return !usuarios.some((usuario) => usuario.id === id);
};

const listagem = () => {
  if (usuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
  } else {
    usuarios.forEach((usuario) => {
      console.log(
        `${usuario.id} - ${usuario.nome} - ${
          usuario.email
        } - Telefones: ${usuario.telefones.join(", ")}`
      );
    });
  }
};

const modelo = () => {
  let usuario = { id: nextUserId++ }; // Inicializa o objeto usuário com um novo ID

  while (true) {
    usuario.nome = prompt("Qual é o nome do Usuário? ").trim();
    if (nomeInvalido(usuario.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }

  while (true) {
    usuario.email = prompt("Qual é o e-mail do Usuário? ").trim();
    if (emailInvalido(usuario.email)) {
      console.log("E-mail inválido");
    } else if (emailDuplicado(usuario.email)) {
      console.log("E-mail já cadastrado");
    } else {
      break;
    }
  }

  usuario.telefones = [];
  while (true) {
    const telefone = prompt(
      "Adicione um telefone (ou pressione Enter para parar): "
    ).trim();
    if (telefone === "") {
      if (usuario.telefones.length === 0) {
        console.log("É necessário adicionar pelo menos um telefone.");
      } else {
        break;
      }
    } else {
      usuario.telefones.push(telefone);
    }
  }

  return usuario;
};

const criar = () => {
  const usuario = modelo();
  usuarios.push(usuario);
  console.log("Usuário criado com sucesso");
};

const atualizar = () => {
  while (true) {
    if (usuarios.length == 0) {
      console.log("Lista de usuários está vazia");
      break;
    }

    listagem();

    const id = lerIndice("Qual é o ID do Usuário que deseja atualizar? ");

    if (idInvalido(id)) {
      console.log("ID inválido");
    } else {
      const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);
      const usuarioAtualizado = modelo();
      usuarioAtualizado.id = id; // Mantém o mesmo ID
      usuarios[usuarioIndex] = usuarioAtualizado;
      console.log("Usuário atualizado com sucesso");
      break;
    }
  }
};

const remover = () => {
  while (true) {
    if (usuarios.length == 0) {
      console.log("Lista de usuários está vazia");
      break;
    }

    listagem();

    const id = lerIndice("Qual é o ID do Usuário que deseja remover? ");

    if (idInvalido(id)) {
      console.log("ID inválido");
    } else {
      const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);
      usuarios.splice(usuarioIndex, 1);
      console.log("Usuário removido com sucesso");
      break;
    }
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listagem,
};
