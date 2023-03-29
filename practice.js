// //1
var obj = {
    name: 'Giorgi',
    age: 20,
    gender : 'male'
}
// if (obj.age < 18){
//     console.log("არასრულწლოვანი");
// }
// else{
//     if(obj.gender === 'male'){
//         console.log("სრულწლოვანი ბიჭი");
//     }
//     else{
//         console.log('სრულწლოვანი გოგო');
//     }
// 
if (obj.age >= 18 && obj.gender === "male"){
    console.log("სრულწლოვანი ბიჭი");
}else if (obj.age >= 18 && obj.gender === "female"){
    console.log( "სრულწლოვანი გოგო"); }
    else{
    console.log("არასწრულწლოვანი");
}
// //2
// var city = {
//     name: 'ფლორენცია',
//     people : 125520,
//     country : 'იტალიის'
//     }
// console.log(city.name, "არის", city.country, "ქალაქი და ცხოვრობს", city.people, "მაცხოვრებელი");
// //3
// var kentebi = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let i of kentebi){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }
// //4
// var lst = [];

// for(let i = 1; i <= 10; i++){
//     lst.push(i);
// };
// console.log(lst);
// //5
// var sia =[
//     {
//     name:"nini",
//     age:21,
//     },
//     {
//     name:"nika",
//     age:25
//     },
//     {
//     name:"luka",
//     age:12,
//     },
//     {
//     name:"ana",
//     age:15
//     }
//     ]
// for(i of sia){
//     if(i.age > 20){
//         console.log(i);
//     }
// }