const path = require('path');
const shell = require('shelljs');

// 切换路径
shell.cd(path.resolve(__dirname, '..'));
// 清空
shell.rm('-rf', 'lib');
// 打包
shell.exec('tsc');
