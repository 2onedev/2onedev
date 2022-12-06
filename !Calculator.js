let result = document.getElementById("input-text");

let display=(number)=>{

 result.value += number

}

let equal=()=>{
  try{

    result.value=eval(result.value);
  }
  catch(err){
    
    alert("Enter Valid Number")
  }
}

function clr(){
result.value="0";
}
function del(){
result.value=result.value.slice(0 , -1)
}