document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('title_input').value
    const price = document.getElementById('price_input').value
    const seats = document.getElementById('seats_input').value

    if (!/[a-zA-Z]/.test(name)) {
        alert('Назва гелікоптера повинна містити також букви!');
        return;
    }
    if (!/^\d+$/.test(price)) {
        alert('Ціна повинна бути числом!');
        return;
    }
    if (!/^\d+$/.test(seats)) {
        alert('Кількість сидінь повинна бути числом!');
        return;
    }
    if (seats == 0) {
        alert('Значення має бути більшим нуля!')
        return;
    }
    if (seats < 0) {
        alert('Значення має бути більшим нуля!')
        return;
    }


    const newHelicopter = {
        id: Date.now(),
        title: name,
        price: parseInt(price),
        seats: parseInt(seats)
    }

    let helicopters = JSON.parse(localStorage.getItem('helicopters')) || [
        { id: 1, title: "Sikorsky S-76", price: 13000000, seats: 12 },
        { id: 2, title: "Bell 407", price: 3500000, seats: 6 },
        { id: 3, title: "Eurocopter EC135", price: 5500000, seats: 7 },
        { id: 4, title: "Robinson R44", price: 500000, seats: 4 },
        { id: 5, title: "AgustaWestland AW139", price: 14000000, seats: 15 },
        { id: 6, title: "MD Helicopters MD500", price: 1500000, seats: 4 },
        { id: 7, title: "Airbus H225 Super Puma", price: 27000000, seats: 19 },
        { id: 8, title: "Boeing AH-64 Apache", price: 35000000, seats: 2 },
        { id: 9, title: "Leonardo AW119 Koala", price: 4500000, seats: 7 },
        { id: 10, title: "Kamov Ka-32", price: 15000000, seats: 16 }
    ];
    
    helicopters.push(newHelicopter);
    localStorage.setItem('helicopters', JSON.stringify(helicopters));

    setTimeout(function() {
        window.location.href = './index.html'
    }, 0);
});
