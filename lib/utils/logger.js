"use strict";

const printArgs = args => args.forEach(arg => console.log(arg));

class Logger {
  static info(...args) {
    if (process.env.NODE_ENV !== "production") {
      printArgs(args);
    }
  }

  static exception(...args) {
    printArgs(args);
  }
}

module.exports = Logger;
