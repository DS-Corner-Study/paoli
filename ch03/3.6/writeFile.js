const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입력됩니다', (err) => {
  if (err) {
    throw err;
  }
  fs.readFile('./writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});


// 프로미스로 변경
const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다')
  .then(() => {
    return fs.readFile('./writeme.txt');
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });