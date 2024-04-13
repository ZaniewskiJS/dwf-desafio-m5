interface Score {
    computer: number;
    player: number;
 }
 
 interface CurrentGame {
    playerMove: string;
    computerMove: string;
    result: string;
 }
 
 interface ResultsMap {
    [key: string]: { [key: string]: string };
 }
 
 const state = {
    score: {
       computer: 0,
       player: 0,
    } as Score,
 
    currentGame: {
       playerMove: "",
       computerMove: "",
       result: "",
    } as CurrentGame,
 
    getScore() {
       return this.score;
    },
 
    getCurrentGame() {
       return this.currentGame;
    },
 
    selectPlay(newPlay: string) {
      this.currentGame.playerMove = newPlay;
    },
 
    computerMove() {
       const moves = ["piedra", "papel", "tijera"];
 
       this.currentGame.computerMove = moves[Math.floor(Math.random() * moves.length)];
    },
 
    getResult() {
       this.computerMove();
 
       const playerMove = this.currentGame.playerMove;
       const computerMove = this.currentGame.computerMove;
 
       if (playerMove !== "" && playerMove in resultsMap && computerMove in resultsMap[playerMove]) {
          const result = resultsMap[playerMove][computerMove];
          this.currentGame.result = result;
       } else {
          throw new Error("Invalid player or computer move");
       }
 
       this.updateScore(this.currentGame.result as "win" | "lose" | "tie");
 
       return this.getCurrentGame();
    },
 
    updateScore(result: "win" | "lose" | "tie") {
       if (result === "lose") {
          this.score.computer++;
       }
       if (result === "win") {
          this.score.player++;
       }
 
       localStorage.setItem(
          "Rock, paper, scissors score",
          JSON.stringify(this.getScore())
       );
    },
 
    syncWithLocal() {
       const score = localStorage.getItem("Rock, paper, scissors score");
       if (score) {
          this.score = JSON.parse(score);
       }
    },
 };
 
 const resultsMap: ResultsMap = {
    piedra: {
       piedra: "tie",
       papel: "lose",
       tijera: "win",
    },
    papel: {
       piedra: "win",
       papel: "tie",
       tijera: "lose",
    },
    tijera: {
       piedra: "lose",
       papel: "win",
       tijera: "tie",
    },
 };
 
 export default { state };
 