export const lengthString = (string) => {
    let length = [...string].length
    return (length >= 1 && length <= 10 ? length : "Input should have minimum 1 and maximum 10 characters")
}

const reverseString = (string) => {
    let revStr = [...string].reverse().join('');
    return revStr
}