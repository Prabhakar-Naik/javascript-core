var promise1 = new Promise((resolve, reject) => {
  console.log("Hello");
  setTimeout(() => {
    resolve("finish after 1 second!");
  }, 1000);

  setTimeout(() => {
    reject("error");
  }, 1500);
});

promise1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally block executed...!");
  });
