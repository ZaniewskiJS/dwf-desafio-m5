import handleRoute from "../../../router";
import state from "../../state";
import bgImg from '../../elements/fondo.svg'

function mountPlay(root: HTMLElement) {
   const counter = document.createElement("counter-comp");
   counter.addEventListener("timeUp", () => {
      history.pushState({}, "", "/result");
      handleRoute(location.pathname);
   });

   const moveSelector = document.createElement("move-selector-comp");
   moveSelector.setAttribute("big", "yes");
   moveSelector.shadowRoot?.addEventListener(
      "selected",
      (e: CustomEventInit) => {
         state.state.selectPlay(e.detail);
      }
   );

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
      justify-content: space-between;
   }
   `;

   root.innerHTML = "";
   container.append(counter, moveSelector);
   root.append(container, style);
}

export { mountPlay };
