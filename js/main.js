const MALE_NAMES= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
let userAkanName= null;
let gender=null;



function getUserData() {
let birthYear = prompt ("Enter your year of birth: format xxyy eg 1980");
let century = parseInt (birthYear.slice(0, 2));
let year = parseInt (birthYear.slice(2, ));
let month = parseInt( prompt("Enter the month: between 1 to 12"));
let date= parseInt(prompt("Enter the date : between 1 to 31"));
gender= prompt("Enter the gender");
let indexOfDay=Math.floor(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) %7);   
return indexOfDay;

}

function checkValidMonth(){
    
    if (month<1 || month>12)
   { validMonth=true;
return validDate;}
    else 
    {validMonth= false;
    return validMonth;}
}

function checkValidDate(date){
    
    if (date<1 || date>31)
    {validDate= false;
    return validDate
    }
    else
   { validDate= true;
    return validDate
}
}


function getUserAkanName(){
let indexOfDay= getUserData();
//let validDate= checkValidDate();
//let validMonth= checkValidMonth();


            if (gender == "m" )
            {
                userAkanName= MALE_NAMES[indexOfDay];
                document.getElementById("output").innerHTML = "Your Akan Name is : " + userAkanName; 
                           
            } 
            else if (gender== "f" )
            {
                userAkanName= FEMALE_NAMES[indexOfDay];
                document.getElementById("output").innerHTML = "Your Akan Name is : " + userAkanName;  
               
            } 
        
            else 
            {
            
            alert ("your data is invalid: confirm the date, the month or gender.");
        
        }
        
}

function main()
{
getUserAkanName();
}  



