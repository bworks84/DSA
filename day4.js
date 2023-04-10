/* 
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once in ransomNote. 

1. If ransomNote does not equal empty string, For loop magazine, remember character
2. Inner for loop ransomNote, inside of outer loop, check if character from magazine
  matches any character from ransomNote. If it does, remove character from ransomNote and magazine and place into individual arrays
3. 
*/

function canConstruct(ransomNote, magazine) {
  for (const char of magazine) {
    console.log("magazine:", magazine);
    console.log("ransomNote:", ransomNote);
    ransomNote = ransomNote.replace(char, "");
    console.log("ransomNote:", ransomNote);
  }
  if (!ransomNote) return true;
  else return false;
}

/* 
for of loop - executes a loop that operates on a sequence of values sourced from an iterable object. 
 1. for every char of magazine, ransomNote will replace that char (if it is found within ransomNote) with an empty string
 2. If ransomNote returns a falsey value, all letters have been replaced with empty string, meaning the ransomNote has been created with the letters found in the magazine variable, so return true
 3. Else return false
*/

// function canConstruct(ransomNote, magazine) {
//   let ransomArray = ransomNote.split("");
//   let magazineArray = magazine.split("");

//   let ransomMatch = [];
//   let magazineMatch = [];
//   let offChars = [];
//   let steps = 0;

//   if (ransomArray !== "") {
//     for (let i = 0; i <= magazineArray.length - 1; i++) {
//       steps++;
//       console.log("Steps:", steps);
//       let magChar = magazineArray[i];
//       console.log("ransomArray:", ransomArray);
//       console.log("magazineArray:", magazineArray);
//       console.log("magChar:", magChar);
//       for (let j = 0; j <= ransomArray.length - 1; j++) {
//         let ransomChar = ransomArray[j];
//         console.log("ransomArray:", ransomArray);
//         console.log("RansomChar", ransomChar);
//         if (magChar !== ransomArray[j]) {
//           break;
//           // console.log("magChar:", magazineArray[i]);
//           // console.log("ransomChar here:", ransomChar);
//           // offChars.splice(magChar, 1);
//           // console.log("offChars:", offChars);
//         } else if (magChar === ransomArray[j]) {
//           //console.log("True");
//           magazineArray.splice(magChar, 1);
//           ransomArray.splice(ransomChar, 1);
//           //console.log("Magazine Array:", magazineArray);
//           magazineMatch.push(magChar);
//           ransomMatch.push(ransomChar);
//           console.log("magazineMatch:", magazineMatch);
//           console.log("ransomMatch:", ransomMatch);
//           break;
//         }
//       }
//     }
//   }
//   return true;
// }

console.log(canConstruct("ac", "acb"));
