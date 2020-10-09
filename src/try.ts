const start: string = '---- Start Print ----';
const end: string = '---- End Print ----';

let data: string = 'Tom';

function Tryshow(log: string = 'Joe') {
	return function (target: any) {
		data = log;
		console.log('is Log print?', log);
	}
	

}

@Tryshow()
class Sayhi {
	public name;
	public constructor(name) {
		this.name = name;
	}

	run() {
		console.log('Hello,', this.name);
	}
}

console.log(start);

let consoleData = new Sayhi(data);

consoleData.run();

console.log(end);

