import { deepCopy, deepEqual, getAllObjectKeys } from '././index.js';

const obj1 = {
  name: 'Andrey',
  age: 35,
  pets: true,
  hobbies: {
    diving: false,
    games: true,
    movies: {
      scyFi: true,
      horror: false
    }
  }
};

const obj2 = {
  name: 'Andrey',
  age: 35,
  pets: true,
  hobbies: {
    diving: false,
    games: true,
    movies: {
      scyFi: true,
      horror: false,
      bla: true
    }
  }
};


// console.log(deepEqual(obj1, obj2))
const arr = [1, 5, 6, [88, 99]];
const obj3 = deepCopy(obj1);
// console.log(obj3);
// console.log(obj1 === obj3);

const obj4 = deepCopy(arr);
// console.log(obj4);
// console.log(obj4 === arr);

const obj5 = {
  name: {
    firstName: 'Name1',
    lastName: 'Name2',
    fullName: {
      name: 'Name3',
      lastName: 'Name4',
    }
  },
  pets: true
};

const obj6 = {
  notBla: 'test',
  name: 'bohdam',
  obj: { bla: { notBla: 'test' } },
};

console.log(getAllObjectKeys(obj5));
console.log(getAllObjectKeys(obj6));