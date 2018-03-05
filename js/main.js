// GO!

// TASK 1 -- Show/Hide Nav

let containerNav = document.querySelector("nav")
const btnNav = document.querySelector("#hide-nav button")

btnNav.addEventListener("click", hide)

function hide(){

if(containerNav.classList.contains("nav-menu-hidden")){
		containerNav.classList.remove("nav-menu-hidden")
	} else {
		containerNav.classList.add("nav-menu-hidden")
	}
}





// TASK 2 -- Select an Icon
const changeBox = document.querySelectorAll(".wish-list .option")
const arrayColor = [...changeBox]
for(let i = 0; i < arrayColor.length; i++){
	arrayColor[i].addEventListener ("click", changeColor)
}

	function changeColor(e){
	const item = e.currentTarget
	item.classList.toggle("selected")	





// TASK 3 -- Move Item From List to List


const itemPlus= document.querySelectorAll(".point")
const arrayCircle= [...itemPlus]
for(let i = 0; i < arrayCircle.lenght; i++){
  arrayCircle[i].addEventListener("click".plus)
  }
 function plus(event){
   let number = parseInt(event.target.textContent)
   result.textContent= resultNumber+=number
 }
  
const result = document.querySelector("total-points")
const resultNumber=parseInt(result.textContent)

// TASK 4 -- Add Guest to List

const list= document.querySelector(".student-workspace li")

console.log(list)
const listArray= [...list]

for(let i = 0; i < listArray.length; i++){
	listArray[i].addEventListener('click',toggleParent)
}

const goodBoys= document.querySelector(".good-standing-list")
const badBoys= document.querySelector(".probation-list")

function toggleParent(e){

	const eItem= e.target
	if(eItem.parentNode.classList == "probation-list"){
		goodBoys.appendChild(eItem)
	} else if (eItem.parentNode.classList =="good-standing-list"){
		badBoys.appendChild(eItem)
	}

}






// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
