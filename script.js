var nome = prompt("Olá, por favor digite seu nome:");
var moeda = prompt(
  `${nome}Qual moeda você gostaria de converter?\n \n [1 = para libra]\n \n [2= para euro] \n \n [3 Bitcoin]`
);

var sigla;
var cotacao;
var nomedaMoeda;

if (moeda == 1) {
  nomeMoeda = "libra";
  siglaMoeda = "£";
  cotacao = 4.12;
} else if (moeda == 2) {
  nomeMoeda = "euro";
  siglaMoeda = "€ ";
  cotacao = 5.55;
} else if (moeda == 3) {
  nomeMoeda = "bitcoin";
  siglaMoeda = "฿ ";
  cotacao = 116276.45;
} else {
  alert("Valor invalido");
}

if (moeda == 1 || moeda == 2 || moeda == 3) {
  var valorTexto = prompt(
    nome + ", qual o valor em " + nomeMoeda + " você deseja converter?"
  );
  if (moeda != 3) {
    var valorParaConversao = parseFloat(valorTexto).toFixed(2);
  } else {
    var valorParaConversao = parseFloat(valorTexto).toFixed(2);
  }
  var valorEmReal = valorParaConversao * cotacao;

  //Converte Dolar para real
  valorEmReal = valorEmReal.toFixed(2);

  //Fixa o valor em duas casas decimais
  if (valorParaConversao != "NaN") {
    //verifica se é um numero válido
    alert(
      nome +
        ", o valor de " +
        siglaMoeda +
        valorParaConversao +
        " corresponde a R$ " +
        valorEmReal
    );
  } else {
    alert("Valor invalido");
  }
}
