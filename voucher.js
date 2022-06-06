 let datas = JSON.parse(localStorage.getItem("user")) ||[];
//  console.log(datas[0].amount)
 let x= Number(datas[0].amount)
//  console.log(typeof(x),x)
 let amnt = document.getElementById('wallet_balance');
amnt.innerHTML=x;

//  console.log(datas[0].amount)
let purchaseData = JSON.parse(localStorage.getItem("purchase")) ||[];
// console.log(purchaseData[0].price)
const  showVpucher = async ()=>{
    try{
        let res = await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers');

        let data = await res.json();
        console.log(data[0].vouchers);
        // console.log(data.vouchers);
        append(data[0].vouchers)
    }
    catch(err){
        console.log(err)
    }
}

showVpucher()

const append = (data)=>{
       let cont = document.getElementById('voucher_list');
    data.map(function(el){
        let d= document.createElement('div');
        
         
        let img = document.createElement('img');
        img.src=el.image;

        var title =document.createElement("h3");
        title.innerText = el.name;

        let p = document.createElement('h3');
        p.innerText= el.price;

        let btn = document.createElement('button');
        btn.innerHTML= "Buy";
        btn.class="buy_voucher";
        btn.addEventListener("click",function(){
            buynow(el)
        })
        // console.log(title)
        d.append(img,title,p,btn)
        cont.append(d)
    })
}

function buynow(el){
    let price = el.price
    
     
    if(x>=price){
    purchaseData.push(el)
    localStorage.setItem("purchase",JSON.stringify(purchaseData));
    
     alert("Hurray! purchase successful")
   }
   else{
       alert("Sorry! insufficient balance")
   }

}

// var totalamnt = datas.reduce(function(sum,amount){
//      console.log(sum+Number(amount))
// })


