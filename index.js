const prompt = require("prompt-sync")();
const {
  criar: criar,
  atualizar: atualizar,
  remover: remover,
  listagem: listar,
} = require("./crudUsuario.js");

while (true) {
  console.log(`
    1 - Criar Usuarios
    2 - Listar Usuarios
    3 - Atualizar Usuarios
    4 - Remover Usuarios
    5 - Sair
  `);

  const opcao = prompt("Qual opção deseja? : ");

  switch (opcao) {
    case "1":
      criar();
      break;
    case "2":
      listar();
      break;
    case "3":
      atualizar();
      break;
    case "4":
      remover();
      break;
    case "5":
      process.exit();
    default:
      console.log("Opção inválida, tente novamente.");
      break;
  }
}
