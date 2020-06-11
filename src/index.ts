// const files = require.context('./', true, /^\.\/.+\/.+\.js$/);
// const modules = {};

// files.keys().forEach((key) => {
//   let match = key.match(/\.\/(.+)\/(.+)\.js/);

//   if (!match.length) {
//     throw key;
//   }

//   if (match[2] === 'index') {
//     modules[match[1]] = files(key).default;
//   } else {
//     modules[match[2]] = files(key).default;
//   }
// });

// export default modules;

import aa from './aa';

console.log(aa);

/**
 * fafaf
 * @param aaa afaf
 * @example aaa=>aaa
 */
export function aaa(aaa: string) {
  console.log(aaa);
}

aaa('sss');

// console.log(aa('aaa'));

export default {
  // aa,
};
