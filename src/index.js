/**
 * Принимает два объекта, должна вернуть или true или false, если объекты идентичны внутри, возвращает
 * true, если есть различие, false. То есть проверяет каждое свойство, вне зависимости от вложенности,
 * делаем через рекурсию(а других вариантов и нет)
 */

export const deepEqual = (obj, anotherObject) => {
  let objEntries = Object.entries(obj);
  let anotherObjectEntries = Object.entries(anotherObject);

  if (objEntries.length !== anotherObjectEntries.length) return false;

  return objEntries.every(([key, value], index) => {
    let anotherKey = anotherObjectEntries[index][0];
    let anotherValue = anotherObjectEntries[index][1];

    if (typeof value === 'object') {
      return deepEqual(value, anotherValue);

    } else if (key === anotherKey && value === anotherValue) {
      return true;

    } else {
      return false;
    }
  });

};

/**
 * Принимает объект, возвращает его глубокую копию, то есть ни одно свойство
 * не является ссылочным у другого объекта, точно возвращает новое.
 * Если это массив, возвращает новый массив(map) и если элемент массива не простого типа,
 * то тогда в рекурсию. С объектом также. Поскольку массив при typeof возвращает object, чтобы
 * их различить берем метод Array.isArray и он на массивах вернет тру
 */
export const deepCopy = (obj) => {
  if (Array.isArray(obj)) {
    let copiedArray = obj.map((item) => {
      if (Array.isArray(item) || typeof item === 'object') {
        return deepCopy(item);
      } else {
        return item;
      }
    });
    return copiedArray;
  } else if (typeof obj === 'object') {
    let copiedObject = {};
    let objEntries = Object.entries(obj);
    objEntries.forEach(([key, value]) => {
      if (Array.isArray(value) || typeof value === 'object') {
        copiedObject[key] = deepCopy(value);
      } else {
        copiedObject[key] = value;
      }
    });
    return copiedObject;
  }


};

/**
 * Мы передаем объект, и должны вернуть массив уникальных названий свойств
 * То есть если у нас объект { name: { bohdan: { name: 'test' } } } вернет ['name', 'bohdan']
 */
export const getAllObjectKeys = (obj) => {
  let keys = [];
  Object.entries(obj).reduce((accum, [key, value]) => {
    if (typeof value === 'object') {
      return keys.push(...getAllObjectKeys(value));
    } else {
      return keys.push(key);
    }
  }, []);
  let uniqueKeys = [...new Set(keys)]
  return uniqueKeys;
};