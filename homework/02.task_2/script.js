let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
//+16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
function nameStartingWithT(arr) {
  return arr.filter((obj) => obj.name && obj.name.startsWith("t"));
}
const arrayT = nameStartingWithT(arr2);
console.log(arrayT);

//+17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
function nameStartingEndingWithT(arr) {
  return arr.filter(
    (obj) => obj.name && obj.name.startsWith("t") && obj.name.endsWith("t")
  ).length;
}
const arrayTt = nameStartingEndingWithT(arr2);
console.log(arrayTt);

//+18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
function nameStartingEndingWithTKey(arr) {
  let sum = 0;
  arr.filter((obj) => {
    if (obj.name && obj.name.startsWith("t") && obj.name.endsWith("t"))
      sum += obj.key;
  });
  return sum;
}
const arrayTtk = nameStartingEndingWithTKey(arr2);
console.log(arrayTtk);

//+19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// function nameEndingWithE(arr) {
//   arr.filter((obj) => {
//     if (obj.name && obj.name.endsWith("e")) obj.name = "SuperDev";
//   });
//   return arr;
// }
// const arrayE = nameEndingWithE(arr2);
// console.log(arrayE);

// +20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
function findMaxLength(arr) {
  let object = arr.reduce((acc, obj) => {
    if (obj.name.length > acc.name.length) {
      return obj;
    } else {
      return acc;
    }
  });
  return object.key;
}
const arrayMaxK = findMaxLength(arr2);
console.log(arrayMaxK);

// +21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
function findMaxLengthSquare(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let nameIndex = arr.reduce((acc, obj, index) => {
    if (obj.name.length > arr[acc].name.length) {
      return index;
    } else {
      return acc;
    }
  }, 0);
  return nameIndex * nameIndex;
}
const arrayMax = findMaxLengthSquare(arr2);
console.log(arrayMax);

//+22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
function findLength4(arr) {
  return arr.filter((obj) => obj.name && obj.name.length == 4);
}
const array4 = findLength4(arr2);
console.log(array4);
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
function findNameOfLargestKey(arr) {
  let largestKey = arr[0].key;
  let nameOfKey = arr[0].name;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].key > largestKey) {
      largestKey = arr[i].key;
      nameOfKey = arr[i].name;
    }
  }
  return nameOfKey;
}
const namekey = findNameOfLargestKey(arr2);
console.log(namekey);
// +24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
function findIndexWithL(arr) {
  let list = [];

  arr.forEach((obj, index) => {
    if (obj.name && obj.name.toLowerCase().split("l").length - 1 === 2) {
      list.push(index);
    }
  });

  return list;
}
const findll = findIndexWithL(arr2);
console.log(findll);

// +25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
function findIndexWithT(arr) {
  let list = [];

  arr.forEach((obj, key) => {
    if (obj.name && obj.name.toLowerCase().split("t").length - 1 === 2) {
      list.push(obj.key);
    }
  });

  return list;
}
const findtt = findIndexWithT(arr2);
console.log(findtt);
