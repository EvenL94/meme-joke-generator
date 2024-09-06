/**
 * Replace contents to empty string to set initial status of a generator
 *
 * @param set key set with default values
 * @returns key set with the same keys but all values in ""
 */
export function emptyContentSet(set: { [key: string]: string }): {
  [key: string]: string;
} {
  const newObj: { [key: string]: string } = {};
  for (const key in set) {
    if (set.hasOwnProperty(key)) {
      newObj[key] = "";
    }
  }

  return newObj;
}

/**
 * replace filled contents with scripts for copy
 *
 * @param replacements user input values
 * @param content default values
 * @param scripts preset template of scripts
 * @returns scripts with replacements fill if not empty, other wise fill with default values
 */
export function replaceScripts(
  replacements: { [key: string]: string },
  content: { [key: string]: string },
  scripts: string
): string {
  let result = scripts;

  for (const key in replacements) {
    if (replacements.hasOwnProperty(key)) {
      const placeholder = `\\(${key}\\)`;
      const value = replacements[key] === "" ? content[key] : replacements[key];

      result = result.replace(new RegExp(placeholder, "g"), value);
    }
  }

  return result;
}
