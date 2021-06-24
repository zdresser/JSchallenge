const findSum = function(array) {
  let sum = array.reduce((acc, val) => acc + val); 
  return sum;
};


const findFrequency = function(array) {
  const findFrequency = function(array) {  
  let obj = {}; //stores item and count from array in func below
  let result = {
    'most': '',
    'least': '' 
  }; 

  for (let i=0; i<array.length; i++) {//count occurences and store in obj
    if (!obj[array[i]]) { //check for key in obj
      obj[array[i]] = 0;

    }
    obj[array[i]] += 1;//increment count in obj    
  };
  
  result['most'] = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  result['least'] = Object.keys(obj).reduce((a, b) => obj[a] < obj[b] ? a : b);
  
  return result;  
};



const isPalindrome = function(str) {
  let newStr = '';
  for (i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return (str.toLowerCase() === newStr.toLowerCase());
};



const largestPair = function(array) { 
  let largest = 0;
  let temp = 0;

  for (i = 0; i < array.length - 1; i++){//could use forEach
    temp = array[i] * array[i+1];
    if (temp > largest){
      largest = temp;
    }    
    temp = 0;
  }
  return largest;
}  


const removeParenth = function(str) {
  let start = 0;
  let end = 0;

  for (i = 0; i < str.length; i++){
    if (str[i] === '('){
      start = i;
    }
    if (str[i] === ')'){
      end = i;
    }
  };
  return str.slice(0,start) + str.slice(end + 1);
};


const scoreScrabble = function(str) {
  let totalScore = 0;
  const scores = {'a':1, 'b': 3, 'c':3, 'd':2, 'e':1, 'f':4, 'g':2, 'h':4, 'i':1, 'j':8, 'k':5, 'l':1, 'm':3, 'n':1, 'o':1, 'p':3, 'q':10, 'r':1, 's':1, 't':1, 'u':1, 'v':4, 'w':4, 'x':8, 'y':4, 'z':10};
  let word = str.toLowerCase();

  for (i = 0; i < str.length; i++){
    totalScore += scores[word[i]];
  };
  return totalScore;
};
