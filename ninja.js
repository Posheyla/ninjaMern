
class Ninja{
    constructor(nombre,salud,velocidad=3,fuerza=3){
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

let primer = new Ninja('Luisa',20);

primer.sayName();
primer.showStats();
primer.drinkSake();
primer.showStats();