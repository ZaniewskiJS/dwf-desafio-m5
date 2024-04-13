import bgImg from '../../elements/fondo.svg'
import scissor from '../../elements/tijera.svg'
import stone from '../../elements/piedra.svg'
import paper from '../../elements/papel.svg.'

function mountWelcome(root: HTMLElement) {
  const titleWelcome = document.createElement("div");
  titleWelcome.className = "TitleContainer";

  const title0 = document.createElement("title-comp");
  const title1 = document.createElement("title-comp");
  const title2 = document.createElement("title-comp");

  title0.textContent = "Piedra";
  title1.innerHTML = "Papel <span class='light'>ó</span>";
  title2.textContent = "Tijera";

  const button = document.createElement("button-comp");
  button.setAttribute("text", "Empezar");
  button.setAttribute("target", "/instructions");

  const moveSelector = document.createElement("move-selector-comp");

  const container = document.createElement("div");
  container.classList.add("container");

  const style = document.createElement("style");
  style.textContent = `
    .container {
      background-image: url(${bgImg});
      min-height: 80vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 11vh;
    }

    .TitleContainer {
      margin-top: 20px; /* Ajusta el margen superior según lo necesites */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .light {
      margin-left: 5px;
      margin-right: 5px;
    }
  `;

  titleWelcome.appendChild(title0);
  titleWelcome.appendChild(title1);
  titleWelcome.appendChild(title2);

  container.append(titleWelcome, button, moveSelector);
  root.innerHTML = "";
  root.append(container, style);
}

export { mountWelcome };
