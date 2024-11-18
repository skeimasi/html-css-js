# Learning Javascript

**Refrences:** \
[https://www.thatjsdude.com](https://www.thatjsdude.com/interview/js1.html)\
[https://www..com](https://www..com)

## Knowledge

- [Var vs Let vs Const](var-vs-let-vs-const.md)
- [Promisses](promise/promise.md)
- [Regular functions vs arrow functions](regular-vs-arrow-functions.md)
- [DOM update mechanism](dom-vs-virtual-dom.md)
- [Deep copy vs shallow copy](deep-copy-vs-shallow-copy.md)
- [Spread operator vs Rest operator and use cases](spread-operator-vs-rest-operator.md)
- [Refrence copy vs value copy](#8-refrence-copy-vs-value-copy)
- [Proxy and Reflect](#9-proxy-and-reflect)
- [Prototype](#10-prototype)
## Challenges

- [First non repeating char](#1-first-non-repeating-char)
- [Remove duplicate char](#2-remove-duplicate-char)
- [Find Missing Number](#3-find-missing-number)
- [Find Indices of Two Numbers that Sum to Target](#4-find-indices-of-two-numbers-that-sum-to-target)


### 1. First Non Repeating Char

[Description](descriptions.md)

```js
function firstNonRepeatChar(str) {
  var len = str.length,
    char,
    charCount = {};
  for (var i = 0; i < len; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else charCount[char] = 1;
  }
  for (var j in charCount) {
    if (charCount[j] == 1) return j;
  }
}


> firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
 = "f"
```

## 2. Remove Duplicate Char

[Description](descriptions.md)

```js
function removeDuplicateChar(str){
  var len = str.length,
      char,
      charCount = {},
      newStr = [];
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}

> removeDuplicateChar('Learn more javascript dude');
  = "Lnmojvsciptu"

```

## 3. Find Missing Number

[Description](descriptions.md)

```js
function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

> findMissingNumber([3, 0, 1]);
  = 2
> findMissingNumber([9,6,4,2,3,5,7,0,1]);
  = 8
```

## 4. Find Indices of Two Numbers that Sum to Target

[Description](descriptions.md)

```js
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

> twoSum([2, 7, 11, 15], 9);
  = [0, 1]
> twoSum([3, 2, 4], 6);
  = [1, 2]

```
