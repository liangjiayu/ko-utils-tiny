import uniqWith from './uniqWith';

/**
 * 数组去重
 * @param {Array} array
 * @example
 *
 * uniq([2, 1, 2]) => [2, 1]
 */
function uniq(array = []) {
  return uniqWith(array, (a, b) => {
    return a === b;
  });
}

export default uniq;
