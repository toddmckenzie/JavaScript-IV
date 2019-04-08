/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
/*const GameObject = function(foobar) {
  this.createdAt = foobar.createdAt,
  this.name = foobar.name,
  this.dimensions = foobar.dimensions
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}
*/

class GameObject {
  constructor(param){
    this.createdAt = param.createdAt;
    this.name = param.name;
    this.dimensions = param.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`
  }
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
/*
const CharacterStats = function(param2) {
  this.healthPoints = param2.healthPoints,
  GameObject.call(this, param2)
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}
*/
                //should inherit destroy() from GameObject's prototype

class CharacterStats extends GameObject {
  constructor(params){
    super(params);
    this.healthPoints = params.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`
  }
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
/*
const Humanoid = function(param3) {
   this.team = param3.team,
   this.weapons = param3.weapons,
   this.language = param3.language,
   CharacterStats.call(this, param3)
 }
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
   return `${this.name} offers a greeting in ${this.language}.`
 };
*/
class Humanoid extends CharacterStats {
  constructor(params){
    super(params);
    this.team = params.team;
    this.weapons = params.weapons;
    this.language = params.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

//Humanoid.prototype = Object.create(GameObject.protoype);
 // should inherit takeDamage() from CharacterStats
                //   should inherit destroy() from GameObject through CharacterStats

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });


  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects
  //   which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

/*
const Villian = function(param4){
  Humanoid.call(this, param4)
}

Villian.prototype.takeLife = function(theFighter) {
  return (theFighter.healthPoints >= 5)? theFighter.healthPoints -= 5: `${theFighter} has died!`
}
/*
const Hero = function(param5){
  Humanoid.call(this, param5)
}

Hero.prototype.giveLife = function() {
  this.healthPoints =this.healthPoints + 10;
  return this.healthPoints
}

Hero.prototype.takeLifeAway = function(theFighter) {
  return (theFighter.healthPoints >= 5)?theFighter.healthPoints -= 5: `${theFighter} has died!`
}
*/
class Villian extends Humanoid {
  constructor(params){
    super(params);

  }
  takeLife(theFighter) {
    return (theFighter.healthPoints >= 5)? theFighter.healthPoints -= 5: `${theFighter} has died!`;
  }
}

class Hero extends Humanoid {
  constructor(params){
    super(params);

  }
  giveLife() {
    this.healthPoints = this.healthPoints + 10;
    return this.healthPoints
  }

  takeLifeAway(theFighter) {
    return (theFighter.healthPoints >= 5)?theFighter.healthPoints -= 5: `${theFighter} has died!`
  }
}




const evilPolitician = new Villian({
  healthPoints: 20,
  weapons: ['Taxes', 'Jail'],
  team: 'Nobodys',
  language: 'lies',
  name: 'The Liar',
  createdAT: new Date()
});


 const theLittleMan = new Hero({
   healthPoints: 15,
   weapons:['Books', 'Friends'],
   team: 'Everybody',
   language: 'The Truth',
   createdAT: new Date()
 });

console.log(theLittleMan.healthPoints);

console.log(evilPolitician.takeLife(theLittleMan));
console.log(theLittleMan.healthPoints);
console.log(theLittleMan.giveLife(theLittleMan));
console.log(evilPolitician.takeLife(theLittleMan));
console.log(evilPolitician.takeLife(theLittleMan));
console.log(evilPolitician.takeLife(theLittleMan));
console.log(theLittleMan.giveLife(theLittleMan));
console.log(theLittleMan.giveLife(theLittleMan));
console.log(theLittleMan.giveLife(theLittleMan));
console.log(theLittleMan.takeLifeAway(evilPolitician));
console.log(theLittleMan.takeLifeAway(evilPolitician));
console.log(theLittleMan.takeLifeAway(evilPolitician));
console.log(theLittleMan.takeLifeAway(evilPolitician));
console.log(theLittleMan.takeLifeAway(evilPolitician));
