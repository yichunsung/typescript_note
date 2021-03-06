import 'reflect-metadata';

const start: string = '---- Start Print ----';
const end: string = '---- End Print ----';

let data: string = 'Tom';
/**
 * [Tryshow description]
 * @param {string = 'Joe'} log [description]
 */
function Tryshow(log: string = 'Joe') {
	/**
	 * [function description]
	 * @param {any} target [description]
	 */
	return function (target: any) {
		// console.log(target);
		// data = log;
		// console.log('is Log print?', log);
		// let a = new target(data);
		// a.run();
		console.log(target);
		
		let result = Reflect.getMetadata('cs', target);
		console.log(result);
		return class SayHello {
			public name;
			public constructor(name) {
				this.name = name;
			}

			run() {
				console.log('Yoyo!', this.name);
			}

			doSomething() {
				console.log('Decorator do something');
			}
		}

	}
}

function SlowDisplay () {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log(target);
		// Reflect.defineMetadata('cs', 12324, target);
		let result = Reflect.getMetadata('cs', target);
		console.log(result);
	}
}

function Required (target: any, propertyKey: string) {
	console.log(target);
	Reflect.defineMetadata('cs', 12324, target);
	let result = Reflect.getMetadata('cs', target);
	console.log(result);
}

/**
 * [Tryshow description]
 */
@Tryshow()
class Sayhi {

	@Required
	public name: string = 'John';
	public constructor(name: string = 'Joey') {
		this.name = name;
	}

	run() {
		console.log('Hello,', this.name);
	}

	@SlowDisplay()
	doSomething() {
		console.log('Decorator Say hi.');
	}
}

console.log(start);

let consoleData = new Sayhi(data);

consoleData.run();

// consoleData.doSomething();

console.log(end);


/**
 * [MyDecorators description]
 * @param {Function} target [description]
 */
function MyDecorators(target: Function): void {  
  target.prototype.say = function (): void {  
    console.log("Hello 前端自習課 !");
    let result = Reflect.getMetadata('cs', new Sayhi(data));
		console.log(result);
  };  
}  

@MyDecorators  
class LeoClass {  
  constructor() {

  }  
  say() {
  	console.log("Hello Leo")
  }  
}  

let leo = new LeoClass();  
leo.say();   
// 'Hello Leo!';  




