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

const Utility = {
  getDirPath,
};

export default Utility;
