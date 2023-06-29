let objeto = { numeros: [45, 78, 22, 89, 8] }

for(clave in objeto){
    for (clave2 in objeto[clave]) {
        console.log(objeto[clave][clave2]);
    }
    

}