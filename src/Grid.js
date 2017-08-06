function Grid() {
  this.gridWidth = 20;
  this.gridHeight = 20;
  var grid = [];

  for (var y = 0; y < this.gridWidth; y++) {
    grid.push([]);
    for(var x = 0; x < this.gridHeight; x++) {
      grid[y].push((Math.random() * 1000).toFixed(2)); // Instead of 0 put random.
    }
  }
  console.log(grid[19][19])
}

// function randomPrice() {
//   var randomNumber = Math.random() * 1000;
//   var decimals = randomNumber.toFixed(2);
//   console.log(decimals)
//   return decimals;
// }
