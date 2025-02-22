/*what is needed?
onclick button
info trnsfer
find way to get form values
way to append table
*/

// we grab the submit button from the form here
const formButton = document.getElementById('formSubmit');

// then start a counter to keep track of row numbers
let number = 0;

// listen for when the button is clicked
formButton.addEventListener('click', (event) => {
    // the page refreshes by default so stop the default to stop refreshing
    event.preventDefault();
    
    // grab the values from the form inputs & create a new row for the table
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let faveColor = document.getElementById('faveColor').value;

    let newTableRow = document.createElement('tr');

    // these create the row cells for each input & adds the row to the table
    let numberNode = document.createElement('td');
    numberNode.innerHTML = number;
    newTableRow.appendChild(numberNode);

    let firstNameNode = document.createElement('td');
    firstNameNode.innerHTML = firstName;
    newTableRow.appendChild(firstNameNode);

    let lastNameNode = document.createElement('td');
    lastNameNode.innerHTML = lastName;
    newTableRow.appendChild(lastNameNode);

    let faveColorNode = document.createElement('td');
    faveColorNode.innerHTML = faveColor;
    newTableRow.appendChild(faveColorNode);

    document.getElementById('tBody').appendChild(newTableRow);

    // these clear the form fields after submitting
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('faveColor').value = '';

    // this will up the row number for the next entry
    number++;
});




