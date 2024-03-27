// Code your solution in this file!

// get distnace of HQ in blocks

function distanceFromHqInBlocks(blockNumber){
    if(blockNumber > 42){
        return blockNumber -42
    }else{
        return 42 -blockNumber
    }
};


//  get distance of HQ in feet

const feetPerBlock = 264;
  
function distanceFromHqInFeet(blockNumber) {
    return feetPerBlock * distanceFromHqInBlocks(blockNumber)
};

//get distance travelled in feet

function distanceTravelledInFeet(start, end){
    if (end > start ){
        return (end - start) * feetPerBlock
    }else if (start > end ){
        return (start - end ) * feetPerBlock
    }else 
       return "distance"
};

// calculate the fare price

function calculatesFarePrice(start, destination){
    const distance = Math.abs(destination - start) * 264;

    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};

console.log(calculatesFarePrice(43,44));
    
