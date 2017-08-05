function Grid() {

}

Grid.prototype.populateGrid = function () {
  var array = new Array(20)

  for (var i = 0; i < 20; i++)
    array[i] = new Array(20)


  var start = 1;

  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      array[i][j] = start;
      start = start + 1;
    }
  }

  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
    console.log(array[i][j]);
    }
  }
};
