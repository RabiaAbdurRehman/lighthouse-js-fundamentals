function judgeVegetable(vegetables, metric){
    let high = 0;
    let first;
      //Round up all values for characteristic
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i][metric] > high) {
        high = vegetables[i][metric];
        first = vegetables[i].submitter;
      }
    }
    return first;
  
  }
  const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
    
  const metric = 'redness'
    
  judgeVegetable(vegetables, metric)