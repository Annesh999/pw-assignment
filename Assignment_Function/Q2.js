// Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
// personalized greeting message. Use this function to greet three different people.


function generateGreeting(Name){
    const user={};
    user.Name=Name;
    user.Greeting=function(){ return`Hi!${this.Name} Welcome to PW Skills.Thank You For joining our Fullstack Web development course.`}
   return user;
}
const user1= generateGreeting("Annesh");
const user2= generateGreeting("Ankush");
const user3= generateGreeting("Anmol");
        console.log(user2.Greeting());
        console.log(user1.Greeting());
        console.log(user3.Greeting());
