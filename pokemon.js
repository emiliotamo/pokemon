class Pokemon {
    constructor(nombre, tipo,hpActual,hpMax, ataque, defensa, movimientos) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hpActual = hpActual;
        this.hpMax = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.puedeCurarse = true;
    }

    atacar(attack,defend, movimiento) {
        let movimientoAttack = movimiento.dañoBase;
        let factous= Math.random()*(1 - 0.85)+0.85;
        let damage=(attack.ataque/defend.defensa)*movimientoAttack * factous;
        defend.hpActual=defend.hpActual-damage;
        console.log(attack.nombre,"usa",movimiento.nombre,"y causa",damage.toFixed(0),"de daño a ",defend.nombre);
        if(defend.hpActual<0){
            defend.hpActual=0;
        }
    }

    curarse() {
        if(this.puedeCurarse){
        let heal = this.hpMax * 0.5;
        this.hpActual=this.hpActual+heal;
        console.log("Se curo",heal,"de vida");
        if(this.hpActual>this.hpMax){
            this.hpActual=this.hpMax;
        }
        this.puedeCurarse=false
        }else{
            console.log("No puede curarse mas",this.nombre);
        }
        
    }

    
}
module.exports=Pokemon;