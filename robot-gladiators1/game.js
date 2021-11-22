var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
      name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
  };