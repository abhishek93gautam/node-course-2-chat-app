
var expect = require('expect');
var {generateMessage}= require('./message');

describe('generateMessage',()=>{
	it('Should generate correct message object',()=>{
		var res = generateMessage('Abhi','Hello');
		expect(res.from).toBe('Abhi');
		expect(res.text).toBe('Hello');
		expect(typeof res.createdAt).toBe('number');
	});
});