let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
let count=0

function increment(){
    count++;
    countEl.textContent = count
}

function save(){
    let entries = " " + count + " -"
    saveEl.textContent += entries
    console.log(count)
    count = 0
    countEl.textContent = count
}