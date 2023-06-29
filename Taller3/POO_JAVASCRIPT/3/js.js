class CuentaBancaria{
    constructor(titular,saldo=0){
        this.saldo=saldo;
        this.titular=titular
    }

    depositar(cantidad){
        this.saldo=cantidad
    }
    retirar(cantidad){
        if (cantidad>this.saldo) {
            return console.log("No mmes como va a sacar mas de lo que tiene :v su saldo es de",this.saldo);
        }else{
            this.saldo=this.saldo-cantidad
            console.log(this.saldo);

        }
        

    }
    nombre(titular,saldo){
        console.log(this.titular,this.saldo);
    }

    


}

const miCuenta = new CuentaBancaria("Santiago");
miCuenta.depositar(100);
miCuenta.retirar(50);
miCuenta.nombre()
