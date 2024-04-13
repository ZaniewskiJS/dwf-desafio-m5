import handleRoute from "../../../router";
import state from "../../state";
import piedraImg from "../../elements/piedra.svg";
import papelImg from "../../elements/papel.svg";
import tijeraImg from "../../elements/tijera.svg";
import bgImg from '../../elements/fondo.svg';

function mountResult(root: HTMLElement) {
   setTimeout(() => {
      history.pushState({}, "", "/score");
      handleRoute(location.pathname);
   }, 2000);

   const result = state.state.getResult();

   const container = document.createElement("div");
   container.classList.add("container");

   const computerMove = document.createElement("img");
   computerMove.classList.add("computer");

   if (result["computerMove"] == "piedra") {
      computerMove.setAttribute("src", piedraImg);
   }
   if (result["computerMove"] == "papel") {
      computerMove.setAttribute("src", papelImg);
   }
   if (result["computerMove"] == "tijera") {
      computerMove.setAttribute("src", tijeraImg);
   }

   const playerMove = document.createElement("img");
   playerMove.classList.add("player");

   if (result["playerMove"] == "piedra") {
      playerMove.setAttribute("src", piedraImg);
   }
   if (result["playerMove"] == "papel") {
      playerMove.setAttribute("src", papelImg);
   }
   if (result["playerMove"] == "tijera") {
      playerMove.setAttribute("src", tijeraImg);
   }

   const style = document.createElement("style");

   style.textContent = `
   body, html {
      margin: 0;
      padding: 0;
      overflow: hidden; /* Evita el desplazamiento vertical */
   }

   .container {
      position: relative;
      width: 100%;
      height: 100vh; /* Ocupa toda la altura de la ventana */
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${bgImg});
      background-size: cover;
      background-position: center;
   }

   .computer, .player {
      height: 50vh;
      position: absolute;
      transform: translateY(-50%);
   }

   .computer {
      left: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
   }

   .player {
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
   }

   button-comp {
      font-size: 16px;
      padding: 10px 20px;
      margin-bottom:100px;
   }
   `;

   root.innerHTML = "";
   root.append(container, style);
   container.append(computerMove, playerMove);
}

export { mountResult };
