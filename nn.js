function sigmoid(x) {
  return 1 / (1 + Math.exp(-x))
}

class NeuralNetwork {
  constructor (input_nodes, hiddens_nodes, output_nodes) {
    this.input_nodes = input_nodes;
    this.hiddens_nodes = hiddens_nodes;
    this.output_nodes = output_nodes;

    this.weights_ih = new Matrix(this.hiddens_nodes, this.input_nodes);
    this.weights_ho = new Matrix(this.output_nodes, this.input_nodes);
    this.weights_ih.randomize();
    this.weights_ho.randomize();

    this.bias_h = new Matrix(this.hiddens_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes, 1);
    this.bias_h.randomize();
    this.bias_o.randomize();
  }

  feedforward(input_array) {

    // generating the hidden outputs
    let inputs = Matrix.fromArray(input_array);
    let hidden = Matrix.multiply(this.weights_ih, inputs);
    hidden.add(this.bias_h);
    // activation function

    hidden.map(sigmoid);

    // Generating the output's output
    let output = Matrix.multiply(this.weights_ho, hidden);
    output.add(this.bias_o);
    output.map(sigmoid);
    
    // sending it back
    return output.toArray();
  }

  train (inputs, answer) {
    
  }
}