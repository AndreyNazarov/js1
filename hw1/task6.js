let total = 0;

while (true) {
    let input = prompt("Tap number");

    if (input === null){
        console.log("canceled by user");
        break;
    }

    input = Number(input);

    const notANumber = Number.isNaN(input);

    if (notANumber) {
        console.log('not true');
        continue;
    }

    total += input;
}

console.log(total);
alert(total);
