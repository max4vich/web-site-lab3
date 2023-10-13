import { 
    getInputValues,
    clearInputs,
    addItemToPage,
    renderItemsList,
    itemsContainer
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const checkbox = document.getElementById("myCheckbox");

const searchButton = document.getElementById("search");
const clearButton = document.getElementById("clear");

const findInput = document.getElementById("find_input")

const countButton = document.getElementById("count");
const counterDisplay = document.querySelector(".hero__counter");

// const saveButton = document.getElementById("save_button");
// const editButton = document.getElementById("edit_button");
// const deleteButton = document.getElementById("delete_button");


let helicopters = [
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

let filteredHelicopters = [...helicopters]

helicopters.forEach(helicopter => addItemToPage(helicopter));

// const addItem = ({ title, price, seats }) => {

//     const newItem = {
//         id: 1,
//         title,
//         price,
//         seats
//     }
    
//     helicopters.push(newItem);

//     addItemToPage(newItem)
// };

// submitButton.addEventListener("click", (event) => {
//     event.preventDefault;
//     const values = getInputValues();
//     const { title, price, seats } = values;
//     clearInputs();
//     addItem({
//         title,
//         price,
//         seats
//     });
// });

searchButton.addEventListener("click", () => {
    const searchTerm = findInput.value.toLowerCase();
    itemsContainer.innerHTML = "";
    filteredHelicopters = helicopters.filter(helicopter => 
        helicopter.title.toLowerCase().includes(searchTerm)
    );
    filteredHelicopters.forEach(helicopter => addItemToPage(helicopter));
});


clearButton.addEventListener("click", () => {
    filteredHelicopters = [...helicopters];
    renderItemsList(filteredHelicopters);
    findInput.value="";
})

renderItemsList(helicopters)

checkbox.addEventListener("change", () => {
    itemsContainer.innerHTML = "";
    if (checkbox.checked) {
        filteredHelicopters.sort((a, b) => a.price - b.price);
    } else {
        filteredHelicopters.sort((a, b) => a.id - b.id);
    }
    filteredHelicopters.forEach(helicopter => addItemToPage(helicopter));
});

const countTotalSeats = () => {
    let totalSeats = 0;
    filteredHelicopters.forEach(helicopter => {
        totalSeats += helicopter.seats;
    });
    return totalSeats;
};

countButton.addEventListener("click", () => {
    const totalSeats = countTotalSeats();
    counterDisplay.textContent = totalSeats;
});