/*Using recursion, write a function fibRec 
which takes a number and returns an array 
containing that many numbers from the Fibonacci sequence. 
Using an example input of 8, this function should return
the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

const fibRec = number => {
if (number == 1) return [0]
if (number == 2) return [0, 1]

const firstElemFromEnd = fibRec(number - 1).at(-1)
const secondElemFromEnd = fibRec(number - 1).at(-2)
const sum = firstElemFromEnd + secondElemFromEnd
return fibRec(number - 1).concat([sum])
}

console.log(fibRec(8))//[0, 1, 1, 2, 3, 5, 8, 13]

