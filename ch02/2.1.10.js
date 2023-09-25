// ?? - 널 병합 연산자 부분
const a = 0;
const b = a || 3;  // || 연산자는 falsy 값이면 뒤로 넘어감
console.log(b); // 3

const c = 0;
const d = c ?? 3; // ?? 연산자는 null과 undefined일 때만 뒤로 넘어감
console.log(d); // 0;

const e = null;
const f = e ?? 3;
console.log(f);  // 3;

const g = undefined;
const h = g ?? 3;
console.log(h);  // 3;


// ?. - 옵셔널 체이닝 연산자 부분
const a1 = {}
a1.b; // a가 객체이므로 문제없음

const c1 = null;
try {
	c1.d;  // undefined
} catch (e) {
	console.error(e);   // TypeError : Cannot read properties of null (reading 'd')
}
c1?.d; // 문제없음

try {
	c1.f(); // undefined
} catch (e) {
	console.error(e);  // TypeError : Cannot read properties of null (reading 'd')
}
c1?.f(); // 문제없음

try {
	c1[0]; // undefined
} catch (e) {
	console.error(e); // TypeError : Cannot read properties of null (reading 'd')
}
c1?.[0]; // 문제없음