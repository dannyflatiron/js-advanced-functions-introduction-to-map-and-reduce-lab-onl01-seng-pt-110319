// Your code here


const mapToNegativize = function (array) {
    return array.map(value => value * -1)
}

const mapToNoChange = function (array) {
    return array
}

const mapToDouble = function (array) {
    return array.map(value => value * 2)
}

const mapToSquare = function (array) {
    return array.map(value => value ** 2)
}

const reducer = (accumulator, item) => {
    return accumulator + item
}

const reduceToTotal = function(array, startingPoint=0) {
    return array.reduce(reducer, startingPoint)
}

const reduceToAllTrue = function(array) {
    // if (array.map(value => !value))
    // return false
    // else 
    // return true

    let i 
    for (i = 0; i < array.length; i++) {
        if (!array[i])
        return false
        
    }
    return true
}

const reduceToAnyTrue = function (array) {
    let i 
    for (i = 0; i <array.length; i++) {
        if (array[i])
        return true
    }
    return false
}

