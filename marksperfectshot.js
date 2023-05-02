const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
    for(s in moves){
        if(s === 'west'){
            moves[0]--;
        }
        else if(s==='east'){
            moves[0]++;
        }
        else if(s==='south'){
            moves[0]--;
        }
        else if(s==='north'){
            moves[0]++;
        }
        return moves;
    }
  }
 
  console.log(finalPosition(moves))