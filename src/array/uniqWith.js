/**
 * 数组去重，数组每一个元素都接受一个 comparator 函数做对比
 *
 * @param {Array} array
 * @param {Function} comparator 对比函数，传入两个参数 (value , otherValue)，return true为去重
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * uniqWith(objects, isEqual) => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 *
 */
function uniqWith(array = [], comparator) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (typeof comparator === 'function' && comparator(array[i], array[j])) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}

export default uniqWith;
