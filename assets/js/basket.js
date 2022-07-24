function ShowAlert(){
    let basket=JSON.parse(localStorage.getItem('basket'));
    if(basket.length===0)
    {
        document.getElementById('alert').classList.remove('d-none');
        document.getElementById('table').classList.add('d-none');
        document.getElementById('result').classList.add('d-none');

    }
    else
    {
        document.getElementById('alert').classList.add('d-none');
        document.getElementById('table').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');


        let list='';

        basket.forEach(item => {
            list+=`
            <tr>
                <td>${item.id}</td>
                <td>
                    <img src="${item.img}" class="card-img-top"  alt="">
                </td>
                <td>${item.name}</td>
                <td>
                    <input type="number" value="${item.count}">
                </td>
                <td>${item.price}</td>
                <td>
                    <button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
            `;
        })

        document.getElementById('tbody').innerHTML=list;
    }
}

ShowAlert();
function RemoveElement(){
    let btns=document.querySelectorAll('.btn');
    let basket=JSON.parse(localStorage.getItem('basket'));
    var item_id;
    var new_basket;
    for (const item of btns) {
        item.addEventListener('click',function(e){
            e.preventDefault();
            item_id=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            new_basket= basket.filter(itemm => itemm.id != item_id);
            localStorage.setItem('basket', JSON.stringify(new_basket));
            e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.parentElement.remove();
        }) 
    }
  
}

RemoveElement();



    // let btns=document.querySelectorAll('#tbody #btn');
    // let basket=JSON.parse(localStorage.getItem('basket'));
    // var new_basket;
    // btns.forEach(element => {
    //    element.addEventListener('click',function(e){
    //         let rm=e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    //         new_basket=basket.filter(item => item.id !== rm);
    //    })  
    // });
    // localStorage.setItem('basket', JSON.stringify(new_basket));


function ShowResult(){
 
    let basket=JSON.parse(localStorage.getItem('basket'));

    
}


