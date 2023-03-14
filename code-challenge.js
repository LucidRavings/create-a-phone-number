const createPhoneNumber = (numArr) => {
    if (numArr.length === 10){
        return `(${numArr[0]}${numArr[1]}${numArr[2]}) ${numArr[3]}${numArr[4]}${numArr[5]}-${numArr[6]}${numArr[7]}${numArr[8]}${numArr[9]}`
    } else {
        return console.log('Please use a 10 digit phone number')
    }
}

let sample = [5, 5, 5, 1, 2, 3, 4, 5, 6, 7]
console.log(createPhoneNumber(sample))