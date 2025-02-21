/*what is needed?
onclick button
info trnsfer
find way to get form values
way to append table
*/

const formButton = document.getElementById('formSubmit');

let number = 0
formButton.addEventListener('click', (event) => {
    event.preventDefault()
    
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let faveColor = document.getElementById('faveColor').value

    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
        numberNode.innerHTML = number
        newTableRow.appendChild(numberNode)

    let firstNameNode = document.createElement('td')
        firstNameNode.innerHTML = firstName
        newTableRow.appendChild(firstNameNode)
    let lastNameNode = document.createElement('td')
        lastNameNode.innerHTML = lastName
        newTableRow.appendChild(lastNameNode)
    let faveColorNode = document.createElement('td')
        faveColorNode.innerHTML = faveColor
        newTableRow.appendChild(faveColorNode)

    document.getElementById('tBody').appendChild(newTableRow)

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('faveColor').value = ''
    number++
})




