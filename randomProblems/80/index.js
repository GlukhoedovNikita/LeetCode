

const removeDuplicates = (arr) => {
    let counter = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            counter++
            if (counter >= 3) delete arr[i - 1]
        }
        else counter = 1
    }

    return arr.length 
}

const arr = [0,0,1,1,1,1,2,3,3]
console.log(removeDuplicates(arr))