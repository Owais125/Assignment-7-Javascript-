function gee(){
    var userInput = document.getElementById("Result")
    console.log(userInput.value)
}


function gee2(){

    var userselect = document.getElementById("select")


    console.log(" Selected Value : ", userselect.value)
}


function gee3(){
    var Result2 = document.getElementById("res1")
    var Result3 = document.getElementById("res2")
    var Result4 = document.getElementById("res3")

   if(Result2.value && Result3.value  && Result4.value ){
    alert("Submitted")
   }
   else{
    alert("Please Fill All Field")
   }
}

function gee4(){
    var userInput1 = prompt("Enter Your status ")
   if(userInput1==="married"){
    alert("Available")
   }
   else{
    alert("Sorry....")
   }

}

function gee5(){
    var userInput3 = prompt("Enter Your status ")
   if(userInput3 === ""){
    alert("please Enter This Field")
   }
   else{
    alert("Enter...")
   }

}





