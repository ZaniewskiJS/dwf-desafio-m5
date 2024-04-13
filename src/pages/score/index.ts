import state from "../../state";
import greenStar from "../../elements/ganaste.svg";
import redStar from "../../elements/perdiste.svg";

function mountScore(root: HTMLElement) {
   const result = state.state.getCurrentGame().result;

   const totalScore = state.state.getScore();

   const container = document.createElement("div");
   container.classList.add("result-container");

   const star = document.createElement("img");
   star.classList.add("star");
   if (result == "win") {
      star.src = greenStar;
   } else {
      star.src = redStar;
   }

   const score = document.createElement("div");
   score.classList.add("score");
   score.innerHTML = `
   <h5 class="score__title">Score</h5>
   <div class="score__container">
      <span>Vos: ${totalScore.player}</span>
      <span>Maquina: ${totalScore.computer}</span>
   </div>
   `;

   const button = document.createElement("button-comp");
   button.setAttribute("text", "Volver a jugar");
   button.setAttribute("target", "/play");

   const style = document.createElement("style");
   style.textContent = `
    body, html {
        margin: 0;
        padding: 0;
        height: 100%; /* Asegura que la altura se ajuste a la pantalla */
        overflow: hidden; /* Evita cualquier desplazamiento vertical */
    }
    .result-container {
        width:100%;
        height:100%;
        background-color: ${
           result == "win"
              ? "rgba(136, 137, 73, 0.9)"
              : "rgba(137, 73, 73, 0.9)"
        };
        position: absolute;
        top: 50%; /* Centra verticalmente */
        left: 50%; /* Centra horizontalmente */
        transform: translate(-50%, -50%); /* Centra el contenedor */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 35px 20px;
        box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
    }
    .star {
        width: 69vw;
        margin-bottom: auto; /* Mueve la estrella hacia arriba */
    }
    .score {
        width: 69vw;
        min-height: 220px;
        background-color: white;
        border: solid black 10px;
        border-radius: 10px;
        font-family: 'Odibee Sans';
        font-size: 55px;
        padding: 15px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 0; /* Elimina cualquier margen */
    }
    .score__title {
        margin: 0;
        text-align: center;
    }
    .score__container {
        text-align: end;
        font-size: 45px;
    }
    @media screen and (min-width: 400px){
        .result-container {
            width: 100%; /* Ancho del contenedor en dispositivos móviles */
            height:100%;
        }
        .star {
            width: 100%; /* Ancho de la estrella en dispositivos móviles */
            max-width: 40vw; /* Ancho máximo de la estrella */
        }
        .score {
            width: 100%; /* Ancho del marcador en dispositivos móviles */
            max-width: 20vw; /* Ancho máximo del marcador */
        }
        .score__container > span {
            display: block;
        }
        button-comp {
            max-width: 40vw; /* Ancho máximo del botón */
            margin-top: 20px; /* Añade espacio encima del botón */
            font-size:30px;
        }
    }
    @media screen and (min-width: 768px) {
        .result-container {
            padding: 50px 100px;
        }

        .star {
            width: 20%;
        }

        .score {
            width: 50%; /* Reducir el ancho del marcador */
            font-size: 40px; /* Reducir el tamaño de la fuente */
        }

        button-comp {
            font-size: 24px;
        }
    }
    `;

   container.append(star, score, button);
   root.append(container, style);
}

export { mountScore };
