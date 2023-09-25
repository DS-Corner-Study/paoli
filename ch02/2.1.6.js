var Human = function(type) {
    this.type = type || 'human';
};
  
Human.isHuman = function(human) {
    return human instanceof Human;
}
  
Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
};
  
var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments);        // 상속받는 부분
    this.firstName = firstName;
    this.lastName = lastName;
};
  
Zero.prototype = Object.create(Human.prototype);  // 상속받는 부분
Zero.prototype.constructor = Zero; // 상속하는 부분
Zero.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero); // true


class Human {
    constructor(type = 'human') {
      this.type = type;
    }
  
    static isHuman(human) {       // staic 키워드로 전환
      return human instanceof Human;
    }
  
    breathe() {
      alert('h-a-a-a-m');
    }
}
  
class Zero extends Human {  // 아하!
    constructor(type, firstName, lastName) {
      super(type);  
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    sayName() {
      super.breathe();
      alert(`${this.firstName} ${this.lastName}`);
    }
}
  
const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); // true