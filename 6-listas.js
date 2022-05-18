console.log(`Trabalhando com Listas`);
//modelo inicial de array
//const salvador=`Salvador`;
//const saoPaulo=`São Paulo`;
//const rioDeJaneiro=`Rio de Janeiro`;

//como criar um array prático
const listaDeDestinos= new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

//inserir um item na lista dinamicamente

listaDeDestinos.push(`Curitiba`,);

console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro); --- forma de usar com array inicial

//para retirar um item da lista dinamicamente (precisamos falar a posicao que se encontra e a quantidade)

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos[1]);