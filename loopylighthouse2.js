const loopyLighthouse = function(range, multiples, words) {
    for (var number = range[0]; number <= range[1]; number++) {
      if (number % multiples[0]=== 0 && number % multiples[1]=== 0) {
       console.log(words[0]+words[1]);
      } else if (number % multiples[0] === 0) {
        console.log(words[0]);
      } else if (number % multiples[1]=== 0) {
        console.log(words[1]);
      }else{
        console.log(number);
      } 
    }
     
     
    };
    loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
    
    
    //The loopyLighthouse function should log to 
    //the console 
    //all the numbers from 15 to 90, 
    //except replacing multiples of 2 with "Batty", 
    //multiples of 5 with "Beacon", and
    // multiples of 2 and 5 with "BattyBeacon".