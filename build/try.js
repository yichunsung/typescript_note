var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const start = '---- Start Print ----';
const end = '---- End Print ----';
let data = 'Tom';
function Tryshow(log = 'Joe') {
    return function (target, name) {
        data = log;
        console.log('is Log print?', log);
    };
}
let Sayhi = class Sayhi {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log('Hello,', this.name);
    }
};
Sayhi = __decorate([
    Tryshow(),
    __metadata("design:paramtypes", [Object])
], Sayhi);
console.log(start);
let consoleData = new Sayhi(data);
consoleData.run();
console.log(end);
//# sourceMappingURL=try.js.map