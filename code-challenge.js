const createPhoneNumber = (numArr) => {
    if (numArr.length === 10){
        return `(${numArr[0]}${numArr[1]}${numArr[2]}) ${numArr[3]}${numArr[4]}${numArr[5]}-${numArr[6]}${numArr[7]}${numArr[8]}${numArr[9]}`
    } else {
        return 'Please use a 10 digit phone number'
    }
}

const replaceMethod = (numArr) => {
    let format = "(xxx) xxx-xxxx"
    if (numArr.length === 10){
        for (i = 0; i < numArr.length; i++){
            if(numArr[i] > 9 || numArr[i] < 0){
                return "Incompatiable array"
            } else if (numArr[i] <= 9 && numArr[i] >= 0){
                format = format.replace('x', numArr[i])
            } else {
                return "Incompatible array"
            }
        }
    } else {
        return 'Please use a 10 digit phone number'
    }
    return format
}

let sample = [5, 5, 5, 1, 2, 3, 4, 5, 6, 7]
let errorSample = ["a", "p", "p", "l", "e", "c", "a", "k", "e", "s"]
console.log(createPhoneNumber(sample))
console.log(createPhoneNumber(errorSample))
console.log(replaceMethod(sample))
console.log(replaceMethod(errorSample))