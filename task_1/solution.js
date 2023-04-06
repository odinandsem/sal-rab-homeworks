function addInCartMessage(title, price) {
    let productName = Cake;
    let productPrice = 1000;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message;
    let message = productName;
    message = message + 'за';
    message = message + ' ';
    message = message + productPrice;
    message += ' ';
    message += 'теперь в корзине!';
    console.log(message);

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = 999;

    let newValue;
    let newValue = oldValue;
    let newValue = oldValue + 1;

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum = oldSum + difference;
    let newSumText = newSum + ' ₽';
    let newSumText = `${newSum} ₽`;

    // Конец решения задания №1.3.

    return newSumText;
}

