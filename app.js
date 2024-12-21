// Massiv metodlar
// 1. find va findIndex metodlari bo‘yicha masalalar
// 1-masala
let arr11 = [1, 6, 4, 5, 15, 12]
let res11 = arr11.find(value11 => {
    return value11 % 5 == 0
})
console.log(res11);
// 2-masala
let arr12 = [4, 8, 13, 21, 32]
let res12 = arr12.findIndex(value12 => {
    return value12 < 20 && value12 % 2 == 1
})
console.log(res12);
// 3-masala
let arr13 = [12, 14, 20, 32, 40]
let res13 = arr13.find(value13 => {
    return value13 % 10 == 0
})
console.log(res13);
// 2. some metodi bo‘yicha masalalar
// 1-masala
let arr21 = [24, 47, 50, 68]
let res21 = arr21.some(value21 => {
    
   return value21 >= 50

})
console.log(res21);
// 2-masala
let arr22 = [21, 13, -64, 25]
let res22 = arr22.some(value22 => {
    return value22 < 0
})
console.log(res22);
// 3-masala
let arr23 = [21, 23, 14, 25]
let res23 = arr23.some(value23 => {
    return value23 % 3 == 0
})
console.log(res23);
// 3. every metodi bo‘yicha masalalar
// 1-masala
let arr31 = [10, 53, 8, -6]
let res31 = arr31.every(value31 => {
    return value31 > 0
})
console.log(res31);
// 2-masala
let arr32 = [ 12, 45, 36, 35]
let res32 = arr32.every(value32 => {
    return value32 > 10
})
console.log(res32);
// 3-masala
let arr33 = [ 12, 35, 36, 58]
let res33 = arr33.every(value33 => {
    return value33 % 3 == 0
})
console.log(res33);
// String metodlar
// 1. charAt
// 1-masala
let arr111 = "salomlar"
let res111 = arr111.charAt(3)
console.log(res111);
// 2-masala
let arr112 = "hello"
let res112 = arr112.charAt(arr112.length -2)
console.log(res112);
// 2. charCodeAt
// 1-masala
let arr121 = ("olma", "Anjir", "nok")
let res121 = arr121.charCodeAt()
console.log(res121);
// 2-masala
let arr122 = "smallbig"
let res122 = arr122.charAt(5)
console.log(res122);
// 3. slice
// 1-masala
let arr131 = "quetion"
let res131 = arr131.slice(0, 5)
console.log(res131);
// 2-masala
let arr132 = "helpme"
let res132 = arr132.slice(3, 6)
console.log(res132);
// 4. substring
// 1-masala
let arr41 = "goodbye"
let res41 = arr41.substring(2, 6)
console.log(res41);
// 2-masala
let arr42 = "inthemoney"
let res42 = arr42.substring(7, 10)
console.log(res42);
// 5. substr
// 1-masala
let arr51 = "hellohowgoodbye"
let res51 = arr51.substr(4, 5)
console.log(res51);
// 2-masala
let arr52 = "snbsdbws"
let res52 = arr52.substr(0, 7)
console.log(res52);
// 6. toUpperCase, toLowerCase
// 1-masala
let arr61 = "hello"
let res61 = arr61.toUpperCase()
console.log(res61);
// 2-masala
let arr62 = "shover"
let res62 = arr62.toUpperCase(arr62.length / 2)
console.log(res62);
// 7. concat
// 1-masala
let arr711 = 'hello'
let arr712 = 'bye'
let res71 = arr711.concat(arr712)
console.log(res71);
// 2-masala
let arr721 = 'food'
let arr722 = '!'
let res72 = arr721.concat(arr722)
console.log(res72);
// 8. trim, trimStart, trimEnd
// 1-masala
let arr81 ='  jem  '
let res81 = arr81.trim()
console.log(res81);
// 2-masala
let arr82 = '  hey  '
let res82 = arr82.trimStart()
console.log(res82);
// 9. padStart, padEnd
// 1-masala
let arr91 = 'jey'
let res91 = arr91.padStart(10, "*")
console.log(res91);
// 2-masala
let arr92 = "trem"
let res92 = arr92.padEnd(15, "#")
console.log(res92);
// 10. repeat
// 1-masala
let arr101 = 'drak'
let res101 = arr101.repeat(3)
console.log(res101);
// 2-masala
let arr102 = '*'
let res102 = arr102.repeat(5)
console.log(res102);
// 11. replace, replaceAll
// 1-masala
let arr001 = 'aytim '
let res001 = arr001.replace('a', 'o')
console.log(res001);
// 2-masala
let arr002 = 'hello bye'
let res002 = arr002.repeat(' ', '_')
console.log(res002);
// 12. split
// 1-masala
let arr1213 = 'look'
let res1213 = arr1213.split()
console.log(res1213);
// 2-masala
let arr1223 = 'rever'
let res1223 = arr1223.split()
console.log(res1223);
// 13. indexOf, lastIndexOf
// 1-masala
let arr1312 = 'always'
let res1312 = arr1312.indexOf('a')
console.log(res1312);
// 2-masala
let arr1323 = 'entersting'
let res1323 = arr1323.lastIndexOf('e')
console.log(res1323);
// 14. includes
// 1-masala
let arr141 = 'bye'
let res141 = arr141.includes()
console.log(res141);
// 2-masala
let arr142 = 'good!'
let res142 = arr142.includes()
console.log(res142);
// 15. search
// 1-misol
let arr151 = 'ingood'
let res151 = arr151.search('good')
console.log(res151);
// 2-masala
let arr152 = 'nd8dcd2'
let res152 = arr152.search(Number)
console.log(res152);
// 16. startsWith, endsWith
// 1-masala
let arr161 = 'hellobye'
let res161 = arr161.startsWith('hello')
console.log(res161);
// 2-masala
let arr162 = 'raid'
let res162 = arr162.endsWith('bye')
console.log(res162);
    // Massiv ichida obyektlar
 // 1-masala
 let users1 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
  ];
let res1 =users1.filter(user1 => {
  return user1.age > 25   
})         
console.log(res1);
// 2-masala
let products = [
    { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
    { id: 102, name: "Phone", price: 500, rating: 4.2 },
    { id: 103, name: "Tablet", price: 300, rating: 4.8 }
  ];
let res2 = products.filter(product => {
    return product.price < 500
})  
console.log(res2);
// 3-masala
let tasks = [
    { id: 1, title: "Do homework", status: "completed" },
    { id: 2, title: "Clean room", status: "pending" },
    { id: 3, title: "Go shopping", status: "pending" }
  ];
let res3 = tasks.filter(task => {
    return task.status == 'pending'
})  
console.log(res3);
// 4-masala
let users = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
  ];
  let sum4 = 0;
 users.forEach(user => {
    if (user.isActive){
        sum4 ++;
    }
})  
console.log(sum4);
// 5-masala
let products5 = [
    { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
    { id: 102, name: "Phone", price: 500, rating: 4.2 },
    { id: 103, name: "Tablet", price: 300, rating: 4.8 }
  ];
let max =products5[0].rating;
let maxProduct5 = products5[0];
products5.forEach(product5 => {
    if (product5.rating > max) {
        max = product5.rating;
        maxProduct5 = product5
    }
}) 
console.log(maxProduct5);
// 6-masala
let users6 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
  ];
let res6 = users6.map(user => {
    delete users6.id;
    delete users6.isActive;
    return user
})  
 console.log(res6);
 // 7-masala
 let products7 = [
    { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
    { id: 102, name: "Phone", price: 500, rating: 4.2 },
    { id: 103, name: "Tablet", price: 300, rating: 4.8 }
  ];
  let max7 = products7[0].price;
  let max71 = products7[0];
  products7.forEach(product7 => {
    if (product7.price > max7) {
        max7 = product7.price;
        max71 = product7;
    }
  })
  console.log(max71);
  // 8-masala
  let tasks8 = [
    { id: 1, title: "Do homework", status: "completed" },
    { id: 2, title: "Clean room", status: "pending" },
    { id: 3, title: "Go shopping", status: "pending" }
  ];
  let res8 = tasks8.findIndex(task8 => {
    return task8.title == 'Clean room'
  })
  console.log(res8);
  // 9-masala
  let users9 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
  ];
let sum9 = 0;
users9.forEach(user9 => {
    sum9 += user9.age;
})
console.log(sum9);
// 10-masala
let products10 = [
    { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
    { id: 102, name: "Phone", price: 500, rating: 4.2 },
    { id: 103, name: "Tablet", price: 300, rating: 4.8 }
  ];
  let res10 = products10.map(product10 => {
    product10.price = product10.price - product10.price / 10;
    return product10
  })
  console.log(res10);
  // 11-masala
  let users110 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true }
];

let user110 = users110.find(user110 => user110.name === "Ali");

console.log(user110);
// 12-masala
let tasks12 = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "completed" },
  { id: 3, title: "Go shopping", status: "completed" }
];
let res120 = tasks12.every(task12 => {
  return task12.status == 'completed';
});
console.log(res120);
// 13-masala
let products13 = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 3.9 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 }
];
let counter13 = 0;
products13.forEach(product13 => {
  if (product13.rating > 4) {
    counter13 ++;
  }
})
console.log(counter13);
// 14-masala
let users14 = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true }
];
let max14 =users14[0].age;
let max141 = users14[0];
users14.forEach(user14 => {
    if (user14.age > max14) {
        max14 = user14.age;
        max141 = user14
    }
}) 
console.log(max141);

// 15-masala
let tasks15 = [
  { id: 1, title: "do homework", status: "completed" },
  { id: 2, title: "clean room", status: "pending" },
  { id: 3, title: "go shopping", status: "pending" }
];
let res15 = tasks15.map(task15 => {
  task15.title = task15.title[0].toUpperCase() + task15.title.slice(1)
  return task15
})
console.log(res15);






  
  
  

  
  
  
  
  
 
 



















































