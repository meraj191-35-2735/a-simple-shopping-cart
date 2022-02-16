function caseNumberUpdate(isCasePlus, inputButton, goodsPrice, perCasePrice) {
    const caseInput = document.getElementById(inputButton);
    const casePrice = document.getElementById(goodsPrice);
    const updatePrice = parseInt(casePrice.innerText);
    if (isCasePlus) {
        const caseNumber = parseInt(caseInput.value) + 1;
        caseInput.value = caseNumber;
        const totalPrice = updatePrice + perCasePrice;
        casePrice.innerText = totalPrice;
    } else {
        const caseNumber = parseInt(caseInput.value);
        if (caseNumber > 0) {
            const updateNumber = caseNumber - 1;
            caseInput.value = updateNumber;
            const totalPrice = updatePrice - perCasePrice;
            casePrice.innerText = totalPrice;
        }
    }
    document.getElementById('sub-total').innerText = calculateTotalPrice();
    const vat = calculateTotalPrice() * 0.1;
    document.getElementById('vat').innerText = vat;
    const total = vat + calculateTotalPrice();
    document.getElementById('total').innerText = total;
}

function calculateTotalPrice() {
    const phoneNumber = parseInt(document.getElementById('phone-number').value);
    const phoneTotal = phoneNumber * 1220;
    const caseNumber = parseInt(document.getElementById('case-number').value);
    const caseTotal = caseNumber * 60;
    const subTotal = phoneTotal + caseTotal;
    return subTotal;
}




document.getElementById('case-plus').addEventListener('click', function() {
    caseNumberUpdate(true, 'case-number', 'case-price', 60);
})
document.getElementById('case-minus').addEventListener('click', function() {
    caseNumberUpdate(false, 'case-number', 'case-price', 60);
})
document.getElementById('phone-plus').addEventListener('click', function() {
    caseNumberUpdate(true, 'phone-number', 'phone-price', 1220)
})
document.getElementById('phone-minus').addEventListener('click', function() {
    caseNumberUpdate(false, 'phone-number', 'phone-price', 1220)
})