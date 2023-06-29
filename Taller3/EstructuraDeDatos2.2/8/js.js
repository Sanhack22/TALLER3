let objeto= {
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
    }

    
for (const clave in objeto) {
    for (const clave2 in objeto[clave]) {
        console.log(clave2,objeto[clave][clave2]);

    }
    console.log("----------");
    
}
