const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
    
}

const returnLastTwoDrivers = function (selectingDrivers){
    return selectingDrivers.slice(-2) //works backwards than a positive

}

const selectingDrivers = [ 
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

function createFareMultiplier(int){
    return function(fare){
        return int * fare 
    }
}

// const fareDoubler = {fare} => createFareMultiplier(num)

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

// function selectDifferentDrivers(drivers, funct){
//     return funct(drivers);
//     }


const selectDifferentDrivers = (drivers, funct) => funct(drivers)