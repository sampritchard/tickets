function Grid() {
  this.gridWidth = 20;
  this.gridHeight = 20;
  var grid = [];

  for (var y = 0; y < this.gridWidth; y++) {
    grid.push([]);
    for(var x = 0; x < this.gridHeight; x++) {
      grid[y].push(("Event " + (Math.random() * 400).toFixed(0))
                    + (" $" + (Math.random() * 1000).toFixed(2)));
    }
  }
  console.log(grid[19][19])
}
