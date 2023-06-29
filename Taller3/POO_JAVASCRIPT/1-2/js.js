class Perro{
    constructor(nombre){
        this.nombre=nombre;
    }
    ladrar(){
        console.log(`¡Woof! ${this.nombre}`);
    }
}
const miPerro = new Perro('Carlos');
const lupi = new Perro('Toby');

lupi.ladrar();
miPerro.ladrar()


