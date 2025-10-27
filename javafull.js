// console.dir(window.body);
// let id = document.getElementById("hyy");
// console.log(id);
// // document.getelemeantbyclassname("");
// // document.getElementsByTagName("");
// let heading = document.getElementsByClassName("heading-class");
// console.log(heading);
// console.log("shubham")

// let piuu = document.querySelector(".class");
// console.log(piuu);
// let piu = document.querySelector("#class");
// console.log(piu);

// console.dir(document.body.firstchild);
// let div = document.querySelector("div");
// console.dir(div);

          // practice 

//  let h2 = document.querySelector("h2");
//  console.dir(h2.innertext);

// h2.innertext =  h2.innerText + " apna collage" ;

// let divs = document.querySelectorAll(".box");
// // console.lod(divs);
//     //loop
// let idx = 1;
//  for(div of divs){
//    // console.log(div.innertext);
//    div.innertext = 'new value ${idx}';
//    idx++;
//  }
     
       // attribute ka use id ya class jaise ka value pta karne k liya


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

     //isme value ko change kar skte
// let name = box.setAttribute("id","new id");
// console.log(name);
       //css             js
//   background-color    background
//   color               color
//   font-size           fontsize

// div.style.backgroundColor =  "green"
// div.style.backgroundColor =  "pink"
// // gayab karna hoto visibility property
// //div.style.visibility = "hidden"
// div.style.fontsize        =  "260px";
// div.innerText = "hello!";
// div.style.height = "150px"

           //insert  elements

// let newbtn = document.createElement("button");
// newbtn.innertext = " click me!";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);

// let newheading = document.createElement("h1");
// newheading.innerHTML = "<i> hi am came </i>"
// document.querySelector("body").prepend(newheading);

// let heading = document.createElement("h2");
// heading.innerHTML = "<i> hyy boss am new here </i>"

// document.querySelector("body").prepend(heading);

      // remove krne k liya
// let para = document.querySelector("p");
// para.remove();
// let h1 = document.querySelector("h1");
// h1.remove();

    //practise question

// let btn = document.createElement("button");
// btn.innerText = " click me!";

// btn.style.backgroundcolor = " red ";
// btn.style.color = "black";

// document.querySelector("body").prepend(btn);

    // second question

// let para = document.querySelector("p") ; 

         // events only js

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked")
//     let a =  45;
//     a++;
//     console.log(a);
// }
// let dusra = document.querySelector("#btn2");
// dusra.ondblclick = () => {
//     console.log("it was double click button");
//     let baby = 1;
//     let mummmy = baby + baby;
//     console.log(mummmy);
// }

// let divs = document.querySelector("div");

// divs.onmouseover = () => {
//     console.log("mouse in the box")
// }

          // events object
// let btn1 = document.querySelector("#btn1");

// // btn1.onclick = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.clientX ,evt.clientY);
// // };

           // listebers events(multiple time used)

// btn1.addEventListener("click", () => {
//     console.log("listenrs events are on")
// });
// btn1.addEventListener("click", () => {
//     console.log("listenrs events are on second time")
// });
  
// let third = () => {
//     console.log("listenrs events are on third time")
// };
// btn1.addEventListener("click", () => {
//     console.log("listenrs events are on forth time")
// });
// btn1.addEventListener("click", third);


// btn1.removeEventListener("click",third)

             //practise questions
          // (dark mode to light mode)
let currmode = "light" ;
let mode = document.querySelector("#modes")

mode.addEventListener("click", ()=>{
    if(currmode==="light"){
        currmode= " dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode);
});

//hover question khud s kare


