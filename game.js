let fails = 6

// eslint-disable-next-line no-unused-vars
function takeGuess(){
    return(prompt("Enter a letter"))
}

function refresh() {
    document.getElementById("word").innerHTML = display;
}


// eslint-disable-next-line no-undef
let chosen = nouns[Math.floor(Math.random()*nouns.length)]
console.log(chosen)
console.log("?".repeat(chosen.length))
console.log(chosen.length)
let display = "?".repeat(chosen.length)
refresh()
// eslint-disable-next-line no-unused-vars
function process() {
if (chosen.includes(window.guess)) {
    display = display.split("")
    display.splice(chosen.indexOf(window.guess), 1, window.guess)
    display = display.join("")
    console.log(display)
    refresh()
} else {
    let element = document.getElementById(fails)
    // eslint-disable-next-line no-undef
    $(element).removeClass()
    fails -=1
    if(fails==0) {
        display = chosen
        refresh()
        document.getElementById("button").remove()
    }
}
}