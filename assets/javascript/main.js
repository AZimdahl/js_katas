(function(){
    function sum(firstNum, secondNum) {
        return (firstNum + secondNum);
    }
    console.log(sum(5,9));

    function average(numArray) {
        let total = 0;
        for (let i = 0; i < numArray.length; i++) {
            total += numArray[i];
        }
        let avg = total/numArray.length;
        return avg;
    }
    console.log(average([1, 2, 3, 59, 117]))

    function greaterThan(arg1, arg2) {
        if (arg1>arg2)
            return true;
        else
            return false;
    }
    console.log(greaterThan(3,4))

    function secondLargest(arr) {
        let arrayMax = Math.max(...arr);
        arr.splice(arr.indexOf(arrayMax));
        let secondMax = Math.max(...arr);
        return secondMax;
    }
    console.log(secondLargest([1, 4, 5, 8]))

    function containsVowel(someString) {
        if (someString.indexOf("a") >= 0 || 
            someString.indexOf("e") >= 0 ||
            someString.indexOf("i") >= 0 ||
            someString.indexOf("o") >= 0 ||
            someString.indexOf("u") >= 0
            ) {
            return true
        }
        else {
            return false
        }
    }
    console.log(containsVowel("wow"))

    function piglatin(someString) {
        someString = someString.toLowerCase();
        let arr = someString.split(" ");
        for(let i = 0; i < arr.length; i++) {
            let word = arr[i].split("");
            let firstLetter = word.shift();
            word.push(firstLetter+"ay");
            word = word.join("");
            arr[i] = word;
        }
        let plString = arr.join(" ");
        return plString;
    }
    console.log(piglatin("Nice to meet you"));

    function longestWord (someString) {
        let longestWord = "";
        let arr = someString.split(" ");
        for(let i = 0; i < arr.length; i++) {
            let word = arr[i].split("");
            if (word.length > longestWord.length)
            {
                word = word.join("");
                longestWord = word;
            }
        }
        return longestWord;
    }
    console.log(longestWord("The quick brown fox jumps over the lazy dog, and did a bamboozle"))

    function weave (str, n) {
        
    }
})()