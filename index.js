// Code your solution in this file!
const officeBlock = 42

function distanceFromHqInBlocks(street){
    return Math.abs(street - officeBlock);
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street)*264;
}

function distanceTravelledInFeet(startStreet, endStreet){
    let distance = distanceFromHqInFeet(endStreet) - distanceFromHqInFeet(startStreet);
    return Math.abs(distance);
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400 ){
        return 0;
    } else if (distance > 2500){
        return "cannot travel that far";
    } else if (distance > 2000){
        return 25;
    } else {
        let fare = (distance - 400)*0.02;
        return fare;
    }
}
