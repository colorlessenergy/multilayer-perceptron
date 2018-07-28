let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let brain;
function setup () {

  brain = new NeuralNetwork(2, 2, 1);
  let input = [1, 0];
  let output = brain.feedforward(input)
  console.log(output)
  draw();
}

function draw() {
  window.requestAnimationFrame(draw)
}