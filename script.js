const dateOfBirth=document.querySelector("#date-of-birth")
const luckyNumber=document.querySelector("#lucky-number")
const checkNumberButton=document.querySelector("#check-number")
const outputBox=document.querySelector("#output-box")
 console.log(dateOfBirth)
function compareValues(sum,luckyNumber){
    if (sum%luckyNumber===0){
        outputBox.innerText="Your Birthday Is Lucky 😍";
    }else{
        outputBox.innerText="Your Birthday Is Not Lucky 😔"
    }
}

function checkBirthdayIsLucky(){
    const dob=dateOfBirth.value
    const sum=calculateSum(dob);
    console.log(sum,dob)

    if(sum&&dob){
    compareValues(sum,luckyNumber.value)
    }
    else{
    outputBox.innerText="please enter both the fields"
    }
    
}
function calculateSum(dob){
    console.log(dob)
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum=sum+Number(dob.charAt(index))
    }
    return sum
}
checkNumberButton.addEventListener("click",checkBirthdayIsLucky)


