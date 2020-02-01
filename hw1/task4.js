const credits = '23580';
const pricePerDroid = '3000';
let userInput = prompt("Сколько дроидов хотите приобрести?");
const totalPrice = userInput * pricePerDroid;

if ( userInput === null){
    console.log('Отменено пользователем!');
}  else if (pricePerDroid <= credits){
    console.log ('Вы купили  дроида, на счету осталось ${credits - pricePerDroid} кредитов');
} 
 else {
    messsage = 'Недостаточно средств на счету';
}
