import promptSync from "prompt-sync";

const prompt = promptSync();

//export -> exportar = tirar algo , poder chamar a função em outro arquivo
export function verificarMaiorIdade() {
    console.log("Exercício 5 - Faça um programa que receba nome e idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18");

    let pessoa = {
        nome: "",
        idade: 0
    }

   
    console.log("Sua idade deve ser maior que 18.");

    do {
        pessoa.idade = parseInt(prompt("Digite sua idade: "));
        pessoa.nome = prompt("Digite seu nome: ");

    } while (pessoa.idade < 18);
    console.log("Idade válida!");
    console.log("Objeto:", pessoa);
    console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é válida!`);

}   


export function verificarPositivoNegativo() {
    console.log("Exercício 3 - Faça um programa que receba o nome e um número inteiro do usuário e informe se este número é positivo ou negativo.");

    let nomeUsuario = prompt("Digite seu nome: ");
    let numero = parseInt(prompt("Digite um número, para verificar se é positivo ou negativo: "));

    //criamos um objeto pessoa 
    let pessoa = {
        nome: nomeUsuario, // criamos uma prop dentro do obj  nome
        numeroEscolhido: numero
    };

    if (numero > 0) {
        //acessamos nosso obj por . e chamamos a prop 
        console.log(`${pessoa.nome}, o número que você escolheu ${pessoa.numeroEscolhido}, é positivo.`);
    } else if (numero < 0) {
        console.log(`${pessoa.nome}, o número que você escolheu ${pessoa.numeroEscolhido}, é negativo.`);
    } else {
        console.log(`${pessoa.nome}, o número que você escolheu ${pessoa.numeroEscolhido}, é neutro.`);
    }
}
