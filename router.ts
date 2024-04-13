import { mountWelcome } from "./src/pages/welcome";
import { mountInstructions } from "./src/pages/instructions";
import { mountPlay } from "./src/pages/play";
import { mountResult } from "./src/pages/result";
import { mountScore } from "./src/pages/score";

interface Route {
   route: RegExp;
   do: (root: HTMLElement) => void;
}

const routes: Route[] = [
   {
      route: /\B\/\B|\/dwf-desafio-m5\/\B|\/welcome$/,
      do: mountWelcome,
   },
   {
      route: /\/dwf-desafio-m5\/instructions|\/instructions$/,
      do: mountInstructions,
   },
   {
      route: /\/dwf-desafio-m5\/play|\/play$/,
      do: mountPlay,
   },
   {
      route: /\/dwf-desafio-m5\/result|\/result$/,
      do: mountResult,
   },
   {
      route: /\/dwf-desafio-m5\/score|\/score$/,
      do: mountScore,
   },
];

export default function handleRoute(newRoute: string) {
   const root = document.querySelector(".root");
   if (!root) {
      console.error("No se encontró el elemento '.root'.");
      return;
   }

   routes.some((r) => {
      if (r.route.test(newRoute)) {
         r.do(root as HTMLElement);
         return true; // Detener la iteración después de encontrar la ruta coincidente
      }
   });
}
