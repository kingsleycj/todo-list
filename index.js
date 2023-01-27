const prompt = require("prompt-sync")({ sigint: true }); // to get the user's input
let todoList = []; // an empty initialized array to store our to-do tasks

// a function to eliminate the repetitive use of "console.log"
const print = (message) => {
  console.log(message)
}

print("********** Welcome to Kingsley's To-DoList console application! **********n\n"); // a simple welcome illustration

const mainMenu = () => {
  let userInput = prompt(
    "What would you like to do?\n1. Add a new to-do task\n2. View all to-do task's\n3. Mark a to-do task as complete\n4. Exit To-doList Application\n\nPlease reply with the index of your desired activity\n\n"
  ); // to request for user activity on the to-do app
  switch (userInput) {
    case "1":
      let newTodo = prompt("Enter the new to-do task :");
      todoList.push(newTodo);
      print("New To-do Task added!");
      mainMenu();
      break;
    case "2":
      print("All to-dos:");
      todoList.forEach((todo, index) => {
        // a higher order function to identify the index of an incremented to-do task
        print(`${index}. ${todo}`);
      });
      mainMenu();
      break;
    case "3":
      // to mark a to-do task as completed
      let index = prompt("Enter the index of the to-do task to mark as complete:");
      todoList[index] = `${todoList[index]} (complete)`;
      print("To-do task has been marked as complete!");
      mainMenu();
      break;
    case "4":
      return;
    default:
      print("Invalid choice. Please check the index and try again.");
      mainMenu();
      break;
  }
};
mainMenu();

