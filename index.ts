#! /usr/bin/env node
console.log("Guess s number between 1 to 8");
// Now create variable
let a:number=Math.floor(Math.random()*7)
import inquirer from "inquirer"
while(true){
    let input = await inquirer.prompt(
        ({ name: "guess",type:"number",
    message:"Enter your number between 1 to 8:"})
    )

    //provide code
    let ans: any = input.guess;
    if (a==ans)
    {console.log("congratulation your guess number is correct")
    break;}
    else{console.log("sorry you guess wrong number try again")}
}