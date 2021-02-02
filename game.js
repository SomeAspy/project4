let fails = 6

// eslint-disable-next-line no-unused-vars
function takeGuess(){
    return(prompt("Enter a letter"))
}

function rArray(list) {
    return list[Math.floor(Math.random()*list.length)];
}

function refresh() {
    document.getElementById("word").innerHTML = display;
}

// eslint-disable-next-line no-undef
let chosen = rArray(nouns);
console.log(chosen)
console.log("?".repeat(chosen.length))
console.log(chosen.length)
let display = "?".repeat(chosen.length)
refresh()
// eslint-disable-next-line no-unused-vars
function process() {
if (chosen.includes(window.guess)) {
    let out = display.split("").splice(chosen.indexOf(window.guess))
    console.log(out)
} else {
    let element = document.getElementById(fails)
    // eslint-disable-next-line no-undef
    $(element).removeClass()
    fails -=1
}
}