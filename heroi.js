class heroType {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type.toLowerCase().trim();
    }

    heroAttackType() {
        switch (this.type) {
          case "mago":
            return "magia";
          case "guerreiro":
            return "espada";
          case "monge":
            return "artes marciais";
          case "ninja":
            return "shuriken";
          default:
            return "ataque desconhecido";
        }
    }

    attack(){
        console.log(`O ${this.type} ${this.name} atacou usando ${this.heroAttackType()}`)
    }
}

let heroMage = new heroType("Gandalf", 2140, "mago");
let heroWarrior = new heroType("Aragorn", 140, "guerreiro");
let heroMonk = new heroType("Strange", 40, "monge");
let heroNinja = new heroType("Naruto", 21, "Ninja");

heroMage.attack();
heroWarrior.attack();
heroMonk.attack();
heroNinja.attack();

