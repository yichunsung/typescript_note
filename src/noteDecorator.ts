import 'reflect-metadata';

// Class Decorators 類別裝飾器
const ClassDecorator = (target: any) => {
  console.log('This is decorator: ', target);
};

// Method Decorators 方法裝飾器
const methodsDecorator = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  console.log('target: ', target, '\n', propertyKey, '\n', descriptor);
};

// Parameter Decorators 參數裝飾器
const parameterDecorator = (target: any, propertyKey: string, parameterIndex: number) => {
  console.log('parameterDecorator target: ', target, '\n', propertyKey, '\n', parameterIndex);
};

// Property Decorators 欄位裝飾器
const propertyDecorator = (target: any, propertyKey: string) => {
  console.log('propertyDecorator: ', target, 'propertyKey: ', propertyKey);
};

// 裝飾器工廠(Decorator Factory)
const UseMyDecorator = (metaData: number) => {
  return (target: any) => {
    // Reflect.defineMetadata(metadataKey, metadataValue, target);
    Reflect.defineMetadata('hello', metaData, target);
    console.log('This is UseMyDecorator: ', target);
  }
}

const IsType = (type) => {
  return (target: any, propertyKey: string) => {
    console.log(propertyKey, type);
  }
}


@ClassDecorator
@UseMyDecorator(1234)
class NewClassTest {

  @propertyDecorator
  @IsType('string')
  userData: string;

  @methodsDecorator
  doSomething(@parameterDecorator args) {
    console.log(args);
  }

}

const hello = new NewClassTest();

console.log(hello);

hello.doSomething('Yoho');

const data = Reflect.getMetadata('hello', NewClassTest);
console.log('data: ', data);
