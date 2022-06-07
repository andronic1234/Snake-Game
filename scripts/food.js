import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1
export let score = 0
let randomColor

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    score++
    randomColor = Math.floor(Math.random()*16777215).toString(16);
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.backgroundColor = "#" + randomColor;
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}