// LECTURE 1
//let country="India";
//let continent="Asia";
 let population=130;
// console.log(country);
// console.log(continent);
// console.log(population);

//LECTURE 2
//let isIsland=true;
let language;
// console.log(typeof(isIsland));
// console.log(typeof(population));
// console.log(typeof(country));
// console.log(typeof(language));

//LECTURE 3
language="Bengali";
const country="India";
const continent="Asia";
const isIsland=false;
//isIsland=true;

//LECTURE 4
let a=population/2;
console.log(a);
a++;
console.log(a);

const finland=6;
console.log(population>finland);
if(population>finland) console.log("We have more population than Finland!");
else console.log("NO!");

const average_population=33;
console.log(population>average_population);

var description =country+ ' is in '+continent+ ', and its '+population +' million people speak '+ language;
console.log(description);

//LECTURE 5
const description1=`${country} is in ${continent}, and its ${population} million people speak ${language}` ;
console.log(description1);

//LECTURE 6
if(population>average_population) console.log(`${country}'s population is ${population-average_population} million above average`);
else console.log(`${country}'s population is ${population-average_population} million below average.`);

//LECTURE 7
console.log('9'-'5')
console.log('19'-'13'+'17')
console.log('19'-'13'+17)
console.log('123'<57)
console.log(5+6+'4'+9-4-2)

//Coding Challenge #1 AND #2
const mark_weight=95
const mark_height=1.88
const john_weight=85
const john_height=1.76
const mark_bmi=(mark_weight)/(mark_height*mark_height)
console.log(mark_bmi)
const john_bmi=john_weight/john_height**2
console.log(john_bmi)
let markHigherBMI
if(mark_bmi>john_bmi) 
{
    markHigherBMI = true
    console.log(`Mark's BMI (${mark_bmi}) is higher than John's (${john_bmi}) !`)
}
else 
{
    markHigherBMI=false
    console.log(`John's BMI (${john_bmi}) is higher than Mark's (${mark_bmi}) !`)
}    
//console.log(markHigherBMI)

//Coding Challenge #3

const dolphin_avg_scroe = (97+112+101)/3;
const koala_avg_score =(109+95+106)/3
console.log(dolphin_avg_scroe,koala_avg_score)
if(dolphin_avg_scroe>koala_avg_score && dolphin_avg_scroe>=100) console.log("Dolphin Wins")
else if(dolphin_avg_scroe<koala_avg_score && koala_avg_score>=100) console.log("Koala Wins")
else if(dolphin_avg_scroe===koala_avg_score && dolphin_avg_scroe>=100 && koala_avg_score>=100) console.log("Draw")
else console.log("No One WIns")

//Coding Challenge #4
let tip=0;
const bill=430;
const x = (bill>=50 && bill<=300)?tip=(bill*15/100):tip=(bill*20/100);
console.log(`The Bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)
