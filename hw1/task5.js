//Китай 100 кред
//Чили 250 кр
//Автстралия 170 кред
//Индия 80 кр
//Ямайка 120 крed

let country;
let price;
let input = prompt('Which country?').toLowerCase();

switch (input) {
  case 'china':
    country = 'China';
    price = 100;
    // message = 'Доставка в ${country} будет стоить ${price} кредитов';
    break;

  case 'chili':
    country = 'chaili';
    price = 12500;
    // message = 'Доставка в ${country} будет стоить ${price} кредитов';
    break;

  case 'australia':
    country = 'australia';
    price = 170;
    // message = 'Доставка в ${country} будет стоить ${price} кредитов';
    break;

  case 'india':
    country = 'india';
    price = 80;
    // message = 'Доставка в ${country} будет стоить ${price} кредитов';
    break;

  case 'jamaica':
    country = 'jamaica';
    price = 120;
    // message = 'Доставка в ${country} будет стоить ${price} кредитов';
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
if (price > 0) {
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}
