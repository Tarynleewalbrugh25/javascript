                                                  //====REVISION=======
/*(1)create an array that contain  elements but the FIRST two must be a number
NB make sure that the element at position 4 is in lowercase
*/
//let data = [2, 5, 'Nikita', 'Shawn', 'candice', 'Matthew']                   //=======/be sure to read questions properly.
//(2)create two objects and add the objects into an array ,log the objects as well 
//let person1 = {
//    firstName: 'Thimna'
//}
//let person2 = {
//    firstName: 'Veronique'
//}
//create a empty array 
//let personDetails = []
//personDetails.push(person1)    //its not a must to push it all at once ,it up to you 
//personDetails.push(person2)
//console.log(personDetails);
//console.log(person1);
//console.log(person2);


///==========The if loop ========
let firstName = 'Zubair'  //because there is a value at first name so its true ,if its nothing then it would be false
let state = 'Present'
//if(state == 'Present'){
//    console.log("Present");
//}else if(state == 'late'){  //to use else if we need more then 3 variables 
//    console.log("late");    
//}else {
//    console.log("Absent");
//}


//convert the above loop into a switch 
//switch (true) {                         //if you want to check if the sate is true ,use true -switch case needs to be true  because its a boolean 
//    case state ='present':              //case is in place of your if statement 
//        console.log("present");
//    break;
//    case state !="":
//        console.log("late");
//    case state:
//        console.log("late -> Final warning");
//    break;
//    default:
//        console.log("Absent");
//    break;
//}

//use math methods                      
let numbers = [9, 4, 2, 5, 10]

function highestnumber(args) {
    for(let number of  args) {
        console.log(number);
    }
}
highestnumber(numbers)
