window.onload = function() {
    const helicopterId = window.location.search.substring(1);
    let helicopters = JSON.parse(localStorage.getItem('helicopters')) || [];

    // Find the helicopter with the given ID
    let helicopter = helicopters.find(helicopter => helicopter.id === parseInt(helicopterId));
    if (!helicopter) {
        alert('Helicopter not found');
        return;
    }

    // Fill the form fields with the helicopter data
    document.getElementById('title_input').value = helicopter.title;
    document.getElementById('price_input').value = helicopter.price;
    document.getElementById('seats_input').value = helicopter.seats;
}

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('title_input').value
    const price = document.getElementById('price_input').value
    const seats = document.getElementById('seats_input').value

    const helicopterId = window.location.search.substring(1);
    let helicopters = JSON.parse(localStorage.getItem('helicopters')) || [];

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
    
    // Find the helicopter with the given ID
    let helicopter = helicopters.find(helicopter => helicopter.id === parseInt(helicopterId));
    if (!helicopter) {
        alert('Helicopter not found');
        return;
    }

    // Update the helicopter data
    helicopter.title = name;
    helicopter.price = parseInt(price);
    helicopter.seats = parseInt(seats);

    // Save the updated helicopters list to localStorage
    localStorage.setItem('helicopters', JSON.stringify(helicopters));

    window.location.href = './index.html';
});
