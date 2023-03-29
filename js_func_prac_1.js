// // 1
// function nme(){
//     console.log("Davit Gabrashvili");
// }
// nme()
// // 2
// const la = {
//     name: "Los Angeles",
//     population: 3792621
// }
// const ny = {
//     name: "New York",
//     population: 8175133
// }
// const ch = {
//     name: "Chicago",
//     population: 2695598
// }
// const ho = {
//     name: "Houston",
//     population: 2099451
// }
// const ph = {
//     name: "Philadelphia",
//     population: 1526006
// }
// function city(nme){
//     console.log("name:", nme.name + ', population:', nme.population);
// }
// city(la)
// city(ny)
// city(ch)
// city(ho)
// city(ph)
// //3
// function age(year){
//     return "age: " + (2023-year)
// }
// function nme(name, surname){
//     return "name: " + name + " surname: " + surname
// }
// console.log(age(2000), nme("Davit", "Gabrashvili"))
// 4
function score(arr){
    sum = 0
    for (i of arr){
        sum += i
    }
    return sum/arr.length
}
console.log(score([10, 9, 7, 5, 10, 7]));