import 'reflect-metadata';

function classDecorator() {
	return (target) => {
		Reflect.defineMetadata('classMetaData', 'a', target);
	}
}

function methodDecorator() {
  return (target, key, descriptor) => {
    
    Reflect.defineMetadata('methodMetaData', 'b', target, key);
  };
}

@classDecorator()
class ClassName {
	@methodDecorator()
	someMethod() {}
}

let data = Reflect.getMetadata('classMetaData', ClassName);

let data2 = Reflect.getMetadata('methodMetaData', new ClassName(), 'someMethod');

console.log(data);
console.log(data2);

const METHOD_METADATA = 'method'；
const PATH_METADATA = 'path'；

function controller(path: string) {
	return function(target) {
		Reflect.defineMetadata(PATH_METADATA, path, target);
	}
}
