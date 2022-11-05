# Conway's Game of Life in SCSS

## What Is This?

This is an SCSS implementation of _Life_, a famous cellular automation invented by John Conway. _Life_ is a zero-player game; it takes a starting position, and then simply applies its own rules with no intervention from the user.

A working version of this app can be found [here](https://thrasymachuss.github.io/scss-game-of-life).

<br>

### Rules

The game consists of a grid of cells. Each cell is in one of two states, alive or dead. At each step (also known as a _tick_), each cell may either change states or remain in its current state based on an interaction with the eight cells adjacent to it.

From [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), the three main rules are as follows:

> 1. Any live cell with two or three live neighbours survives.
> 2. Any dead cell with three live neighbours becomes a live cell.
> 3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

<br>

### Changing the starting position

Given that I deliberately avoided using Javascript in this project, there is no way for the user to manually enter a starting position as input. The only way to manually enter a starting position is to edit the `$STARTING_POSITION` variable in `src/variables/_start-position.scss`.

<br>

## Why SCSS?

There is absolutely no practical reason to write this kind of program in SCSS. It would have been far more practical to write _Life_ in a language such as JavaScript, which allows for user input and interaction. The reason that I wrote this in SCSS was largely for my own amusement. I also wanted to sufficiently familiarize myself with SCSS, and I thought that this was one way of accomplishing that.
