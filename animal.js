/**
 * Modeling the Animal kingdom as a class. Applying all four principles of OOP.
 */


//Base class
class Animalia {
  constructor() {
    if (this.constructor === Animalia) {
      throw new Error('Cannot access this class') //throws an error when accessed
    }
  }
  movement = 'Active'
  canSexuallyReproduce = true
  isHeterotrophic = true
  respondToExternalStimuli = true

  #respiration() {
    console.log('All Animals breath in Oxygen and Breath out Carbon di Oxide')
  }

  

  breathing() {
    this.#respiration()
  }

  
}


//Inheritance 
class Chordata extends Animalia {
  constructor() {
    super()
    if (this.constructor === Chordata) {
      throw new Error('Cannot access this class') 
    }
  }
  hasNotoChord = true 
  hasHollowNerveCord = true
  hasPostAnalTail = true
  numberOfEyes = 2 
  #coldBlooded() {
    console.log('This animal is also cold blooded')
  }

  #warmBlooded() {
    console.log('This anaimal is also warm blooded')
  }

  displayColdBlooded() {
    this.#coldBlooded()
  }

  displayWarmBlooded() {
    this.#warmBlooded()
  }
}

//Inheritance
class Achordata extends Animalia {
  constructor() {
    super()
    if (this.constructor === Achordata) {
      throw new Error('Cannot access this class')
    }
    hasNotochord = true 
    hasHollowNerveCord = true
    hasPostAnalTail = true
  }  
}


//Inherited
class Fish extends Chordata {
  constructor() {
    super()
  }
  leaveUnderWater = true
  hasFin = true
}

//Inherited
class Amphibian extends Chordata {
  constructor() {
    super()
  }
  liveOnLand = true
  liveUnderWater = true
}

//Inherited
class Reptile extends Chordata {
  constructor() {
    super()
  }
  canBask = true
  scaleOnTheBody = true
  skin = 'Dry'
}

//Inherited
class Aves extends Chordata {
  constructor() {
    super()
  } 
  hasBeak = true
  hasFeather = true
  canChewFood = false
}

//Inherited
class Mammal extends Chordata {
  constructor() {
    super()
  } 
  giveBirthAlive = true
  growHair = true
  breastFeed = true
}




//Instance of the classes
const tilapia = new Fish()
console.log('===============Displaying result for Tilapia=================\n')
console.log('The tilapia has similar property as the', tilapia )

//Calling the private method with a public method
tilapia.breathing()
tilapia.displayColdBlooded()

const toad = new Amphibian()
console.log('===============Displaying result for Toad=================\n')
console.log('The toad has similar property as the', toad )

//Calling the private method with a public method
toad.breathing()
toad.displayColdBlooded()

const snake = new Reptile()
console.log('===============Displaying result for Snake=================\n')
console.log('The Snake has similar property as the', snake )

//Calling the private method with a public method
snake.breathing()
snake.displayColdBlooded()


const duck = new Aves()
console.log('===============Displaying result for Duck=================\n')
console.log('The Duke has similar property as the', duck )

//Calling the private method with a public method
duck.breathing()
duck.displayColdBlooded()

const human = new Mammal()
console.log('===============Displaying result for Human=================\n')
console.log('The Human has similar property as the', human )

//Calling the private method with a public method
human.breathing()
human.displayColdBlooded()
