var module = require('../modules/modules.js');


exports.test_any = function(test) {
	
	var input_any = require('./InFiles/input-any.json');
	test.equal(({"x": "Any"}).to_json, module.solve(input_any.a, input_any.b, input_any.c));
	
	test.done();
};

exports.test_none = function(test)
{
	var input_nan = require('./InFiles/input-nan.json');

    test.equal(({
    "x1": "NaN",
    "x2": "NaN"
	}).to_json, module.solve(input_nan.a, input_nan.b, input_nan.c));
    
    test.done();
};

exports.test_D0 = function(test)
{
	var input_1 = require('./InFiles/input-1.json');

    test.equal(({
  	"x": -2
	}).to_json, module.solve(input_1.a, input_1.b, input_1.c));

    test.done();
};

exports.test_DGreaterThan0 = function(test)
{
	var input_2 = require('./InFiles/input-2.json');

    test.equal(({
    "x1": 4,
    "x2": 2
	}).to_json, module.solve(input_2.a, input_2.b, input_2.c));
    
    test.done();
};
