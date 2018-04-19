
var expect = require('expect');
var {generateMessage,generateLocationMessage}= require('./message');
describe('generateMessage',()=>{
	it('Should generate correct message object',()=>{
		var res = generateMessage('Abhi','Hello');
		expect(res.from).toBe('Abhi');
		expect(res.text).toBe('Hello');
		expect(typeof res.createdAt).toBe('number');
	});
});

describe('generateLocationMessage',()=>{
	it('Should generate correct location object',()=>{
		var from = 'Deb';
		var latitude = 1;
		var longitude = 1;
		var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
		var res= generateLocationMessage(from,latitude,longitude);
		expect(res.url).toBe(url);
		
	});
});