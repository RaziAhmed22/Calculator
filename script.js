var nums = document.querySelectorAll('button')
var valueInput=document.getElementById("valueInput");
var l=[];

// for theme selector 
var vSlider = document.getElementById("range"); 


const displayInput = (val)=>{
	 // valueInput.insertAdjacentHTML("beforeend",val)
	 
	 valueInput.value = "";
	 let displayValue = [];
	  l.forEach((element) =>{
	  	valueInput.value +=""+ element;
	 })

	console.log(l);
}

const ToDo=(elements)=>{

		let format ="";

		elements.forEach((e,i) =>{
			format +=e;
		})

		valueInput.value=eval(format);	
		//console.log(format + " nice!");

		//after all calculation done we should "erase" the array and only keep the last value
		elements.length = 0; //erase the array
		elements[0] = eval(format); // and keep the last value in memory
	}

	

const emptyDisplay=() =>{
		l.length= 0;  //by setting the length to 0 we automatically remove all the elements
		valueInput.value = "";
	}

const eraseLastElement=()=>{
	l.pop()
	displayInput(l);
}



//instead do this
nums.forEach((element,i) =>{

	let val="";
	element.addEventListener('click',(e) =>{

		//write the value captured in the calculator display
		 // using the already built function displayInput
		 if((element.innerHTML >= 0 && element.innerHTML <= 9) ||
		 	 (element.innerHTML == "+") || (element.innerHTML == "-") ||
		 	  (element.innerHTML == "/") || (element.innerHTML == "x") || (element.innerHTML == ".")){
		 	

		 	if(element.innerHTML == "x"){
		 		 val = "*";
		 	}
		 	else {
		 		 val = element.innerHTML;
		 	}
		 	l.push(val)
		 	
		 	displayInput(l)
		}
		 else if (element.innerHTML == "Reset")  emptyDisplay();
		 else if (element.innerHTML == "del") eraseLastElement(l.length);
		 else if (element.innerHTML == "=")  ToDo(l); //sent the l array with all the value to be calculated


		 	
	})
})



//changing theme .....whats the best way to do this? 

// const themeChanger = () =>{

// 	switch(vSlider.value){
// 			case 1: ctheme("#160628",); break;
// 			case 2: ;break;
// 			case 3: ;break;
// 	}
// }



// const ctheme = (bodyColor,letters,inputColors,mContainer,b,bShadow,sB,sBShadow,sB2,sBShadown2) =>{
	
// 	let body    = document.body();
// 	let input   = document.getElementById('InputNumbersBox');
// 	let buttons = document.getElementByTagName('button');
// 	//extra and special1 have the same style .....special2 is the one that differ
// 	let sButton      = document.getElementById('extra');
// 	let sButton2     = document.getElementById('special2');

// 	//special buttons letters are different from body letters colors
// 	//change class to attribute new style to HTML elements

// 	body.style.background = bodyColor;




// }



