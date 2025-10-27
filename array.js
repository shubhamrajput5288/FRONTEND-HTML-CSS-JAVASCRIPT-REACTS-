// let marks = [45,65,98,65,42,78,12];
//  console.log(marks);
//  console.log(marks.length);

// let item = [45,65,98,65,42,78,12];
// let i=0;
// for(let val of item){
//     console.log("value of index ${i} = ${val}");
//     let offer = val/10;
//     item[i]=item[i]-offer;
//     console.log("value after offer = ${item[i]}");
//     i++;
// }
//           //ADD element
// item.splice(2,0,110,220,89);
// delete element
// item.splice(2,1)
//           //replace element
// item.splice(3,1,101);
//      //only use the one index in slice so beffore the index all are delet
// item.splice(3);
        
//             // functon
// function myname(){
//     console.log("hello shubham");
//     console.log("yss");
// } 
// myname();

// function meranaam(msg){
//     //parameter->input
//     console.log(msg);
// } 
// meranaam("yss");//argument

// // add two number
// function sum(x,y){
//     console.log(x+y);
// }
// sum(5,7);

// function sum(x,y){
//     s = x + y;
//     return s;
// }
//  let val = sum(3,4);
//  console.log(val);

//  // count vowel in string
//  function countvowel(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count ++;
//         }
//     }
//     console.log(count);
//  }

//  let nums = [12,4,3];
// // nums.forEach((num)=>{
// //     console.log(num*num);
// // });
//     //kaise bhi kar skte dono same hai
// nums.forEach((hy)=>{
//     console.log(hy*hy);
// });
 
//   //maxx value[its give a new array]
// let hero=nums.map((val) => {
//      return val ;
// })  ;
// console.log(hero);

// let square=nums.map((val) => {
//     return val*val ;
// })  ;
// console.log(square);
//        //find largest value
// let largest = [ 2,4,6,7,9,1,5,600];
// let bada=largest.reduce((prev,curr) => {
//     return prev>curr?prev:curr;
// });
// console.log(bada);

//       //filtes
// let numbers = [ 2,4,6,7,9,1,5,600];
// let toppers = numbers.filter((hyy)=> {
//     return hyy>2;
// })
// console.log(toppers);


// // let  str1= " krishna ";
// // let str2= " ram ";
// // let merge  =   str1 + str2 ;
// // console.log(merge);