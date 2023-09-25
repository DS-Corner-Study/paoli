var sayNode = function() {
    console.log('Node');
};
var es='ES';

var oldObject = {
		sayJS: function() {              // 1번
		    console.log('JS');
    }
		sayNode: sayNode,                // 2번
}
oldObject[es + 6] = 'Fantastic';     // 3번
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]:'Fantastic',
};
newObject.sayNode();      // Node
newObject.sayJS();        // JS
console.log(newObject.ES6);  // Fantastic