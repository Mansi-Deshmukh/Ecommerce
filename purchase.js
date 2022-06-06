let purchaseData = JSON.parse(localStorage.getItem("purchase")) ||[];
let datas = JSON.parse(localStorage.getItem("user")) || [];

const applydata =(data)=>{
    let cont = document.getElementById('purchased_vouchers');
    
    data.forEach(element => {
            let div = document.createElement('div');

            let img = document.createElement('img');
            img.src = element.image;
            let t = document.createElement('h2');
            t.innerText = element.name;
            let p = document.createElement('h2');
            p.innerText = element.price;
            
            div.append(img,t,p);
            cont.append(div)
    });
}
applydata(purchaseData)

let amnt = document.getElementById('wallet_balance');
amnt.innerHTML=datas[0].amount;

