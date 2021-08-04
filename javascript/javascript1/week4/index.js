/*
***************************************************************************************************************************************
                                                         Voice assistant     
***************************************************************************************************************************************
*/
let userName = "";
let todolist = [];

function getReply(command) {
  let tempArray = command.split(" ");

  //get name and reply with the user's name
  if (command.toLowerCase().includes("hello")) {
    //make tempArray and pick up the name
    userName = tempArray[tempArray.length - 1];
    console.log(`Nice to meet you ${userName}`);
  }

  //to differenciate the question, using includes what(but then should only asked "what is my name")
  else if (command.toLowerCase().includes("my name")) {
    if (userName != "") {
      console.log(`Your name is ${userName}`);
    } else {
      console.log("Sorry I don't know your name");
    }
  }

  // made todo list adding part
  else if (command.toLowerCase().includes("add")) {
    // to get only the words that need to add on the todo list,
    // split the command and get rid of first one(Add),
    tempArray.shift(tempArray[0]);
    let todo = "";

    // and last three(to my todo)
    for (let i = 0; i < 3; i++) {
      tempArray.pop(tempArray[tempArray.length - 1]);
    }

    // move or copy the new tempArray to todo
    for (let a = 0; a < tempArray.length; a++) {
      const element = tempArray[a];
      todo += tempArray[a] + " ";
    }

    // push new todo item to todolist array
    todolist.push(todo);
    console.log(`Added '${todo}' to your todo list, ${userName}`);
  }

  // remove todo item from todolist array
  else if (command.toLowerCase().includes("remove")) {
    console.log(todolist);
    // split the command and get rid of first one(Add),
    tempArray.shift(tempArray[0]);
    let todo = "";

    // and last three(to my todo)
    for (let i = 0; i < 3; i++) {
      tempArray.pop(tempArray[tempArray.length - 1]);
    }

    // move or copy the new tempArray to todo
    for (let a = 0; a < tempArray.length; a++) {
      const element = tempArray[a];
      todo += tempArray[a] + " ";
    }

    let removeItem = todolist.splice(todo, 1);
    console.log(`Removed '${removeItem}' from your todo, ${userName}`);
  }

  // checking and showing current todolist status
  else if (command.toLowerCase().includes("on my todo?")) {
    console.log(
      `You have ${todolist.length} todo(s).\n${userName}'s ToDo List = [${todolist}]`
    );
  }

  // show today's date
  else if (command.toLowerCase().includes("is it today?")) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var yyyy = today.getFullYear();
    console.log(`${dd}. of ${monthNames[today.getMonth()]} ${yyyy}`);
  }

  // make a simple calculator
  else if (command.toLowerCase().includes("what is")) {
    const match = command.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
    let result = 0;
    if (match) {
      if (match[2] === "+") {
        result = parseInt(match[1]) + parseInt(match[3]);
      }
      if (match[2] === "-") {
        result = parseInt(match[1]) - parseInt(match[3]);
      }
      if (match[2] === "*") {
        result = parseInt(match[1]) * parseInt(match[3]);
      }
      if (match[2] === "/") {
        result = parseInt(match[1]) / parseInt(match[3]);
      }
      console.log(result);
    } else {
      console.log("Sorry, please put right syntex");
    }
  }

  // setting timer
  else if (command.toLowerCase().includes("minutes")) {
    const match = command.match(/\d+/); // detect the digit(should always take minutes)
    if (match) {
      console.log(`Timer set for ${match[0]} minutes`);

      let timer = parseInt(match[0]) * 60 * 1000; //change the minute number into milliseconds

      setTimeout(() => {
        console.log(parseInt(match[0]) + " minute(s)" + "Timer done");
      }, timer);
      // const minutes = Math.floor(timer / 60);
      // let seconds = timer % 60;
      // seconds = seconds < 10 ? "0" + seconds : seconds;

      // console.log(`${minutes} : ${seconds}`);
    }
  } else {
    console.log("Sorry, I didn't understand you. Please try again");
  }
}

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // Should add singing in the shower to a list of todos
console.log(getReply("Add do yoga to my todo")); //
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("What is on my todo?")); //  Fx you have 2 todos - fishing and singing in the shower
console.log(getReply("What day is it today?")); //E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 3 - 3"));
console.log(getReply("what is 3 * 3"));
console.log(getReply("what is 3 / 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("Set a timer for 4 minutes"));
