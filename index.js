// code your solution here
saturdayFun()
function saturdayFun(){
    console.log("This saturday I want to have fun and do some chores");
}



const mondayWork = function(action = "go to the office") {
    return `This Monday, I will ${action}.`;
  };
  console.log(mondayWork());

  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
    console.log(saturdayFun()); 



// Function wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  const encouragingPromptFunction = wrapAdjective();
  console.log(encouragingPromptFunction());