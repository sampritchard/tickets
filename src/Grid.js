function Grid() {
  this.gridWidth = 20;
  this.gridHeight = 20;

  this.grid = [];

  for (var y = 0; y < this.gridWidth; y++) {
    this.grid.push([]);
      for(var x = 0; x < this.gridHeight; x++) {
        this.grid[y].push(("Event " + (Math.random() * 400).toFixed(0))
                          + (" $" + (Math.random() * 1000).toFixed(2)));
        };
  };
};

Grid.prototype.enterCoordinates = function () {
  var x = prompt("Please enter the X co-ordinate (Whole Number between 1-18)");
  var y = prompt("Please enter the Y co-ordinate (Whole Number between 1-18)");

  console.log("Co-ordinate given: " + x, y + " -- Please see below closest available tickets:")

    if (parseFloat(x) === 0 & parseFloat(y) === 0) {
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y) + 1] + " Distance: 2")
      console.log(this.grid[parseFloat(x) + 2][parseFloat(y)] + " Distance: 2")
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 2] + " Distance 2")
    } else if (parseFloat(x) === 0 & parseFloat(y) === 19) {
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x)][parseFloat(y) - 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y) - 1] + " Distance: 2")
      console.log(this.grid[parseFloat(x) + 2][parseFloat(y)] + " Distance: 2")
      console.log(this.grid[parseFloat(x)][parseFloat(y) - 2] + " Distance 2")
    } else if (parseFloat(x) === 0 & parseFloat(y) <19 & parseFloat(y) >0) {
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x)][parseFloat(y) - 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x) + 2][parseFloat(y)] + " Distance: 2")
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y) + 1] + " Distance 2")
    } else if (parseFloat(x) === 19 & parseFloat(y) === 0) {
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x) - 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x) - 1][parseFloat(y) + 1] + " Distance: 2")
      console.log(this.grid[parseFloat(x) - 2][parseFloat(y)] + " Distance: 2")
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 2] + " Distance 2")
    } else if (parseFloat(x) <19 & parseFloat(x) >0 & parseFloat(y) === 0){
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x) - 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 2] + " Distance: 2")
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y) + 1] + " Distance 2")
    } else {
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x)][parseFloat(y) + 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x)][parseFloat(y) - 1] + " Distance: 1")
      console.log(this.grid[parseFloat(x) - 1][parseFloat(y)] + " Distance: 1")
      console.log(this.grid[parseFloat(x) + 1][parseFloat(y) + 1] + " Distance 2")
    }
};
