function range(start,end,state){
    let new_array = [];
    for(i=start;i<=end;i+=state){
        if(start >end || state <=0){
            return [];
        }
        else if (start===undefined || end===undefined|| state===undefined){
            return [];
        }
        else{
        new_array.push(i);
        }
    }
    return new_array;

}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
//start, end, or step being undefined
//start being greater than end
//step being 0, or negative