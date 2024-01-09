/*Using iteration, write a function fibs
which takes a number and returns an array
containing that many numbers from the Fibonacci sequence. 
Using an example input of 8, this function should
return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

const fibs = number => {
    if (number == 1) return [0]
    if (number == 2) return [0,1]
    const result = [0,1]    
    let a = 0, b = 1, i = 3, sum
    while (i <= number) {
        sum = a + b
        result.push(sum)
        a = b
        b = sum
        i++
    }
    return result
}

console.log(fibs(8)) // [0, 1, 1,  2, 3, 5, 8, 13]