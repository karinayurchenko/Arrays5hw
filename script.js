//Function #1
const getRandomArray = (length, min, max) => {
const randomArray= [];
    for ( let i=0; i<length; i++) {
        randomArray.push(Math.floor(Math.random() *(max - min + 1)) + min)
}
    return randomArray;
};
console.log (getRandomArray(17, 1, 50));

//Function #2
const getModa = (...numbers) => {
	let modaNumber= 0;
	let counter = 0;
	let max = 0;
	const sortedModaNumbers = numbers.sort ();
	for (let i = 0; i < sortedModaNumbers.length; i++) {
		if (sortedModaNumbers[i] === sortedModaNumbers[i+1]) {
      counter++;

			if(counter > max) {
        max = counter;
        modaNumber = sortedModaNumbers[i];
			}
		} else {
			counter = 0;
		}
  };
  return modaNumber;
}
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 3, 3, 3, 3, 2));


//Function #3
const getAverage = (...numbers) => {
let averageNumber = numbers.reduce((acc,element) => {
    if (Number.isInteger(element)) {
       return acc + element;
    } else {
     return  acc;
    }
}, 0);  
    return averageNumber / numbers.length;    
};
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//Function #4
const getMedian = (...numbers) => {
let medianNumber = 0;
let median = 0;
let sortedMedianNumbers = numbers.sort((a,b) => a-b);
    if (numbers.length % 2 !== 0) {
        median = Math.floor(numbers.length / 2);
        medianNumber = numbers[median];
    }   else {
        median = numbers.length / 2;
        medianNumber = (numbers[median]+ numbers[median-1] / 2);
}
return medianNumber;
};
console.log(getMedian(1, 2, 3, 4, 5));


//Function #5
const filterEvenNumbers = (...numbers) => {
    const evenNumber = numbers.filter(number => {
        return number % 2 !== 0;
    });
  return evenNumber; 
};
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7));


//Function #6
const countPositiveNumbers = (...numbers) => {
    const positiveNumber = numbers.filter(number => {
        return number > 0;
    });
  return positiveNumber; 
};
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

//Function #7
 const getDividedByFive = (...numbers) => {
    const dividedByFiver = numbers.filter(number => {
        return number % 5 === 0;;
    });
  return dividedByFiver; 
};
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//Function #8
const replaceBadWords= (string) => {
const badWords = /fuck|shit/gi;
    return string.replace(badWords, '****')
};
console.log(replaceBadWords("Are you fucking kidding?"));


//Function #9
const devideByThree = (word)  => {
let devided = [];
for ( let i = 0; i < word.length; i+=3 ) {
    devided.push(word.substring(i, i+3));
}
return devided;
};
console.log (devideByThree('Commander'));

document.writeln(`
1) Result of the  random array: ${getRandomArray(7, 5, 25)}<br>
2) Result of the  moda: ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 3, 3, 3, 3, 2)}<br>
3) Result of the average: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
4) Result of the median: ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
5) Result of the even numbers: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}<br>
6) Result of the positive numbers: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}<br>
7) Result of the divided by five : ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
8)Result of the replace bad words : ${replaceBadWords("Are you fucking kidding?")}<br>
9)Result of the divided by Three: ${devideByThree("Commander")} <br>
10) NONE
`);
