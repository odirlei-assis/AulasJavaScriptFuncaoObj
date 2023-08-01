import promptSync from "prompt-sync";
//import -> importar = trazer algo
import { verificarMaiorIdade, verificarPositivoNegativo } from "./exercicios.js";

const prompt = promptSync();

//menu para o usuário escolher um exercício

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite um número que represente um exercício de 1 a 4: "));

    switch (exercicio) {
        case 1:
            //chamando função helloWorld()
            helloWorld("Hello World!!!");
            break;
        case 2:
            //objeto
            let aluno = {
                nome: "Rebeca",
                idade: 19,
                hardSkills: ["Figma", "HTML", "CSS", "Web Responsive"]
            }
            //acessando objeto pela propriedade
            //console.log(aluno.nome, aluno.idade, aluno.hardSkills);
            //exibindo objeto inteiro
            //console.log("Objeto aluno", aluno);
            console.log("Olá", aluno.nome);

            break;//finalizar
        case 3:
            verificarMaiorIdade();
            break;
        case 4:
            verificarPositivoNegativo();
            break;
        default:
            console.log("Digite um número de 1 a 4!!!");
            break;
    }
    continuar = prompt("Você deseja continuar a ver outros exercícios? Digite s para sim e n para não: ").toLocaleLowerCase(); //toLocaleLowerCase transforma o texto em minusculo

} while (continuar === "s");

function helloWorld(frase) {
    console.log(frase);
} 