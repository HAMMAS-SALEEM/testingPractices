export const lengthString = (string) => {
    let length = [...string].length
    return (length >= 1 && length <= 10 ? length : "Input should have minimum 1 and maximum 10 characters")
}

export const reverseString = (string) => {
    let revStr = [...string].reverse().join('');
    return revStr
}

export class Calculator {
    static add(a,b){
        return a+b
    }
    static subtract(a,b){
        return a-b
    }
    static multiply(a,b){
        return a*b
    }
    static divide(a,b){
        return a/b
    }
}

export const capitalize = (string)=>{
    let str = string.toUpperCase().slice(0,1)+string.slice(1,string.length)
    return str
}