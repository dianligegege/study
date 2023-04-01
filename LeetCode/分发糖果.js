/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  let sum = 0;
  let n = 1;
  let valNow = n;
  ratings.forEach((item, index) => {
      if (index === 0) {
          sum = n;
      } else {
          if (item > ratings[index -1]) {
              valNow += 1;
              sum += valNow;
          } else if (item <= ratings[index + 1] && item <= ratings[index - 1]) {
              valNow = 1;
              sum += valNow;
          } else {
              valNow -= 1;
              if (valNow <= 0) {
                sum -= valNow ;
                valNow = 1;
              } else {
                sum += valNow;
              }
          }
      }
      console.log('valNow', valNow);
  });
  return sum;
};

console.log(candy([1,2,1]));