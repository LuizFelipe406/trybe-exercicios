const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;

const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength + 1)) + warrior.strength;

const mageDamage = () => {
    if (mage.mana > 15) {
        const damage = {
            damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence + 1)) + mage.intelligence,
            mana: 15,
        }
        return damage;
    }
    else {
        const damage = {
            damage: 'Não possui mana suficiente',
            mana: 0,
        }
        return damage;
    }
}

const gameActions = {
    warrior: (warriorDamage) => {
        warrior.damage = warriorDamage();
        dragon.healthPoints -= warrior.damage;
    },
    mage: (mageDamage) => {
        const round = mageDamage();
        mage.damage = round.damage;
        mage.mana -= round.mana;
        dragon.healthPoints -= mage.damage;
    },
    dragon: (dragonDamage) => {
        dragon.damage = dragonDamage();
        warrior.healthPoints -= dragon.damage;
        mage.healthPoints -= dragon.damage
    },
    battleMembers: () => console.table(battleMembers),

};

gameActions.warrior(warriorDamage);
gameActions.mage(mageDamage);
gameActions.dragon(dragonDamage);
gameActions.battleMembers();
