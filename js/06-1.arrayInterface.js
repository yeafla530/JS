let array1 = [1, 2, 3, 4, 5, 6, 7]

console.log(array1.length)
console.log(array1.toString())
console.log(array1.toLocaleString())
console.log(array1.pop())
console.log(array1.push(8))
console.log(array1.concat([1, 10, 11]))
console.log(array1.join(' '))
console.log(array1.reverse())
console.log(array1.shift())
console.log(array1.slice(3,5))
console.log(array1.sort())
console.log(array1.splice(1,1))
console.log(array1.splice(1,0,[8,9,10]))
console.log(array1.unshift(3))
console.log(array1.indexOf(5)) 
console.log(array1.lastIndexOf(1))
console.log(array1)
const isVelowThreshod = (currentValue) => currentVlue < 3
console.log(array1.every(isVelowThreshod))
console.log(array1.some(isVelowThreshod))
console.log(array1.forEach((array2) => console.log(array2)))

