// export const letterCounter = () => {
//   console.log('letterCounter');
//   return null;
// };

// interface ILetterCounter {
//   letter: string;
//   occurences: number;
// }

export const letterCounter = (input) => {
  let arr = input.split('');
  let newArr = arr.reduce((obj, letter) => {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
    return obj;
  }, {});

  console.log(newArr);
  return newArr;
};
