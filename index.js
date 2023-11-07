const input1 = prompt(
  'What program would you like to run? (length, yell, binary, or numSum?)'
)

if (input1 === 'length') {
  const userInput = prompt(
    'Enter your word to calculate the number of characters:'
  )

  let count = 0
  let index = 0
  
  while (userInput[index]) {
    count = count + 1
    index = index + 1
  }

alert(`${userInput} has ${count} characters.`)
} 

else if (input1 === 'yell') {
  const userInput = prompt('Enter your word to yell:')
  let output = ''
  for (let i = 0; i < userInput.length; i++) {
    output = output + userInput[i].toUpperCase()
  }
  alert(output)
} 

else if (input1 === 'binary') {
  const userInput = prompt('Enter string to filter for binary:')
  let output = ''
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == 0 || userInput[i] == 1) output += userInput[i]
  }
  alert(output)
} 

else if (input1 === 'numSum') {
  const userInput = prompt(
    'Enter number to calculate the sum of all the numbers it contains:'
  )
  let num = 0
  for (let i = 0; i <= userInput; i++) {
    num = num + i
  }
  alert(num)
} 

else {
  alert("I don't recognize that command.")
}
