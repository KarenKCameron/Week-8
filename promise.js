let myPromise = new Promise(function (resolve, reject) {
  const randNum = Math.random();
  setTimeout(function () {
    if (randNum > 0.5) {
      resolve(randNum);
    } else {
      reject(randNum);
    }
  }, 1000);
});

myPromise
  .then(function (num) {
    console.log(`Success:  Number is ${num}`);
  })
  .catch(function (num) {
    console.log(`Fail:  Number is ${num}`);
  })
  .then(() => {
    console.log(`Complete`)
  });

