const countStr = (str)=>{
    let length = [...str].length
    return(length>=1 && length<=10 ? length : "Input should have minimum 1 and maximum 10 characters")
    }

module.exports = countStr;