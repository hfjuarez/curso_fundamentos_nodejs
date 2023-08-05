function throwError() {
  return foo;
}

try {
  throwError();
} catch (error) {
  console.error(error.message);
}
