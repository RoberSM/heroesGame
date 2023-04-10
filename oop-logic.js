class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        this.canFly = false;
        this.shield = false;
    }
    attacked(damage) {
        if(this.canFly) { //(this.canFly === true) echivalent cu (this.canFly)
            let chance = Math.random(); //chance este o variabila ce tine rezultatul functiei Math.random(); valoarea variabilei chance difera de la o apelare (a functiei attacked) la alta (doar daca conditia this.canFly este true)
            if(chance > 0.5) { //chance > 0.5 => eroul care are proprietatea canFly va zbura si va evita damage-ul
                console.log(this.name + " flew away.");
                damage = 0;
            }
        }
        if(this.shield) { //(this.shield === false) echivalent cu (!this.shield)
            damage *= 0.8; //damage = damage * 0.8; => damage-ul scade cu 0.2
            console.log(this.name + " defends with a shield.");
        }
        this.hp -= damage; //this.hp = this.hp - damage;
        console.log(this.name + " has been attacked. Hp reduced by " + damage + ". Hp remaining: " + this.hp + ".");
    }
}

class Dwarf extends Hero{
    constructor(name, hp) {
        super(name, hp);
        this.shield = true;
    }

    attack(otherHero) {
        let damage= 10;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);
    }
}

class Sprite extends Hero{
        constructor(name, hp) {
            super(name, hp);
            this.canFly = true;
        }
    
        attack(otherHero) {
            let damage= 15;
            console.log(this.name + " attacked with damage: " + damage + ".");
            otherHero.attacked(damage);
        }
}

class Dragon extends Hero{
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
        this.shield = true;
    }

    attack(otherHero) {
        let damage= 5;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0;
    }

    performAttack() {
        if(this.turn === 0) {
            this.hero1.attack(this.hero2);
        }else{
            this.hero2.attack(this.hero1);
        }
    }

    changeTurn() {
        this.turn = 1 - this.turn;
    }

    findWinner() {
        if(this.hero1.hp > 0) {
            let winner = this.hero1.name + " fought with" + " " + this.hero2.name + " and won with " + this.hero1.hp + " HP left."
            console.log(winner);
            return winner;
        }else if(this.hero2.hp > 0) {
            let winner = this.hero2.name + " fought with" + " " + this.hero1.name + " and won with " + this.hero2.hp + " HP left."
            console.log(winner);
            return winner;
        }else{
            let winner = "No heroes left alive."
            console.log(winner);
            return winner;
        }
    }

    go() {
        do {
            this.performAttack();
            this.changeTurn();
        } while(this.hero1.hp > 0 && this.hero2.hp > 0);
        this.findWinner();
    }
}

let dwarf = new Dwarf("Doodles", 50);
let sprite = new Sprite("Hakuna Matata", 40);
let dragon = new Dragon("Ciupi", 50);

let epicFight = new Fight(dwarf, dragon);
epicFight.go();






