var colors = require('colors');
var shell = require("shelljs");
require('shelljs/global');
const child_process = require('child_process');

function createTermMenu() {
    var List = require('term-list');
    var menu = new List({ marker: '>'.red + ' ', markerLength: 2 });
    menu.on('keypress', function(key, index) {
      if (key.name === 'return') {
        if (index < 0) {
          return;
        }
        openSoftWare(index)
      } else if (key.name === 'q') {
        return menu.stop();
      }
    });
  
    menu.add(-1, '请选择你想要打开的软件'.green);
    menu.add(-2, Array(60).join('-'));
    menu.add(1, '1. 微信开发工具');
    menu.add(2, '2. Mongo客户端');
    menu.add(-3, Array(60).join('-'));
    menu.add(-4, '归来饱饭黄昏后，不脱蓑衣卧月明。'.red);
    menu.start();
    menu.select(1);
  }

  function openSoftWare(index) {
    if (index === 1) {
      cd('/home/yt00658/software/nwjs-sdk-v0.25.4-linux-x64/')
      child_process.exec("./nw &");
    } else if (index === 2) {
      cd('/home/yt00658/software/robo3t-1.2.1-linux-x86_64-3e50a65/bin/')
      child_process.exec("./robo3t &");
    }
  }

  function main() {
    createTermMenu()
  }

  main();