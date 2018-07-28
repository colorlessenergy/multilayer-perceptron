let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let brain;
function setup () {

  brain = new NeuralNetwork(3, 3, 1);

  let a = new Matrix(2,3);
  a.randomize();
  a.print();

  function doubleIt(x) {
    return x * 2;
  }

  a.map(doubleIt);
  a.print();

  // let b = new Matrix(3, 2);
  // b.randomize();
  // console.table(a.matrix);
  // console.table(b.matrix);

  // let c = a.multiply(b);

  // console.table(c.matrix)
  draw();
}

function draw() {
  window.requestAnimationFrame(draw)
}