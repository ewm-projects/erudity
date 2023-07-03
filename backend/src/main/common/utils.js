import path, { sep } from "path";
import { fileURLToPath } from "url";

const getDirPath = (dirName) => {
  // src: https://codingbeautydev.com/blog/javascript-dirname-is-not-defined-in-es-module-scope/
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const currentPath = __dirname;
  const currentPathAsArray = currentPath.split(sep);
  const targetDirArrayIndex = currentPathAsArray.lastIndexOf(dirName);
  const targetDirArray = currentPathAsArray.slice(0, targetDirArrayIndex + 1);
  const targetDirPath = targetDirArray.join(sep);

  // ex: getDirPath("src") = /home/erudity/backend/src
  return targetDirPath;
};

// src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomFromArray = (arr) => arr[getRandomInt(arr.length)];
const getRandomIntBetween = (min, max) =>
  Math.floor(Math.random() * (max + 1)) + min;
const getRandomDate = (start) => {
  const min = start ?? new Date(2000, 0, 1);
  const max = Date.now();
  return new Date(+min + Math.random() * (max - min));
};

const generateRandomItems = (arr, amount) => {
  const limit = Utility.getRandomIntBetween(1, amount);
  const items = new Set();

  for (let i = 0; i < limit; i++) {
    let item = "";

    do {
      item = Utility.getRandomFromArray(arr);
    } while (items.has(item));

    items.add(item);
  }

  return Array.from(items);
};

const Utility = {
  getDirPath,
  getRandomInt,
  getRandomDate,
  getRandomFromArray,
  generateRandomItems,
  getRandomIntBetween,
};

export default Utility;
