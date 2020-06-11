import uniqWith from './uniqWith';

/**
 * 数组去重，每一个数组的元素调用 iteratee 产生唯一性计算标准
 *
 * @param array 要处理的数组
 * @param iteratee 迭代函数
 * @returns 返回新数组
 * @example
 * 
 * ```ts
 * uniqBy([2.1, 1.2, 2.3], Math.floor) => [2.1, 1.2]
 * ```
 * 
 */
function uniqBy(array: any[], iteratee: Function | string): any[] {
  return uniqWith(array, (a, b) => {
    let aKey = typeof iteratee === 'function' ? iteratee(a) : a[iteratee];
    let bKey = typeof iteratee === 'function' ? iteratee(b) : b[iteratee];

    return aKey === bKey;
  });
}

export default uniqBy;
