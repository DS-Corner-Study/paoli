const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {   // 프로미스 생성
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
// 다른 코드가 들어갈 수 있음
promise
  .then((message) => {
    console.log(message); // 성공(resolve)한 경우 실행
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행
  })
  .finally(() => { // 끝나고 무조건 실행
    console.log('무조건');
  });



function findAndSaveUser(Users) {
    Users.findOne({})
      .then((user) => {
        user.name = 'zero';
        return user.save();
      })
      .then((user) => {
        return Users.findOne({ gender: 'm' });
      })
      .then((user) => {
        // 생략
      })
      .catch(err => {
        console.error(err);
      });
}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.allSettled([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
/* [
*    { status: 'fulfilled', value: '성공1' },
*    { status: 'rejected', reason: '실패2' },
*    { status: 'fulfilled', value: '성공3' }
*  ]
*/
  })
  .catch((error) => {
    console.error(error);
});

