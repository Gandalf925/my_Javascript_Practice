'use strict'

console.log('from main.js it\' mine!');

console.log('hello' + ' work!');

console.log(10 % 3); //あまり
console.log(10 ** 3); //べき乗

const price = 200;

console.log(price * 140);
console.log(price * 290);

let tomato = 100;

console.log(price * 140);
console.log(price * 290);

price >= 180 ? console.log('Great!') : console.log('stupid!');


switch(price) {
  case 150:
    console.log('Great Job!');
    break;
  case 180:
    console.log('Amaiging!');
    break;
  case 200:
    console.log('Wonderful!');
    break;
} 

for(let i = 1; i <= 10; i++){
  console.log(`hello ${i}`);
}

let hp = -100;

while(hp >0) {
  console.log(`${hp} HP left!`);
  hp -= 20;
}

do {
  console.log(`${hp} HP left!`);
  hp -= 20;
} while(hp > 0) ;

for(let i = 1; i <= 10; i++){
  if(i === 4){
    continue;
  }

  if(i % 3 === 0){
    continue;
  }
  console.log(i);

}

console.log('TOM is Great!')
console.log('TOM is Great!')
showAd('ore');
console.log('TOM is Great!')
console.log('TOM is Great!')
showAd();
console.log('TOM is Great!')
showAd('tuyo');
console.log('TOM is Great!')

function showAd(message = 'Ad'){
  console.log(`----- ${message} ------`);
}

const sum = function(a,b,c){
  return console.log(a + b + c);
}

sum(1,2,3)


const double = a => console.log(a * 2);

double(5);
