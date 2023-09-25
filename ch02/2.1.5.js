// 객체의 속성을 같은 이름의 변수에 대입하는 코드

var candyMachine = {
	status: {
		name: 'node',
		count: 5,
	},
	getCandy: function () {
		this.status.count--;
		return this.status.count;
	},
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;


const candyMachine = {
	status: {
		name: 'node',
		count: 5,
	},
	getCandy() {    // :, function 삭제
		this.status.count--;
		return this.status.count;
	},
};
const { getCandy, status: { count } } = candyMachine;



// 배열에 대한 구조 분해 할당 문법
var array = ['nodjs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// 다음과 같이 변경
const array = ['nodejs', {}, 10, true];
const[node, obj, , bool] = array;    // 10은 무시