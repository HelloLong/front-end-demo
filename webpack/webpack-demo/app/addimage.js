import '../styles/addImage.css'

let smallImg = document.createElement('img');

smallImg.src = require('../images/small.jpeg');
console.log(smallImg.src);
document.body.appendChild(smallImg);

// let bigImg = document.createElement('img');
// bigImg.src = require('../images/big.jpeg');
// console.log(bigImg.src);
// document.body.appendChild(bigImg);