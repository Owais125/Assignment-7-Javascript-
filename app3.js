function greet(){
    var userInput1 = document.getElementById("Input1")
    var userInput2 = document.getElementById("Input2")
    var userInput3 = document.getElementById("Input3")
    var userInput4 = document.getElementById("Input4")


    if(userInput1.value && userInput2.value && userInput3.value && userInput4.value){
      alert("You are Register")

    }
    else{
        alert("Please Enter Some Field")
    }

}