// eslint-disable-next-line no-unused-vars
function takeGuess(){
    return prompt("Enter a letter");
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