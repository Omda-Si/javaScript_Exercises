function greetJedi(first, last) {
  const a = last.slice(0, 3);
  const b = first.slice(0, 2);

  const lastPart = a[0].toUpperCase() + a.slice(1).toLowerCase();
  const firstPart = b[0].toUpperCase() + b.slice(1).toLowerCase();

  return"Greetings, master " + lastPart + firstPart;
}
console.log(greetJedi('emad' ,'siddig'));
