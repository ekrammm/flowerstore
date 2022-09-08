let s=0;
let p= document.getElementById('panier');
let add=document.getElementsByClassName('cart-btn')
for (let i=0;i<add.length;i++){
    let oneadd=add[i];
    oneadd.addEventListener('click',function(){
        s=s+1;
        p.value=s

    }

    )


}