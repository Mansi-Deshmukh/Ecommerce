
// let form = document.getElementById("form").addEventListener("click",storeData)

function info(n,e,a,am){
    this.name = n;
    this.email = e;
    this.address =a;
    this.amount = am;
}

function storeData(){
     event.preventDefault();
     let form = document.getElementById("form");
     let name = document.getElementById('name').value;
     

     let email = document.getElementById('email').value;

     let address = document.getElementById('address').value;

     let amnt =  document.getElementById('amount').value;
     
     var data = JSON.parse(localStorage.getItem("user")) ||[];

     let i = new info(name, email, address, amnt);
     console.log(i)
       
    //  let button = document.getElementById('submit');
    //  button.addEventListener("click",adddetails)

    //  function adddetails(){
        //  console.log(i)
        data.push(i);
        localStorage.setItem("user",JSON.stringify(data))
    //  }
         name.innerText=null;
         email.innerText=null;
         address.innerText=null;
         amnt.innerText=null;
     



}

