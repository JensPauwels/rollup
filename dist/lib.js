var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Test = function Test(data) {
  classCallCheck(this, Test);

  this.data = data;
};

var Another = function Another(data) {
  classCallCheck(this, Another);

  this.data = data;
};

var Demo = function Demo() {
  classCallCheck(this, Demo);

  this.name = 'hello';
};

export { Another, Demo, Test };
