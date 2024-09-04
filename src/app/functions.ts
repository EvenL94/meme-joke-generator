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
