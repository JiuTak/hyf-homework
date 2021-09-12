afterSetTime(8)
  .then(console.log)
  .catch((err) => {
    console.log(err);
  });

async function afterSetTime(resolveAfter) {
  const setTimer = resolveAfter * 1000;
  console.log(`Let us see.... in 8 sec. from now on`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Timed out`);
    }, setTimer);
  });
}
