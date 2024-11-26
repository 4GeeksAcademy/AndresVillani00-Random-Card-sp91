/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let card = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let imageCard = ['src/assets/img/corazon.png', 'src/assets/img/diamante.png', 'src/assets/img/pica.png', 'src/assets/img/trebol.png'];
  let imageRandom = imageCard[Math.floor(Math.random() * imageCard.length)];
  let radomCard = `
    <div class="row">
      <div class="col-md-12 text-start p-5">
        <img id="idImgCard" src="${imageRandom}">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center p-5">
        <h1>${card[Math.floor(Math.random() * card.length)]}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-end p-5">
        <img id="idImgCard" src="${imageRandom}">
      </div>
    </div>
  `;

  document.querySelector("#randomCard").innerHTML = radomCard;
};
