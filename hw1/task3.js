
const ADMIN_PASSWORD = 'qwerty';
let message;

let input = prompt ('Hello');

if(input === null){
    message = 'Отменено пользователем!';
} else if(input === ADMIN_PASSWORD){
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert('message');

