// var palne1 = {
//     name: 'basic',
//     price: 100,
//     space:"transfer",
//     page:10,
// }

// document.getElementById("demo").innerHTML = palne1.name+" " + " " + palne1.price;

// let text = "";
// for (const x in palne1) {
    
//         text += palne1[x] + " ";
        
        
//     }
//     document.getElementById("demo").innerHTML = text;

// let text = Object.values(palne1)

//     document.getElementById("demo").innerHTML = text;

// for (let [plane,price] of Object.entries(palne1)) {
//     text += plane +" " +" "+  price + "<br>"
// }
//     document.getElementById("demo").innerHTML = text;

// text = JSON.stringify(palne1)
//     document.getElementById("demo").innerHTML = text;


// student name,fname ,class

var card = [
    card1 = {
    tiitle: 'mehran',
    img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
    paragraph: 'mehran is pakistan cars',
    price: '1200',
},
card2 = {
    tiitle: 'civic',
    img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
    paragraph: 'Doe',
    price: '1200',
},
card3 = {
    tiitle: 'truck',
    img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
    paragraph: 'Doe',
    price: '1200',
    
},
card4 ={
    tiitle: 'truck',
    img:'https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg',
    paragraph: 'Doe',
    price: '1200',
}];
var card_tittle = $('#card-title');
var card_text = $('#card-text');
var card_price = $('#card-price');

for (let i = 0; i < card.length; i++) {
    const element = card[i];
    // console.log(element.tiitle);
    
 
    $("#target").append(
        ` <div class="col p-3">
                <div class="card" style="width: 18rem;">
                    <img src="${element.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" id="card-title">${element.tiitle}</h5>
                        
                        <p class="card-text" id="card-text">${element.paragraph}</p>
                        <strong id="card-price">${element.price}</strong>
                      </div>
                  </div>
            </div>`
    );    
    
}
