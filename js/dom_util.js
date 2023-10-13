const titleInput = document.getElementById("title_input");
const priceInput = document.getElementById("price_input");
const seatsInput = document.getElementById("seats_input");
export const itemsContainer = document.getElementById("items_container")

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, title, price, seats }) => `
<li id="${getItemId(id)}" class="item_container">
    <img src="./src/helicopter.png"/>
        <div class="item_container_body">
            <h1 class="h1_pasted">${title}</h1>
            <h2 class="h2_pasted">Price: ${price}$</h2>
            <h2 class="h2_pasted">Seats quantity: ${seats}</h2>
        </div>
</li>`;

export const getInputValues = () => {
    return {
        title: titleInput.value,
        price: priceInput.value,
        seats: seatsInput.value
    }
};

export const clearInputs = () => {
        titleInput.value = "";
        priceInput.value = "";
        seatsInput.value = "";
}

export const addItemToPage = ({ id, title, price, seats }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, price, seats })
    )
}

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
}

