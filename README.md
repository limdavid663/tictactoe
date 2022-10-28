# tictactoe
What I want to achieve?
1. When click on the cell i want x or o appear on it
2. When click on the cell if x already appear i want o to appear
3. When click on the cell I want the word(x/o) add to array of 9
4. If the index of array already has the value we cannot let user input it again.
5. restart button when click i want all of array value to default value and also the innerText of the cell to default which is show nothing.
6. I want to check winning condition by check all row and column and cross if any of it has x/o 3 times in a row it means win and if it doesn't if after the gameBoard already fill and has no winner yet it means draw.
7. I want player name from user input.
8. I want to create effect when user hover on the cell it show what text(X/O) user going to input.(not yet done)


Things I learn from this project?
1. if we addEventlistener to DOM Element one time it will stay true(Clickable) until we disable them.
2. function within callback function of addevenlistener cannot access this like the callbackfunction meaning that if i console.log(this) in callback function it will return the name of element but if i use it in the function within callbackfunction it return undefiend.
3. logic to check win condition for tictactoe by create 2d array.
4. Learn how to display certain DOM element when the website load like modal.
