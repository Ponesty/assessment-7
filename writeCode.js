//#1 Sum Zero
const addToZero = arr => {
    let boo = false;
    for(let i =0; i<arr.length;i++){
        for(let j = i+1; j<arr.length;j++){
            if(arr[i]+arr[j] === 0){
                boo = true;
            }

        }
    }
    return boo;
}

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1,2,3]));
console.log(addToZero([1,2,3,-2]),"\n");

//#2 Unique Characters
const hasUniqueChars = word => {
    let boo = true;
    for(let i=0; i<word.length; i++){
        for(let j= i+1; j<word.length; j++){
            if(word[i] === word[j]){
                boo = false;
                
            }

        }   
    }
    return boo;
}
console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'),"\n");

//#3 Pangram Sentence

const isPangram = sentence => {
    let boo = true;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    sentence = sentence.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (sentence.indexOf(alphabet[i]) < 0) {
            boo = false;
        }
    }
   
    return boo;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"),"\n");

//#4 Longest Word

const findLongestWord = arr =>{
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
        }
    }
    return max;
}

console.log(findLongestWord(['hi','hello']));