/* Fundamentos e variáveis*/
let pontos = 2;
pontos = pontos + 10;
console.log(pontos);

const MAX_PONTOS = 100;
// MAX_PONTOS = 200; // Ocorre um erro: TypeError, pois não é possível alterar o valor de uma constante
console.log(MAX_PONTOS);

let nome = "João";
let numero = 10;
let booleano = true;
let indefi = undefined;
let nulo = null;

console.log(typeof nome); // string
console.log(typeof numero); // numero
console.log(typeof booleano); // booleano
console.log(typeof indefi); // indefinido
console.log(typeof nulo); // objeto

let nome1 = "Maria";
let sobrenome = "Silva";
console.log(`Olá, ${nome1} ${sobrenome}!`); //formatação de string com template literals
console.log(nome1 + " " + sobrenome); //concatenação de strings

//Funções

// Função declarada: pode ser chamada antes da declaração por causa do hoisting.
console.log("É maior de idade?", ehMaiorDeIdade(18));

function ehMaiorDeIdade(idade) {
	return idade >= 18;
}

// Função de expressão: a chamada antecipada causa ReferenceError.
try {
	console.log(ehMaiorDeIdadeExpressao(18));
} catch (erro) {
	console.log("ReferenceError na chamada antecipada:", erro.message);
}

const ehMaiorDeIdadeExpressao = function (idade) {
	return idade >= 18;
};

console.log("Expressão declarada:", ehMaiorDeIdadeExpressao(18));


function dobroDeclarada(numero) {
	return numero * 2;
}

const dobroExpressao = function (numero) {
	return numero * 2;
};

const dobroArrow = (numero) => numero * 2;

console.log("Dobro declarada:", dobroDeclarada(5));
console.log("Dobro expressão:", dobroExpressao(5));
console.log("Dobro arrow:", dobroArrow(5));

function dobroComPadrao(numero = 1) {
	return numero * 2;
}

console.log("Dobro sem argumento:", dobroComPadrao());

// Bloco 3 - Controle de Fluxo
function classificarNota(nota) {
	if (nota >= 6) {
		return "Aprovado";
	} else {
		return "Reprovado";
	}
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));

const corSemaforo = "amarelo";
switch (corSemaforo) {
	case "vermelho":
		console.log("Pare");
		break;
	case "amarelo":
		console.log("Atenção");
		break;
	case "verde":
		console.log("Siga");
		break;
	default:
		console.log("Cor inválida");
}

console.log("Tabuada do 5:");
for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
	console.log(`5 x ${multiplicador} = ${5 * multiplicador}`);
}

console.log("Contagem regressiva:");
let contagem = 5;
while (contagem >= 1) {
	console.log(contagem);
	contagem--;
}

console.log("Números pares e ímpares com for:");
for (let numeroAtual = 1; numeroAtual <= 20; numeroAtual++) {
	const tipo = numeroAtual % 2 === 0 ? "par" : "ímpar";
	console.log(`${numeroAtual} é ${tipo}`);
}

console.log("Números pares e ímpares com while:");
let numeroAtual = 1;
while (numeroAtual <= 20) {
	const tipo = numeroAtual % 2 === 0 ? "par" : "ímpar";
	console.log(`${numeroAtual} é ${tipo}`);
	numeroAtual++;
}

function diaDaSemana(numero) {
	switch (numero) {
		case 1:
			return "Domingo";
		case 2:
			return "Segunda-feira";
		case 3:
			return "Terça-feira";
		case 4:
			return "Quarta-feira";
		case 5:
			return "Quinta-feira";
		case 6:
			return "Sexta-feira";
		case 7:
			return "Sábado";
		default:
			return "Número inválido";
	}
}

console.log("Dia 2:", diaDaSemana(2));
console.log("Dia 8:", diaDaSemana(8));
