var num_1=document.querySelector("#num_1");
var num_2=document.querySelector("#num_2");
var num_3=document.querySelector("#num_3");
var num_4=document.querySelector("#num_4");
var num_5=document.querySelector("#num_5");
var num_6=document.querySelector("#num_6");
var num_7=document.querySelector("#num_7");
var num_8=document.querySelector("#num_8");
var num_9=document.querySelector("#num_9");
var num_0=document.querySelector("#num_0");
var dot=document.querySelector("#dot");
var add=document.querySelector("#add");
var sub=document.querySelector("#sub");
var multiply=document.querySelector("#multiply");
var divide=document.querySelector("#divide");
var del=document.querySelector("#del");
var reset=document.querySelector("#reset");
var equalsTo=document.querySelector("#equalsTo");
var valueInput=document.querySelector(".Input");
var body=document.querySelector("body")
var l=[];
const displayInput=(val)=>{
	valueInput.insertAdjacentHTML("beforeend",val);
	l.push(val);
}
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

const operation=(event)=>{
	target_id=event.target.id;
	if (target_id==="add" || event.keyCode===43){
		displayInput("+");
	}
	else if (target_id==="sub" || event.keyCode===45){
		displayInput("-");
	}
	else if (target_id==="multiply" || event.keyCode===42){
		displayInput("*");
	}
	else if (target_id==="divide" || event.keyCode===47){
		displayInput("/");
	}
	else if (target_id==="dot" || event.keyCode===46){
		displayInput(".");
	}
}

const ToDo=(event)=>{
	target_id=event.target.id;
	if(target_id==="equalsTo" || event.keyCode===61 || event.keyCode===13){
		var s_l=""
		l.forEach(function(i){
			 s_l+=i+"";
		})
		valueInput.innerHTML=eval(s_l);
		// l=[];
	}
	else if (target_id==="reset"){
		valueInput.innerHTML="";
		l=[];
	}
	else if(target_id==="del" || event.keyCode===8 || event.keyCode===46){
		s_l1=""
		l.forEach(function(i){
			s_l1+=i+""
		})
		l.pop();
		valueInput.innerHTML=s_l1;
	}

}


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
add.addEventListener("click", operation);
sub.addEventListener("click", operation);
multiply.addEventListener("click",operation); 
divide.addEventListener("click",operation);  
dot.addEventListener("click", operation);
del.addEventListener("click", ToDo);
reset.addEventListener("click", ToDo);
equalsTo.addEventListener("click", ToDo);
body.addEventListener("keypress",number);
body.addEventListener("keypress",operation);
body.addEventListener("keydown",ToDo);