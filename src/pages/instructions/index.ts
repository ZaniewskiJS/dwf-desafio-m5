import bgImg from '../../elements/fondo.svg'

function mountInstructions(root: HTMLElement | null) {
   if (!root) {
      console.error("El elemento root es nulo.");
      return;
   }

   const title = document.createElement("subtitle-comp");
   title.textContent =
      "Presiona jugar y elige: piedra, papel o tijera antes de que pasen los 3 segundos.";

   const button = document.createElement("button-comp");
   button.setAttribute("text", "Jugar!");
   button.setAttribute("target", "/play");

   const moveSelector = document.createElement("move-selector-comp");

   const container = document.createElement("div");
   container.classList.add("container");

   const style = document.createElement("style");
   style.textContent = `
   .container {
      background-image: url(${bgImg});
      min-height: 80vh;
      width: 100%; /* Ocupa todo el ancho del viewport */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 11vh;
      padding: 0 20px; /* Añade margen a los costados */
      box-sizing: border-box; /* Incluye el padding en el ancho total */
   }

   subtitle-comp {
      font-size: 18px;
      text-align: center;
      margin-bottom: 20px;
   }

   button-comp, move-selector-comp {
      width: 100%;
      max-width: 300px; /* Limita el ancho máximo del contenido */
   }

   @media screen and (min-width: 1280px) {
      .container {
         max-width: 1280px; /* Establece un ancho máximo para el contenido */
         margin: 0 auto; /* Centra el contenido en la pantalla */
      }
   }
   `;

   container.append(title, button, moveSelector);
   root.innerHTML = "";
   root.append(container, style);
}

export { mountInstructions };
