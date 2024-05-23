let newGame = document.getElementById("newGame");
  newGame.onclick = startNewGame;

  class Hangman {
    constructor() {
      //game state and initial values
      this.random = Math.floor(Math.random() * wordsArray.length);
      this.wordToGuess = wordsArray[this.random];
      this.category = categoryArray[this.random];
      this.placeholderArray = Array(this.wordToGuess.length).fill("_");
      this.guessed = [];
      this.lives = 6;
    }
    setupNewWord() {
      //setsup new game input/buttons and creates initial placeholder containing only "_" and puts it on the board. placeholder has as many characters as the word
      let guessWrapper = document.getElementById("guessWrapper");
      let placeholderP = document.createElement("p");
      let category = document.getElementById("categoryName");
      category.innerHTML = this.category;

      placeholderP.setAttribute("id", "placeholderP");
      placeholderP.innerHTML = this.placeholderArray.join("");
      guessWrapper.appendChild(placeholderP);

      let userLetter = document.getElementById("userLetter");
      userLetter.onkeypress = this.handleKeyPress.bind(this);

      let guessButton = document.getElementById("guessButton");
      guessButton.onclick = this.handleClick.bind(this);
    }
    handleClick() {
      //main game logic, triggers input check, win or loose, updates lives, shows/hides various elements on click
      let userLetterInput = document.getElementById("userLetter");
      let userLetter = userLetterInput.value.toUpperCase();
      let placeholderP = document.getElementById("placeholderP");
      let warningText = document.getElementById("warningText");
      let alreadyGuessed =