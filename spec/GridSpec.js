describe('Grid', function() {
  var Grid;
})

  beforeEach(function() {
    grid = new Grid();
  })

    it('has a width of 20 rows', function() {
      expect(grid.gridWidth).toEqual(20);
    })

    it('has a width of 20 rows', function() {
      expect(grid.gridHeight).toEqual(20);
    })
