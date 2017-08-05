function Grid() {
  this.gridWidth = 20;
  this.gridHeight = 20;
  var grid = [];

  for (var y = 0; y < this.gridWidth; y++) {
    grid.push([]);
    for(var x = 0; x < this.gridHeight; x++) {
      grid[y].push(0);
    }
  }
  console.log(grid)
}
