
class Ninja{
    constructor(nombre,salud=100,velocidad=3,fuerza=3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName(){
        console.log('Nuevo ninja. Hola ' + this.nombre);
    }
    showStats(){
        console.log(this.nombre,this.fuerza,this.velocidad,this.salud);
    }
    drinkSake(){
        this.salud += 10;
    }
}

class Sensei extends Ninja{
    constructor(nombre,salud=200,velocidad=10,fuerza=10,sabiduria=10){
        super(nombre,salud,velocidad,fuerza);
        this.sabiduria = sabiduria;
    }

    sayName(){
        super.sayName();
    }
    showStats(){
        super.showStats();
        console.log(this.sabiduria);
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
    }
}

let primer = new Ninja('Luisa');
const superSensei = new Sensei("Master Splinter");

primer.sayName();
primer.showStats();
primer.drinkSake();
primer.showStats();

superSensei.speakWisdom();
superSensei.showStats();