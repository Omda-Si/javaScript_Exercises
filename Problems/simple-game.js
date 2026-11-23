function solve(str) {
  if (str === "") return [[]];

  const queue = [[str, []]];
  let solutions = [];
  let shortestLength = Infinity;

  while (queue.length > 0) {
    const [currentStr, path] = queue.shift();

    if (path.length >= shortestLength) continue;

    const n = parseInt(currentStr[0], 10);

    for (let k = 1; k <= n; k++) {
      if (k === currentStr.length && k === n) {
        const newPath = [...path, k];

        if (newPath.length < shortestLength) {
          shortestLength = newPath.length;
          solutions = [newPath];
        } else if (newPath.length === shortestLength) {
          solutions.push(newPath);
        }
      } else if (k < currentStr.length) {
        const newFirstDigit = parseInt(currentStr[k], 10) - k;

        if (newFirstDigit > 0) {
          const nextStr = newFirstDigit.toString() + currentStr.slice(k + 1);
          const newPath = [...path, k];

          if (newPath.length < shortestLength) {
            queue.push([nextStr, newPath]);
          }
        }
      }
    }
  }

  if (solutions.length === 0) return [];

  solutions.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });

  return solutions;
}
console.log(solve('4621'));