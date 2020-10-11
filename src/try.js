"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var start = '---- Start Print ----';
var end = '---- End Print ----';
var data = 'Tom';
/**
 * [Tryshow description]
 * @param {string = 'Joe'} log [description]
 */
function Tryshow(log) {
    if (log === void 0) { log = 'Joe'; }
    /**
     * [function description]
     * @param {any} target [description]
     */
    return function (target) {
        // console.log(target);
        // data = log;
        // console.log('is Log print?', log);
        // let a = new target(data);
        // a.run();
        console.log(target);
        var result = Reflect.getMetadata('cs', target);
        console.log(result);
        return /** @class */ (function () {
            function SayHello(name) {
                this.name = name;
            }
            SayHello.prototype.run = function () {
                console.log('Yoyo!', this.name);
            };
            SayHello.prototype.doSomething = function () {
                console.log('Decorator do something');
            };
            return SayHello;
        }());
    };
}
function SlowDisplay() {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        // Reflect.defineMetadata('cs', 12324, target);
        var result = Reflect.getMetadata('cs', target);
        console.log(result);
    };
}
function Required(target, propertyKey) {
    console.log(target);
    Reflect.defineMetadata('cs', 12324, target);
    var result = Reflect.getMetadata('cs', target);
    console.log(result);
}
/**
 * [Tryshow description]
 */
var Sayhi = /** @class */ (function () {
    function Sayhi(name) {
        if (name === void 0) { name = 'Joey'; }
        this.name = 'John';
        this.name = name;
    }
    Sayhi.prototype.run = function () {
        console.log('Hello,', this.name);
    };
    Sayhi.prototype.doSomething = function () {
        console.log('Decorator Say hi.');
    };
    __decorate([
        Required,
        __metadata("design:type", String)
    ], Sayhi.prototype, "name", void 0);
    __decorate([
        SlowDisplay(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Sayhi.prototype, "doSomething", null);
    Sayhi = __decorate([
        Tryshow(),
        __metadata("design:paramtypes", [String])
    ], Sayhi);
    return Sayhi;
}());
console.log(start);
var consoleData = new Sayhi(data);
consoleData.run();
// consoleData.doSomething();
console.log(end);
/**
 * [MyDecorators description]
 * @param {Function} target [description]
 */
function MyDecorators(target) {
    target.prototype.say = function () {
        console.log("Hello 前端自習課 !");
        var result = Reflect.getMetadata('cs', new Sayhi(data));
        console.log(result);
    };
}
var LeoClass = /** @class */ (function () {
    function LeoClass() {
    }
    LeoClass.prototype.say = function () {
        console.log("Hello Leo");
    };
    LeoClass = __decorate([
        MyDecorators,
        __metadata("design:paramtypes", [])
    ], LeoClass);
    return LeoClass;
}());
var leo = new LeoClass();
leo.say();
// 'Hello Leo!';  
