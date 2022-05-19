console.log(`Trabalhando com Condicionais`);
const listaDeDestinos= new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 21;
console.log("Destinos possiveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}
console.log("Comprador não é maior de idade não posso vender")
console.log(listaDeDestinos);