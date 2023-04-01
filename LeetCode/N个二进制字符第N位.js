/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  let s = '0';
  for(let index = 1; index < n; ++index) {
      const s2 = s.split("").map((item) => {
            return Number(!Number(item))
      }).reverse().join('');
      s = s + '1' + s2;

      console.log('s', s);
  }
  return s.charAt(k - 1);
};

// findKthBit(3, 1);

// n >> 1 === Math.floor(n / 2) 
const invert = (bit) => bit === '0' ? '1' : '0';

var findKthBit2 = function(n, k) {
    if (k == 1) {
        return '0';
    }
    const mid = 2 ^ (n - 1);
    if (k == mid) {
        return '1';
    } else if (k < mid) {
        return findKthBit(n - 1, k);
    } else {
        k = mid * 2 - k;
        return invert(findKthBit(n - 1, k));
    }
};

console.log(findKthBit2(3 ,2));

