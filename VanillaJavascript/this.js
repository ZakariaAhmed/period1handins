function firstFunc() {
    return this;
}

function multiple(a, b){
    return this.a * this.b;
}


var thisTest = {
    myProp: 10,
    myFunc: function() {
        return this.myProp;
    }
};