let name = prompt("введите имя");
function capitalizeString(name) {
    return  name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(capitalizeString(name))


let word = prompt("введите слово");
let letter = prompt("выберите букву");
function charCount(word, letter){
    let count = 0
    for(let i of word){
        if(i === letter){
            count++
        }
    }
    return count
}
console.log(charCount(word, letter))
