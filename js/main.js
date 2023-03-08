const MALE_NAMES= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let userAkanName= null;
let gender=null;
//let indexOfDay=null;



function getUserData() {
let birthYear = prompt ("enter your year of birth");
let century = parseInt (birthYear.slice(0, 2));
let year = parseInt (birthYear.slice(2, ));
let month = parseInt( prompt("enter the month"));
let date= parseInt(prompt("enter the date"));
gender= prompt("enter the gender");
let indexOfDay=Math.floor(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7);   
return indexOfDay;

}


function getUserAkanName(){
    let indexOfDay= getUserData()
    //let gender= getUserData();
    if (gender == "m")
    {
        userAkanName= MALE_NAMES[indexOfDay];
    } 
    else if (gender== "f")
    {
        userAkanName= FEMALE_NAMES[indexOfDay];
    } else 
    {
        console.log("Your Gender is unknown")
    }
 
}

function main()
{
//getUserData()
//let indexOfDay= getUserData();
getUserAkanName();
   console.log(userAkanName);  
   document.getElementById("output").innerHTML = "your Akan Name is : " + userAkanName;  
}