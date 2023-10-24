function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "lightblue"
}

function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num 
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num 
}

function resetCounter() {
  const numberElement = document.querySelector("#counter")

  numberElement.textContent = 0
}
  

function writeText() {
  const numberElement = document.querySelector("#output")
  const numberElement = document.querySelector("#input")
  
  const inputValue = inputElem.Value
  const outputValue = outputElem.Value
  const newValue =  
}