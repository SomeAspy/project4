let fails = 6

// eslint-disable-next-line no-unused-vars
function takeGuess(){
    return(prompt("Enter a letter"))
}

function rArray(list) {
    return list[Math.floor(Math.random()*list.length)];
}

// eslint-disable-next-line no-undef
let chosen = rArray(nouns);
console.log(chosen)
console.log("_ ".repeat(chosen.length))
console.log(chosen.length)
document.getElementById("word").innerHTML = "_ ".repeat(chosen.length);
// eslint-disable-next-line no-unused-vars
function process() {
if (chosen.includes(window.guess)) {
console.log("ok")
} else {
    let element = document.getElementById(fails)
    // eslint-disable-next-line no-undef
    $(element).removeClass()
    fails -=1
}
}