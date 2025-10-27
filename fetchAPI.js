                      //fetch API
        //the ftech API provides an interface for fetching(sending,receiving)resources.
        //it uses Request and Response object       

const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");
const factpara = document.querySelector("#fact")
        // let promise =  fetch(URL);
       // console.log(URL);

const getfacts = async () =>{
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);//json formate
    let data = await response.json();
    factpara.innerHTML = data[1].text;
};

btn.addEventListener("click",getfacts);