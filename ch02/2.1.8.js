async function findAndSaveUser(Users) {
    try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
      // 생략
    } catch (error) {
      console.error(error);
    }
}


// 화살표 함수 버전
const findAndSaveUser = async (Users) => {
    try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
      // 생략
    } catch (error) {
      console.error(error);
    }
};


// for문을 통한 프로미스 순차적 실행
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();


// 실행 후 then을 붙이거나 또 다른 함수 안에서 await 붙여 처리
async function findAndSaveUser(Users) {
    // 생략
  }
  
  findAndSaveUser().then(() => { /* 생략 */ });
  // 또는
  async function other() {
    const result = await findAndSaveUser();
}