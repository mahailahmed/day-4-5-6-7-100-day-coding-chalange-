
 // Day 4

//Q 10  Additing comment
//manahl , 28-05-2024
//this message print apersonal message
let person:string="manahil"
let message:string=" hellow  ,would you like to learn  some typescript today ?"
console.log(`hellow ${person} ,would you like to learn  some typescript today `);

//Q 11 Names
let names :string[]= ["ali","raza","maha","dua"]
console.log(names[0]);


//Q12 Greetings...
let names1 :string[]= ["ali","raza","maha","dua"]
let message1:string="do you like to play football"
console.log(names1[0] +" "+"do you like to play football");
console.log(names1[1] +" "+"do you like to play football");
console.log(names1[2] +" "+"do you like to play football");
console.log(names1[3] +" "+"do you like to play football");


//Day 05
//Q 13your own array

let transport:string[]=["bike","car","bysycle","honda"]
transport.forEach(transport=>{
    console.log(`I would , lie to own a ${transport}`);
    
})

//Q 14: Guest list...
 let guest :string[]=["ali","maham","raza","dua"]
 guest.forEach(guest=>{

    console.log(`Dear ${guest} you join me for a Dinner`);
    
 })

 //2nd method
 let guest1 :string[]=["ali","maham","raza","dua"]
 guest1.map((items)=>console.log(`Dear ${items} you join me for a Dinner`))
 
 //Q15...changing guest list
 let guestarry:string[]=["manahil","ahmed","nasir","hani"]
  let canNotattend:string="manahil"
 console.log(canNotattend+""+" can not attend the dinner");

  let newguest :string="malaika"
  guest1[guest1.indexOf(canNotattend)]=newguest
  guest1.map((items)=>console.log(`Dear ${items} you are invited to dinnar `))


  //Day 06
// Q 16..More guest
let guest:string[]=["ali","raza","maham","taha"]
console.log("greate  news! I found a bigeer dinner table ! ");

  guest.unshift("manahil")
  guest.splice(guest.length/2,0,"dua")
  guest.push("manan")
  guest.forEach(guest=>{
    console.log(`Dear ${guest} ,would ypu like to join me for dinner?`);
    
  }) 
  //Q 17...shrinking guest list
let guest1:string[]=["ana","taha","ahsan","dua"]
console.log(" unfortunatly, I can only invite two people for dinner");

while(guest1.length>2){

    let removGuest=guest1.pop()
    console.log(`sorrey ,${removGuest} , I can't you to dinner`);
    
}
guest1.forEach(guest1=>{

    console.log(`Dear ${guest1} you are still invired to dinner`);
    
})
guest1.splice(0,guest1.length)
console.log(guest1);
//Q 18,,seeing the world
let  places : string []=["Tokyo","pakistan","America","China","japan"]

console.log("orignal order",places)

console .log("alphabatical order",[...places].sort())

console.log("orignal order after sorting" ,places)

 console .log(" revers alphabatical order" ,[...places].sort().reverse())

 console .log("orignal order after revers sorting" ,places)

  places.reverse()

 console.log("reversd order",places)

 places.reverse
 console.log('back to orignal order',places)

 places.sort()
 console.log("sorted in alphabatical order",places)


 places.reverse
 console.log('reverse alphabatical order',places)


// Day 07

//Q 19..Dinner guest

let guest :string[]=["ali","raza","taha","dua"]
  console.log(`i am inviting ${guest.length} people to dinner`);
  
  //Q 20 ,,,//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

  let country :string[]=["dubai","america",'japan',"europe"]

  console.log("country I d like to visit ",country);
  

  //Q 21..//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these item
 let book:{


  title:string
  author:string
  yearPublished:number}={

title:"The Hobit",
author:"a b c ",
yearPublished:2020,
 }
 console.log(`book info: ${book.title} by${book.author} publish in ${book.yearPublished}`);
 