
const iceCreams = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0

}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0

}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0

}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
}, {
    name: 'Styrofoam Bowl',
    image: 'https://media.istockphoto.com/photos/discarded-polystyrene-plastic-food-container-garbage-polluting-the-picture-id994823356?s=612x612',
    price: 6,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}, {
    name: 'Ants',
    image: 'https://images.unsplash.com/photo-1539545555026-ea9418026ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: .5,
    quantity: 0
}]

// NOTE Selectors

function buyIceCream(iceCreamName) {
    let iceCream = iceCreams.find(i => i.name == iceCreamName)
    iceCream.quantity++
    console.log(iceCream);
    drawIceCream()
}

function buyVessel(vesselName) {
    let vessel = vessels.find(v => v.name == vesselName)
    vessel.quantity++
    console.log((vessel));

}

function buyTopping(toppingName) {
    let topping = toppings.find(t => t.name == toppingName)
    topping.quantity++
    console.log(topping);
}


// NOTE Drawing to order sheet 

function drawIceCream() {

    let template = ''

    iceCreams.forEach(i => {
        if (i.quantity > 0) {
            template += `<div class="d-flex raleway border-bottom justify-content-evenly">
       <div class="col-3">${i.name}</div>
       <div class="col-3">${i.quantity}</div>
       <div class="col-3">${i.price}</div>
   </div>`
        }
        document.getElementById('iceCreamCart').innerHTML = template
        drawTotal()
    })
}

// NOTE Draw total

function drawTotal() {

    let total = 0

    iceCreams.forEach(i => {
        total += i.quantity * i.price
    })
    console.log(total);
    document.getElementById('total').innerText = total

}
