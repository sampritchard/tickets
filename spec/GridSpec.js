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

describe('Entering Co-ordinates', function() {
  beforeEach(function() {
       spyOn(window, "prompt").and.returnValue("1");
       spyOn(window, "confirm");
  });

  it('shows a prompt box', function() {
    grid.enterCoordinates();
    expect(window.prompt).toHaveBeenCalledWith('Please enter the X co-ordinate (Whole Number between 1-18)');
  })
});
