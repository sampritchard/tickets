describe('Grid', function() {
  var Grid;
})

beforeEach(function() {
  grid = new Grid();
})

it('starts with 20 rows', function() {
  expect(grid.rows).toEqual(20);
})

it('starts with 20 columns', function() {
  expect(grid.columns).toEqual(20);
})
