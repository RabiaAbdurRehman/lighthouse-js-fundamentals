const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
  let paradePath = [0,0];

  for(let move of moves){
    if(move === 'north'){ paradePath[1]++ }
    else if (move === 'south'){ paradePath[1]--; }
    else if (move === 'east'){ paradePath[0]++; }
    else if (move === 'west'){ paradePath[0]--; }
  }
  return paradePath;
}

console.log(finalPosition(moves));