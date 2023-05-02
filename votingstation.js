const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];
  
const chooseStations = function (stations) {
  let goodStation = [];
  for (let station of stations){
    if (station[1] >= 20){
      if (station[2] === 'school' || station[2] === 'community centre'){
        goodStation.push(station[0]);
      }
    }
  } 
  return goodStation;
    // Your code in here ...
}
  
console.log(chooseStations(stations));
  //In order for a station to be deemed appropriate, it must have a 
  //capacity of at least 20, and be a school or community centre.
  
  
  