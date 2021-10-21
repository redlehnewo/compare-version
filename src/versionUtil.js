/**
 * Compares the 2 version strings.
 * If version1 > version2 return 1
 * If version1 < version2 return -1
 * otherwise return 0
 *
 * @param {String} versionA
 * @param {String} versionB
 *
 * @returns {Number}
 */
export const compare = (versionA, versionB) => {
  const numArrayA = versionA?.split(".").map(Number);
  const numArrayB = versionB?.split(".").map(Number);
  const arrLength = Math.max(numArrayA.length, numArrayB.length);

  for (let i = 0; i < arrLength; i++) {
    const numA = numArrayA[i] || 0;
    const numB = numArrayB[i] || 0;
    if (numA === numB) continue;
    if (numA > numB) return 1;
    else return -1;
  }

  return 0;
};
