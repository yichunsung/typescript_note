import 'reflect-metadata';
/*
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
*/
// console.log(data);
// console.log(data2);

const PATH_METADATA = 'path';
const METHOD_METADATA = 'method';

function Controller(path: string) {
	return function(target) {
		Reflect.defineMetadata(PATH_METADATA, path, target);
	}
}

function createMappingDecorator(method: string) {
	return function(path: string) {
		return (target, key, descriptor) => {
	    Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
	    Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
	  }
	}
}

const Get = createMappingDecorator('GET');
const Post = createMappingDecorator('POST');

@Controller('/heloo')
class PlayData {
  @Get('/try')
  someGetMethod() {
    return 'hello world';
  }

  @Post('/yoyo')
  somePostMethod() {}
}

function mapRoute(instance: Object) {
  const prototype = Object.getPrototypeOf(instance);

  const methodsNames = Object.getOwnPropertyNames(prototype).filter(item => item);
  return methodsNames.map(methodName => {
    const fn = prototype[methodName];

    const route = Reflect.getMetadata(PATH_METADATA, fn);
    const method = Reflect.getMetadata(METHOD_METADATA, fn);
    return {
      route,
      method,
      fn,
      methodName
    }
  })
};

let he = Reflect.getMetadata(PATH_METADATA, PlayData); // '/test'

console.log(he);
let a = mapRoute(new PlayData());

console.log(a);
