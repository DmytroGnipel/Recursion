const mergeSort = array => {
    if (array.length < 2) return array
    const middle = Math.floor(array.length / 2)
    let leftSide = array.slice(0, middle)
    let rightSide = array.slice(middle)
    leftSide = mergeSort(leftSide)
    rightSide = mergeSort(rightSide)
    return sortSortedArrays (leftSide, rightSide)
}
function sortSortedArrays(left, right) {
    let lastChunk
    if (!left.length || !right.length) {
        if (!left.length) lastChunk = right.slice(0)
        else lastChunk = left.slice(0)
        return lastChunk
    }
        const result = []
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift())
        return result.concat(sortSortedArrays(left, right))
    }
console.log(mergeSort([1, 8, 3, 5, 4, 6, 11, 2]))//[1, 2, 3,  4, 5, 6, 8, 11]
console.log(mergeSort([105, 79, 100, 110]))//[105, 79, 100, 110]