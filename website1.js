
let countEl = document.getElementById("count-el")
let count = 0

// increment the count variable when the button is clicked
function increment() {
    count = count + 1
    console.log(count)
    countEl.innerText = count
}

function save() {
    let previousEntry = count + " - "
    let saveMessage = document.getElementById("save-el")
    saveMessage.textContent += previousEntry
    
}

function reset() {
    count = 0
    countEl.innerText = count
}
