/* Created by Tivotal */

let btn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let arrows = document.querySelectorAll(".arrow");
for (var i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;

    arrowParent.classList.toggle("show");
  });
}
cartIcon.addEventListener('mouseover', ()=>{
  if(wholeCartWindow.classList.contains('hide'))
  wholeCartWindow.classList.remove('hide')
  })
  
  const cartIcon = document.querySelector('.fa-cart-arrow-down')
  const wholeCartWindow = document.querySelector('.whole-cart-window')
  wholeCartWindow.inWindow = 0
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn')
  addToCartBtns.forEach( (btn)=>{
      btn.addEventListener('click', addItemFunction)
  }  )
  
  cartIcon.addEventListener('mouseover', ()=>{
  if(wholeCartWindow.classList.contains('hide'))
  wholeCartWindow.classList.remove('hide')
  })
  
  cartIcon.addEventListener('mouseleave', ()=>{
      // if(wholeCartWindow.classList.contains('hide'))
      setTimeout( () =>{
          if(wholeCartWindow.inWindow===0){
              wholeCartWindow.classList.add('hide')
          }
      } ,500 )   
      })
  
   wholeCartWindow.addEventListener('mouseover', ()=>{
       wholeCartWindow.inWindow=1
   })  
   
   wholeCartWindow.addEventListener('mouseleave', ()=>{
      wholeCartWindow.inWindow=0
      wholeCartWindow.classList.add('hide')
  })  
   