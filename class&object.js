               //object

const student = {
    fullname : "shubham singh",
    marks: 54.5,
    age : 45 ,
    printmarks : function () {
     console.log("marks",this.marks);
    },
    printfullname : function () {
        console.log("fullname",this.fullname)
    }
}
         // proto type object [ __proto__ ]  iska use 2 object ko ek bnane k liye ata ye prototype ban jata

const employe = {
    calculatetax () {
        console.log("tax is 10%")
    }
}

const karanarjun = {
    salary : 50000,
     calculatetax () {
        console.log("tax is 20%")
    }
}
const karanarjun1 = {
    salary : 60000,
}
const karanarjun2 = {
    salary : 70000,
}
const karanarjun3 = {
    salary : 80000,
}

karanarjun.__proto__ = employe;

karanarjun1.__proto__ = employe;
karanarjun2.__proto__ = employe;
karanarjun3.__proto__ = employe;
 
              //class
 
class toyatocar {
    start () {
          console.log("start")
    }

    stop(){
        console.log("stop")
    }

    setbrand (brand){
        this.aam= brand;
    }
};

let fortuner = new toyatocar();
 fortuner.setbrand("haybusa");

let lexus = new toyatocar();
lexus.setbrand("sonaar")

          // class constructor (special method)
              //ye automatic invoked by new
class school {
    
    constructor (brands,howmany) {
          console.log("automatic construct");
          this.aam = brands;
          this.chair = howmany;
    }

    boys () {
          console.log("boys = yess sir!")
    }

    girl(){
        console.log("girl = yess mam!")
    }

    // setbrand (brand){
    //     this.aam= brand;
    // }
};

let chair = new school("chair",78);
console.log(chair);
let bed = new toyatocar();

         // inheritance in js 
// (inhertance is passing down properties & methods from parents class to child class.[parents class se child class se jorne or use k kaam ata ])

//   class person {
//     eat (){
//         console.log("eating")
//     }

//     sleep () {
//         console.log("sleep")
//     }

//     work (){
//         console.log("do nothig")
//     }
//   };  

//   class engineer extends person{
//     work (){
//         console.log("solve problem , build somethings")
//     }
//   }

//   let shubham = new engineer();
       
             //super keywords 
 //( super keywords ka use hota hai parents class ka constronstor ko call karna)            

class person {

    constructor (){
        this.species = "homo species";
    }
    eat (){
        console.log("eating")
    }

    sleep () {
        console.log("sleep")
    }

    work (){
        console.log("do nothig")
    }
  };  

  class engineer extends person{

    constructor (branch){
        super();
        this.branch = branch;
    }

    work (){

        super.eat();//phle eat function ko call karane k liye
        console.log("solve problem , build somethings")
    }
  }

  let shubhamobj = new engineer("chemical engg");

            //pratices quest            

let data = "secret informations";

class user {
     constructor(name,email){
        this.name = name;
        this.email = email;
     }

     viewdata (){
    console.log(" date = ", data);
    }
}     

class admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editdata (){
        data = "new data information"
    }
}
 
let student1 = new user("vicky","vickysingh@gmail.com");
let student2 = new user("nancy","nancy@gmail.com");

let shubh = new admin("subh","subh@mail.com")

           //callbacks , promises and async await 
   
           