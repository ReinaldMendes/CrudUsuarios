const prompt = require("prompt-sync")();

const usuarios = [];
let ultimoID = 1;
const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";
const telefoneInvalido = (telefone) => telefone == "";
const emailInvalido = (email) => email == "" && email == usuario.email;

const indiceInvalido = (ultimoID) =>
  ultimoID < 0 || ultimoID >= usuarios.length || isNaN(ultimoID);

const listagem = () => {
  usuarios.forEach((usuario, i) => {
    console.log(
      ` - ID : ${usuario.id}- NOME: ${usuario.nome} - EMAIL: ${usuario.email} - TELEFONE: ${usuario.telefone} }`
    );
  });
};

const modelo = () => {
  let usuario = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    usuario.id = ultimoID;
    ultimoID++;
    usuario.nome = prompt("Qual é o nome do Usuario? ");
    if (nomeInvalido(usuario.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    usuario.email = prompt("Qual é o email do Usuario? ");
    if (emailInvalido(usuario.email)) {
      console.log("O nome não pode ser vazio ou já pode ter sido cadastrado");
    } else {
      break;
    }
  }

  while (true) {
    usuario.telefone = prompt("Qual é o telefone do Usuario? ");
    if (telefoneInvalido(usuario.telefone)) {
      console.log("O telefone não pode ser vazio ");
    } else {
      break;
    }
  }
  return usuario;
};

const criar = () => {
  const usuario = modelo();

  usuarios.push(usuario);

  console.log("Usuario criado com sucesso");
};

const atualizar = () => {
  while (true) {
    if (usuarios.length == 0) {
      console.log("Lista de usuarios vazia");
      break;
    }

    listagem();

    const indice =
      lerIndice("Qual é o índice do Usuario que deseja atualizar? ") - 1;

    if (indiceInvalido(id)) {
      console.log("Índice inválido");
    } else {
      const usuarios = modelo();
      usuarios[id] = usuario;
      break;
    }
  }
};

const remover = () => {
  while (true) {
    listagem();

    const indice = lerIndice("Qual é o id do usuario que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
    } else {
      usuarios.splice(indice, 1);
      console.log("Usuario removido com sucesso");
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
