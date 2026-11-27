function minValue(values) {
  const unique = [...new Set(values)];
  unique.sort((a, b) => a - b);
  return Number(unique.join(""));
}
console.log(minValue([1, 3, 1]));
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7] ));