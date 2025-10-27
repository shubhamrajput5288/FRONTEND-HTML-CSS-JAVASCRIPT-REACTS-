//              // asynchronous
// function hello (){
//     console.log("hyy");
// }
// setTimeout(hello,1000); 
//         //run krne mai time set krne k liya setTimeout kaam ata [1sec = 1000 miniseconds]

//     setTimeout( () => {
//         console.log("hyyy shubham wait") //aise bhi function use kr skte
//     }, 1000);

// console.log("one");
// console.log("two");

// setTimeout( () => {
//         console.log("hyyy shubham wait") 
//     }, 1000);

// console.log("three");
// console.log("four");
        
//                     // call backs
//           //  [a callbacks is a function as an argument to another function]
    
// function sum (a,b){
//     console.log(a+b);
// }
// function calculator (a,b,sumcallbacks){
//         sumcallbacks(a,b);
// }

// calculator(1,2,sum);

// function student (room1,room2) {
//     console.log(room1-room2);
// }

// function total (room1,room2,student){
//     student(room1,room2);
// }

// total(5,7,student);

//                   // call backs hell
//     // nested callbacks stacked below one another forming a pyramid structure.
// function getdata (dataid){
//     setTimeout( ()=>{
//         console.log("data",dataid);
//     } , 2000);
// } 
// getdata(5879) ;

// function schoolboys(howmany,nextschoolboys){
//        setTimeout( () => {
//         console.log("boy's" , howmany);
//          if(nextschoolboys){
//          nextschoolboys();
//         } ;
//        }, 3000);     
// }
//      //[ek k andr ek callbacks kiya jaye to pyramid bna deta use callbacks hell kehta hai]
// schoolboys (45, () => {
//     schoolboys(46, () => {
//         schoolboys(54, () => {
//             schoolboys(96, ()=>{
//                 schoolboys(103)
//             })
//         });
//     });
// });
  
//       //   promises [it is a solution of callbacks] , [for solving the callbacks hell problem]
//       //        1. pending
//       //        2. resolve
//       //        3. reject

// function schoolboys(howmany,nextschoolboys){

//        return new Promise((resolve,reject) =>{

//         setTimeout( () => {
//         console.log("boy's" , howmany);
//         resolve("success");
//          if(nextschoolboys){
//          nextschoolboys();
//         } ;
//        }, 7000);
//        }) 

// }        

// let promise = schoolboys(123);

//     //  "promise chain" just like callbacks.
 
// function asyncfunc1 (){
//     return new Promise((resolve,reject) => {
//           setTimeout( () => {
//             console.log("data1");
//             resolve("succes");
//           },4000);
//     });
// }   

// function asyncfunc2 (){
//     return new Promise((resolve,reject) => {
//           setTimeout( () => {
//             console.log("data2");
//             resolve("succes");
//           },4000);
//     });
// } 


// function asyncfunc3 (){
//     return new Promise((resolve,reject) => {
//           setTimeout( () => {
//             console.log("data3");
//             resolve("succes");
//           },4000);
//     });
// } 

// console.log("fetching data1....")
// asyncfunc1().then((res) =>{
//     console.log("fetching data2....");
//     asyncfunc2().then((res) => {
//       console.log("fatching data3....");
//       asyncfunc3().then ( () => {})
//     })
// })
  
//             //Async-Await [async functon always returns a promise]

// function api (){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("weather data");
//       resolve("200");
//     },2000);
//   })
// }

// async function getweather (){
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
// }

// getweather();

                //IEFI [immediatly invocked function]

function summermeaning (){
  return new Promise (( resolve , reject)=>{
        setTimeout(()=>{
          console.log("meaning = garmi.")
        },1000);
  })
}                

( async function () {
  console.log("fetching....")
  await summermeaning();
})();