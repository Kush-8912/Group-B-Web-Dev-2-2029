
// Selected Elements
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const modalTaskArea = document.querySelector('.textArea-cont')

//flags
let modalFlag = false;



// This Event opens and closes the Modal 
addBtn.addEventListener("click", function () {
  // Modal Pops up
  if (modalFlag == false) {
    modalCont.style.display = "flex";
    modalFlag = true;
  } else {
    modalCont.style.display = "none";
    modalFlag = false;
  }

  // Modal Hides
});


// 
modalCont.addEventListener('keydown' , function(e){
   
  
  if(e.key=='Shift'){
    console.log(modalTaskArea.value)
  }
})
