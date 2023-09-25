var relationship1 = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends: function() {   // function 선언문 사용
		var that = this; // relationship1을 가리키는 this를 that에 저장
		this.friends.forEach(function (friend) {
			console.log(that.name, friend);
		});
	},
};
relationship1.logFriends();


var relationship2 = {
	name: 'zero',
	friends: ['nero', 'hero', 'xero'],
	logFriends() {     // :, function 없음
		//var that = this; 필요 없음.
		this.friends.forEach(friend => {
			console.log(that.name, friend);
		});
	},
};
relationship2.logFriends();