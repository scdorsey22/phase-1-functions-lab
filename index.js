
function distanceFromHqInBlocks(customer) {
    return Math.abs(customer -42)
} 
    
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks)*264 
}


function distanceTravelledInFeet(start, destination) {
    return Math.abs((start -destination)*264)
        
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400)
    return 0
    else (400 <= distanceTravelledInFeet(start, destination) < 2000)
    return ((distanceTravelledInFeet(start, destination)-400) * .02)

}