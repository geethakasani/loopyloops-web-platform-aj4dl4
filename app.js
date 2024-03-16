// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var Kalvian_1 = 'Krishna';
console.log("The driver's name is", Kalvian_1);
var Kalvian_2 = 'Arjuna';
console.log("The navigator's name is", Kalvian_2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var Kalvian1_len = Kalvian_1.length;
var Kalvian2_len = Kalvian_2.length;
console.log(Kalvian2_len);
if (Kalvian1_len > Kalvian2_len) {
  console.log(
    'The driver has the longest name, it has',
    Kalvian1_len,
    'characters'
  );
} else if (Kalvian2_len > Kalvian1_len) {
  console.log(
    'It seems that the navigator has the longest name, it has',
    Kalvian2_len,
    'characters'
  );
} else {
  console.log(
    'Wow, you both have equally long names,',
    Kalvian1_len,
    Kalvian2_len,
    'characters'
  );
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
function checkVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelIndexes = [];
  let containsVowels = false;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        containsVowels = true;
        vowelIndexes.push(i);
        break;
      }
    }
  }

  if (containsVowels) {
    console.log(str);
    vowelIndexes.forEach((index) => {
      console.log(str[index], index);
    });
  } else {
    console.log('No vowels');
  }
}
checkVowels('geetha123');
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function countUpperCaseLowerCase(str) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char >= 'A' && char <= 'Z') {
      upperCaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCaseCount++;
    }
  }

  console.log('Number of uppercase characters:', upperCaseCount);
  console.log('Number of lowercase characters:', lowerCaseCount);
}
console.log(countUpperCaseLowerCase('buNNy'));
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var driverName = Kalvian_1.toUpperCase().split('').join(' ');
console.log("Driver's name characters:", driverName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var reversedNavigatorName = Kalvian_2.split('').reverse().join('');
console.log("Navigator's name characters in reverse:", reversedNavigatorName);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
var mergedNames = Kalvian_2 + ' ' + Kalvian_1;
console.log('Merged names:', mergedNames);
var switchedNames = Kalvian_2 + ' ' + Kalvian_1;
console.log('Switched names:', switchedNames);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Kalvian_1 < Kalvian_2) {
  console.log("The driver's name goes first.");
} else if (Kalvian_2 < Kalvian_1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

const wordCount = loremIpsumText.split(/\s+/).length;
console.log('Number of words:', wordCount);

const etCount = loremIpsumText.match(/\bet\b/g).length;
console.log("Number of times 'et' appears:", etCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
const phraseToCheck = 'A man, a plan, a canal, Panama!';
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(`"${phraseToCheck}" is a palindrome:`, isPalindrome(phraseToCheck));
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
