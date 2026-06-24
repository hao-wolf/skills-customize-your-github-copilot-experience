
# 📘 Assignment: Hangman Game Challenge

## 🎯 Objective

Build a text-based Hangman game in Python to practice working with strings, loops, conditionals, and user interaction.

## 📝 Tasks

### 🛠️ Game Setup and Word Selection

#### Description

Create the Hangman game structure and randomly select a word from a predefined list.

#### Requirements
Completed program should:

- Define a list of possible words for the game.
- Randomly choose one word at the start of each game.
- Initialize the game state with hidden letters represented by underscores.

### 🛠️ Gameplay Logic and Output

#### Description

Implement the main Hangman game loop so players can guess letters, see progress, and receive win/lose feedback.

#### Requirements
Completed program should:

- Prompt the player to guess one letter at a time.
- Reveal letters in the hidden word when guesses are correct.
- Track incorrect guesses and limit attempts.
- Display current progress in `_ _ _ _` format and the number of attempts left.
- Show a clear win message when the word is guessed and a lose message when attempts run out.

#### Example output

```text
Word: _ a _ _ m a n
Guess a letter: n
Correct! Word: _ a _ _ m a n

Guess a letter: g
Correct! Word: _ a _ g m a n

Guess a letter: h
Correct! Word: h a _ g m a n

Congratulations! You solved the word: hangman
```
