let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let brain;

let training_data = [
  {
    input: [0, 1],
    targets: [1]
  },
  {
    input: [1, 0],
    targets: [1]
  },
  {
    input: [0, 0],
    targets: [0]
  },
  {
    input: [1, 1],
    targets: [0]
  },
]
function setup () {

  brain = new NeuralNetwork(2, 2, 1);

  for (let i = 0; i < 10000; i++) {
    for (data of training_data) {
      brain.train(data.input, data.targets)
    }
  }

  console.log(brain.feedforward([1, 0]))
  console.log(brain.feedforward([0, 1]))
  console.log(brain.feedforward([0, 0]))
  console.log(brain.feedforward([1, 1]))

}

function draw() {
  window.requestAnimationFrame(draw)
}