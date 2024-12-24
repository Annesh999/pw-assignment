// You are building a shipping application. Write a program that takes the type of package ("standard",
//     "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
//     based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
//     "overnight" would be delivered the next day.


function Fedex(package){
    switch(package){
        case "express":
               console.log("estimated deliverey in 1-2 days");
               break;
        case "standard":
            console.log("estimated deliverey in 3-5 days");      
            break;
            
        case "overnight":
            console.log("estimated deliverey in next day");       
     default:
            console.log("wrong input");       


    }
   
}
let package="standard"
Fedex(package);