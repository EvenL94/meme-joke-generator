// Replace contents to empty string to set initial status of a generator
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
