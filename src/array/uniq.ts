import uniqWith from './uniqWith';

/**
 * 数组去重
 * @param array 要处理的数组
 * @returns 返回新数组
 * @example
 * 
 * ```ts
 * uniq([2, 1, 2]) => [2, 1]
 * ```
 * 
 */
function uniq(array: any[]): any[] {
  return uniqWith(array, (a, b) => {
    return a === b;
  });
}

export default uniq;
