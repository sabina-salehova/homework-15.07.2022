if(localStorage.getItem('basket')===null)
{
    localStorage.setItem('basket',JSON.stringify([]))
}

let buttons=document.querySelectorAll('.btn');
for (const item of buttons) {
    item.addEventListener('click',function(e){
        e.preventDefault();

        let basket=JSON.parse(localStorage.getItem('basket'));
        let prod_id=e.target.parentElement.parentElement.parentElement.id;
        let prod_img=e.target.parentElement.previousElementSibling.src;
        let prod_name=e.target.previousElementSibling.previousElementSibling.innerText;
        let prod_price=e.target.previousElementSibling.innerText;
        
        let existProd=basket.find(item=>item.id===prod_id);
        
        if(existProd===undefined)
        {
            basket.push({
                id: prod_id,
                name: prod_name,
                img: prod_img,
                price: prod_price,
                count: 1
            });
        }
        else
        {
            existProd.count++;
        }

        localStorage.setItem('basket',JSON.stringify(basket));
    })
}

function ShowCount(){
    let basket=JSON.parse(localStorage.getItem('basket'));
    let count=basket.length;
    document.getElementById('count').innerHTML=count;
}

ShowCount();