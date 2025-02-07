const total = document.querySelector(".total");
const incrementer = document.querySelectorAll(".fa-plus-circle")
const decrementer = document.querySelectorAll(".fa-minus-circle")
const supprime = document.querySelectorAll(".fa-trash-alt")
const Like = document.querySelectorAll(".fa-heart")






    //gestion de like
Like.forEach((btn =>{
    btn.addEventListener("click" , function(){
        btn.classList.toggle("colorLike")
    })
}))
  //gestion  d'incrementation
incrementer.forEach((btn =>{
    btn.addEventListener("click" , function(){
        const recup = this.nextElementSibling;
        const quantity =  parseInt(recup.textContent)
        recup.textContent =  quantity+1
        prixTotal()
    })
}))
//gestion  de decrementation
decrementer.forEach((btn =>{
    btn.addEventListener("click" , function(){
        const recup = this.previousElementSibling;
        const quantity =  parseInt(recup.textContent)
        if (quantity>1) {
            recup.textContent = quantity - 1
            prixTotal()
        }
    })
}))

//gestion  de suppression
supprime.forEach((btn =>{
    btn.addEventListener("click" , function(){
        let recup = document.querySelector(".Article").remove()
       
        prixTotal()
    })
}))

//gestion  du prix-total..
function prixTotal(){

let totalPrice = 0;

document.querySelectorAll(".Article").forEach((item)=>{
   let  PrixText =  item.querySelector(".unit-price").innerHTML;
   const prix = parseFloat(PrixText.replace("$", "")); 
   const quantityText = item.querySelector(".quantity").textContent; 
   const quantity = parseInt(quantityText);
   totalPrice += prix * quantity;

})

total.textContent = "$" + totalPrice;

}

