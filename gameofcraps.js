function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
  }
  
  function playCraps() {
    const comeOutRoll = rollDice() + rollDice();
    let result;
  
    if (comeOutRoll === 7 || comeOutRoll === 11) {
      result = "Win";
    } else if (comeOutRoll === 2 || comeOutRoll === 3 || comeOutRoll === 12) {
      result = "Lose";
    } else {
      const point = comeOutRoll;
  
      while (true) {
        const nextRoll = rollDice() + rollDice();
  
        if (nextRoll === point) {
          result = "Win";
          break;
        } else if (nextRoll === 7) {
          result = "Lose";
          break;
        }
      }
    }
  
    return result;
  }
  
  function playMultipleGames(rounds) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; 
    for (let i = 1; i <= rounds; i++) {
      const result = playCraps();
      const resultElement = document.createElement("p");
      resultElement.textContent = `Game ${i}: ${result}`;
      resultsDiv.appendChild(resultElement);
    }
  }
  
  const numberOfRounds = 5;
  playMultipleGames(numberOfRounds);
  