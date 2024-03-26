// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    return cats.concat(name);
}
function prependCat(name){
    return ["Arnold" ,...cats]
}
function  removeLastCat(){
    return cats.slice(0, cats.length - 1);
}
function  removeFirstCat(){
    return cats.slice(1);
}
