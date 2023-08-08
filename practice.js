

'use strict'

/* 
const PI = Math.PI

console.log(PI)  
console.log(Math.round(PI))
console.log(Math.floor(PI)) 
console.log(Math.ceil(PI))  //4 
console.log(Math.round(9.81)) //10
*/


/*
const openingHours = {
    thur:{
        open:12,
        close:22
    },

    Fri:{
        open:11,
        close:23,
    },

    Sat:{
        open:0,
        close:22
    }
}

const properties = Object.keys(openingHours)
let openStr = `we are open ${properties.length} days:`

for(const day of properties){
    openStr = openStr + `${day}`
}

console.log(openStr)

const values = Object.values(openingHours)
console.log(values)


//entire object

const entries = Object.entries(openingHours)
console.log(entries)



//key, value

for(const [day, {open, close}] of entries ){
    console.log(`on ${day} we open at ${open} and close at ${close}`)
}

*/


//coding challenge 
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

//Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
/*
  const players = [...game.scored]

for(const names of players){
    console.log(names)
  

}

*/

//1

for(const [i, player]  of game.scored.entries()){
    console.log(`goal ${i + 1} ${player}`)
}


//2
//Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds)
let average = 0;

for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);


//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
  }

  console.log('maakai prince'.toUpperCase())

  const capNames = function(name){
    
    //convert to arrays
    const names = name.split()
    
    const upperCaseArray = []

    for( const n of names ){
      //upperCaseArray.push(n[0].toUpperCase() + n.slice(1))
      console.log(n)

      upperCaseArray.push(n.replace(n[0], n[0].toUpperCase()))

      console.log(upperCaseArray.join(''))
    }

  }

  capNames('udokafm')
  capNames('prince maakai')


  //More on functions

  const airPeace = {
    airline: 'airPeace',
    code : 'LH',
    bookings:[],

    book(flightNum, name){
      console.log(`${name} booked a seat on ${this.airline} flight with code ${this.code}${flightNum}`)
    }
  }

  airPeace.book(236, 'maakai, princewill')