// #1. Check Array Input
// Write a JavaScript function to check whether an input is an array or not.
{
  let isArray = function (input) {
    if (toString.call(input) === "[object Array]") {
      return true;
    }
    return false;
  };
  console.log(isArray("W3Exercises"));
  console.log(isArray([1, 2, "s"]));
}

// #2. Clone Array
// Write a JavaScript function to clone an array.
{
  let arr1 = [1, 2, 3, 4];
  let arr2 = [...arr1];
}

// #3. First Elements of Array
// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
{
  let n = 15;
  let arr = [1, 2, 3, 4, 5, 566, 6, "asp", "#"];
  let result = arr.splice(0, n);
  console.log(result);
}

// #4. Last Elements of Array
// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
{
  let n = 9;
  let arr = [1, 2, 3, 4, 5, 566, 6, "asp", "#"];
  let len = arr.length;
  // let result = arr.splice(len-n,len);
  // let result = arr.splice(deleting start,deleting count);
  let result = arr.slice(-n);
  console.log(result);
}

// #6. Insert Dashes Between Evens
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
{
  let n = 245274765463525444422;
  let strPrev = n.toString();

  //   let isPrevEven = false;
  //   let arr = strPrev.split("");
  //   arr.forEach(function (num , index) {
  //     if (parseInt(num % 2) == 0) {
  //       if (isPrevEven) {
  //         arr[index]= '-'+ num;
  //       }
  //       isPrevEven = true;
  //     }
  //     else isPrevEven = false;
  //   });
  //   let strr = arr.join("");
  //   console.log(strr);

  let result = strPrev[0];
  let len = strPrev.length;
  for (let i = 1; i < len; i++) {
    if (parseInt(strPrev[i - 1]) % 2 === 0 && parseInt(strPrev[i]) % 2 === 0) {
      result += "-";
    }
    result += strPrev[i];
  }
  console.log(result);
}

// #7. Sort Array
// Write a JavaScript program to sort the items of an array.
{
  let arr = [1, 2, 6, 4, 8, 5, 9, 3, 9, 7, 0];
  //Merge sort
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length) / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    let merged = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        merged.push(left.shift());
      } else merged.push(right.shift());
    }
    return [...merged, ...left, ...right];
  }
  console.log(mergeSort(arr));

  console.log(arr);

  //Quick sort
  function quickSort(arr) {
    let len = arr.length;
    if (len <= 1) return arr;

    let pivot = arr[0];
    let left = arr.slice(1).filter((x) => x < pivot);
    let right = arr.slice(1).filter((x) => x >= pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  console.log(quickSort(arr));
}

// #8. Most Frequent Array Item
// Write a JavaScript program to find the most frequent item in an array.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];
  let freqMap = new Map();
  let len = arr.length;
  let maxFreq = 1;
  for (let i = 0; i < len; i++) {
    let elem = arr[i];
    if (freqMap.has(elem)) {
      let newFreq = freqMap.get(elem) + 1;
      if (maxFreq < newFreq) {
        maxFreq = newFreq;
      }
      freqMap.set(elem, newFreq);
    } else {
      freqMap.set(elem, 1);
    }
  }
  console.log(maxFreq);
}

// #9. Swap Case in String
// Write a JavaScript program that accepts a string as input and swaps the case of each character.
{
  let str = "fdsFDS";
  let len = str.length;
  let result = "";
  for (let i = 0; i < len; i++) {
    let patternLowerCase = /^[a-z]/;
    let patternUpperCase = /^[A-Z]/;
    if (patternLowerCase.test(str[i])) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  console.log(result);
}

// #10. Print Nested Array Elements
// Write a JavaScript program that prints the elements of a nested array using nested loops.
{
  let arr = [
    1,
    2,
    3,
    [2, 3, 4, [12, 34, 56], 5],
    [34, 56, "app"],
    ["asd"],
    "as",
  ];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (toString.call(arr[i]) === "[object Array]") {
      arr[i].forEach(function (elem) {
        // console.log(elem);
      });
      break;
    }
    // console.log(arr[i]);
  }
  //using flat
  let flatArr = arr.flat(2);
  //    flatArr.forEach(elem => console.log(elem));
}

// #11. Sum of Squares in Array
// Write a JavaScript program to find the sum of squares of a numerical vector.
// #14. Remove Duplicates
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
//Hashmaps use krke hojayega

// #16. Find Leap Years in Range
// Write a JavaScript program to find the leap years in a given range of years.
{
  let yearRange = [1999, 2025];
  for (let i = yearRange[0]; i <= yearRange[1]; i++) {
    if (i % 4 === 0) {
      if (i % 100 === 0) {
        if (i % 400 === 0) {
          console.log(i);
        }
      } else console.log(i);
    }
  }
}

// #17. Shuffle Array
// Write a JavaScript program to shuffle an array.

// #18. Binary Search
// Write a JavaScript program to perform a binary search on a sorted array.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let searchElement = 5;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + (end - start) / 2;
    if (arr[mid] == searchElement) {
      console.log(mid + 1);
      break;
    } else if (arr[mid] > searchElement) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

// #19. Sum of Arrays by Index
// Write a JavaScript program to compute the sum of each individual index value in two given arrays.
// #21. Flatten Nested Array
// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// #22. Union of Two Arrays
// Write a JavaScript program to compute the union of two arrays.
// #23. Difference Between Arrays
// Write a JavaScript function to find the difference between two arrays.
// #24. Remove Falsy Values
// Write a JavaScript function to remove null, 0, "", false, undefined, and NaN values from an array.

// #25. Sort Objects by Title
// Write a JavaScript function to sort an array of objects by a specific property (e.g., title).
{
  var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245,
    },
  ];

  library.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    else return 0;
  });

  console.log(library);
}

// #26. Find Pair with Target Sum
// Write a JavaScript program to find a pair of elements in an array whose sum equals a specific target number.
{
  let arr = [10, 20, 30, 40, 50, 60, 70],
    target = 50;
  let map = new Map();
  arr.forEach(function (num) {
    let toFind = target - num;
    if (map.has(toFind)) {
      console.log(
        "We can have " + target + " as sum by numbers " + num + " and " + toFind
      );
    }
    map.set(num, (map.get(num) || 0) + 1);
  });
}

// #30. Merge Arrays Without Duplicates
// Write a JavaScript function that merges two arrays and removes all duplicate elements.
{
  let array1 = [1, 2, 3];
  let array2 = [2, 30, 1];
  let i = 0,
    j = 0;
  let len1 = array1.length;
  let len2 = array2.length;
  let result = [];
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  while (i < len1 && j < len2) {
    if (array1[i] < array2[j]) {
      result.push(array1[i++]);
    } else {
      result.push(array2[j++]);
    }
  }
  while (i < len1) {
    result.push(array1[i++]);
  }
  while (j < len2) {
    result.push(array2[j++]);
  }
  console.log(result);

  let merged = [...new Set([...array1, ...array2])];
  console.log(merged);
}

// #31. Remove Specific Element
// Write a JavaScript function to remove a specific element from an array.
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 22, 2, 3];
  let element = 5;
  let result = arr.filter(function (num) {
    return num !== element;
  });
  console.log(result);
}

// #34. Nth Largest Element
// Write a JavaScript function to get the nth largest element from an unsorted array.
// #35. Random Array Item
// Write a JavaScript function to get a random item from an array.
{
  let arr = [1, 22, 3, 4, 5];
  function generateRandomNumber(arr) {
    let len = arr.length;
    let index = Math.floor(Math.random() * len);
    console.log(arr[index]);
  }
  generateRandomNumber(arr);
  generateRandomNumber(arr);
}

// #38. Move Array Element
// Write a JavaScript function to move an array element from one position to another.
// #39. Filter Array Values
// Write a JavaScript function to filter false, null, 0, and blank values from an array.
// #40. Generate Integer Range Array
// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
// #45. Unique Values in Array
// Write a JavaScript program to find all the unique values in a set of numbers.

// #46. Permutations of Array Elements
// Write a JavaScript program to generate all permutations of an array's elements (including duplicates).
{
  let arr = [1, 2, 3];
  // permutations = arr.length !
  function permute(arr) {
    let result = [];

    function helper(current , remaining)
    {
      if(remaining == 0)
      {
        result.push(current);
        return;
      }
      let len = remaining.length;
      for(let i=0;i<len;i++)
      {
        const newCurrent = current.concat()
      }
    }
  }
}

// #47. Remove Falsey from Object or Array
// Write a JavaScript program to remove all false values from an object or array.




// #48. Check All Numbers Prime
// Write a JavaScript program that takes an array of integers and returns false if every number is not prime; otherwise, return true.





// #50. Sum Numbers in Mixed Array
// Write a JavaScript program that takes an array with mixed data types and calculates the sum of all numbers.




// #51. Check Factor Chain
// Write a JavaScript program to check if an array is a factor chain or not (each element is a factor of the next).



// #53. Count Arrays Inside Array
// Write a JavaScript program to count the number of arrays inside a given array.
