var num = 0;

while (num < 20) {
  num++;
  if (num % 2 != 0) {
    continue;
  }

  console.log(num);
}
