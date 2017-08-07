# tickets

### Instructions on use
 - Clone this repo
 - copy file path of grid.html and paste into your browser (or run 'open grid.html in terminal')
 - Inspect the page and open the console
 - In the console, call a new grid (For example: 'grid = new Grid();')
 - In the console, call the enterCoordinates function (For example: 'grid.enterCoordinates();')
 - Follow the details on screen
 - Results outputted in the console currently.


Thought Process:
- Create an Array of Arrays so it will be a 20*20 grid.
- Print out 400 consecutive numbers on the console and then on the browser
- find one of those numbers by entering a valid array search. For example (array[0][1]), would return 2.
- Instead of adding consecutive numbers, change it to a random $ amount.
- Add random event number(upto 400) to go along side the random $ amount.
- Return the event next to co-ordinate given.
- Return the two events either side of the co-ordinate given.
- Return the two events either side, and the event above or below (three nearest events)
- Browser asks for co-ordinate input.
- Returns results in the browser.

To Do:
- Negative co-ordinates need to be able to be selected, the the axis runs from -10 to 10, rather than 0-19.
- Refactoring of if statement
- User interface.
- Full test coverage.
