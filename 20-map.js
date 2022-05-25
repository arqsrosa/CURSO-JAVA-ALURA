function getadmins(map){
    let admins = []
    for([key, value]of map){
        if(value === `Admin`){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios= new Map();

usuarios.set(`Luiz`, `Admin`);
usuarios.set(`Silvia`, `Admin`);
usuarios.set(`Jorge`, `User`);
usuarios.set(`Elaine`, `Admin`);

console.log(getadmins(usuarios))

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
function valoresUnicos(arr){
    const mySet= new Set(arr);

    return[...mySet];
}

console.log(valoresUnicos(meuArray));