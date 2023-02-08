#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

let todos : string[]=[]
let loop = true

const sleep = () =>{
    return new Promise((res, rej) => {
    setTimeout(res,2000)})}

async function welcome(){
 const title =chalkAnimation.rainbow("Make your list here")
 await sleep()
title.stop()
}
await welcome()

while(loop){
    
    const answers: {
        TODO:string,
        addmore:boolean
    } = await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message:(chalk.blue("Make your list> "))
        },
        {
            type:"confirm",
            name:"addmore",
            message:(chalk.blue("Do you want to add more> ")),
            default:false      
        }
    ])
const {TODO,addmore}=answers
console.log(answers);
loop = addmore
if (TODO){
    todos.push(TODO)
}else{
    console.log(chalk.red("Unvalid input"));
}

}

if(todos.length > 0){
    console.log(chalk.green("Your todo list"))
        todos.forEach(todos => {
        console.log(todos);
        
    })

}else{
    console.log(chalk.red("No todo found"));
    
}
