
// instead of declaring 1 varible for each button , creat just one that holds a list of them all
var nums = document.querySelectorAll('button')


// var dot=document.querySelector("#dot");
// var add=document.querySelector("#add");
// var sub=document.querySelector("#sub");
// var multiply=document.querySelector("#multiply");
// var divide=document.querySelector("#divide");


// var del=document.querySelector("#del");
// var reset=document.querySelector("#reset");
// var equalsTo=document.querySelector("#equalsTo");
var valueInput=document.getElementById("valueInput");
// var body=document.querySelector("body")
var l=[];


const displayInput = (val)=>{
	 // valueInput.insertAdjacentHTML("beforeend",val)
	 
	 valueInput.value = "";
	 let displayValue = [];
	  l.forEach((element) =>{
	  	valueInput.value +=""+ element;
	 })

	console.log(l);
}

/*
const number=(event)=>{
	 target_id=event.target.id;
	if (target_id==="num_1" || event.keyCode===49){
		displayInput("1");
	}
	else if(target_id==="num_2" || event.keyCode===50){
		displayInput("2");
	}
	else if(target_id==="num_3" || event.keyCode===51){
		displayInput("3");
	}
	else if(target_id==="num_4" || event.keyCode===52){
		displayInput("4");
	}
	else if(target_id==="num_5" || event.keyCode===53){
		displayInput("5");
	}
	else if(target_id==="num_6" || event.keyCode===54){
		displayInput("6");
	}
	else if(target_id==="num_7" || event.keyCode===55){
		displayInput("7");
	}
	else if(target_id==="num_8" || event.keyCode===56){
		displayInput("8");
	}
	else if(target_id==="num_9" || event.keyCode===57){
		displayInput("9");
	}
	else if(target_id==="num_0" || event.keyCode===48){
		displayInput("0");
	}

}
*/

// const operation=(event)=>{
// 	target_id=event.target.id;
// 	if (target_id==="add" || event.keyCode===43){
// 		displayInput("+");
// 	}
// 	else if (target_id==="sub" || event.keyCode===45){
// 		displayInput("-");
// 	}
// 	else if (target_id==="multiply" || event.keyCode===42){
// 		displayInput("*");
// 	}
// 	else if (target_id==="divide" || event.keyCode===47){
// 		displayInput("/");
// 	}
// 	else if (target_id==="dot" || event.keyCode===46){
// 		displayInput(".");
// 	}
// }

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

	
	// else if (target_id==="reset"){
	// 	valueInput.innerHTML="";
	// 	l=[];
	// }
	// else if(target_id==="del" || event.keyCode===8 || event.keyCode===46){
	// 	s_l1=""
	// 	l.forEach(function(i){
	// 		s_l1+=i+""
	// 	})
	// 	l.pop();
	// 	valueInput.innerHTML=s_l1;
	// }

//}

const emptyDisplay=() =>{
		l.length= 0;  //by setting the length to 0 we automatically remove all the elements
		valueInput.value = "";
	}

const eraseLastElement=()=>{
	l.pop()
	displayInput(l);
}

/*
num_1.addEventListener("click", number);
num_2.addEventListener("click", number);
num_3.addEventListener("click", number);
num_4.addEventListener("click", number);
num_5.addEventListener("click", number);
num_6.addEventListener("click", number);
num_7.addEventListener("click", number);
num_8.addEventListener("click", number);
num_9.addEventListener("click", number);
num_0.addEventListener("click", number);
*/

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




// add.addEventListener("click", operation);
// sub.addEventListener("click", operation);
// multiply.addEventListener("click",operation); 
// divide.addEventListener("click",operation);  
// dot.addEventListener("click", operation);
// del.addEventListener("click", ToDo);
// reset.addEventListener("click", ToDo);
// equalsTo.addEventListener("click", ToDo);

// body.addEventListener("keypress",number);
// body.addEventListener("keypress",operation);
// body.addEventListener("keydown",ToDo);