// Using the usual Users and Todo lists:
//   !- Prompt the user for a letter

let userLetterInput = String(prompt("Write a letter"));


//   !- Find all the users who's name contains the letter
let usersWithLetter = users.filter(user => user.name.includes((userLetterInput)));



//   !- Say hi to those users in the console - but only 1 greeting every 2 seconds.
// console.log(users)
let i = 0;
let interval = setInterval(() => {
        console.log(`Hi ${usersWithLetter[i].name}`);
        i++;

        if (i === usersWithLetter.length) {
            clearInterval(interval);
        }
},2000);


console.log(usersWithLetter);



// !- Prompt the user for a user ID. Using the value, find 
// !all the todos that are Incomplete and console.log them.

let userIdInput = Number(prompt("Write a user ID"));

let uncompletedTasks = todos.filter(todo => todo.userId === userIdInput && todo.completed === false);

let titleOfUncompletedTasks = uncompletedTasks.map(todo => todo.title);

console.log(`Your uncompleted tasks are: ${titleOfUncompletedTasks}\n`);
// Tips
// - Don't forget to clear interval once it's done running
// - It's perfectly okay to prompt a user for details while other stuff (i.e.the interval) is running
// - Keep your code separated into functions for easier readability later

// Challenge
// - Prompt the user to enter a property (e.g. 'email' or 'address') and then console.log a list of name - given property. E.g. for email it would look along the lines of: 

// Bob Marley - bob@marley.com
// Steven Hawking - hawk@this.co.uk



