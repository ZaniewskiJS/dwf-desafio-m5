import initButton from "./components/button";
import initCounter from "./components/counter";
import { initMoveSelector } from "./components/move-selector";
import { initSubtitle } from "./components/subtitle";
import { initTitle } from "./components/title";
import handleRoute from "../router";
import state from "./state";



(() => {
   state.state.syncWithLocal();
   initTitle();
   initButton()
   initMoveSelector();
   initSubtitle();
   initCounter();
   handleRoute(location.pathname)
})();
