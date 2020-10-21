
class ToDolistDTO {
	readonly title: string;
	readonly description: string;
	readonly status: number;
}

class Hello {
	public title: string;
	public description: string;
	public status: number;

	public constructor(title, description, status) {
		this.title = title;
		this.description = description;
		this.status = status;
	}

	public main() {
		console.log(this.title, this.description, this.status);
	}

}

function checkToDoList (todayToDoList: ToDolistDTO) {
	console.log(todayToDoList);
	return todayToDoList;
}


//let todayList: ToDolist = new Hello('Hello', 'Cow', 4);


// console.log(todayList.title);

// console.log(todayList);

let body = {
	title: 'Hello Today',
	description: 'It is Holiday.',
	status: 1
}

let echo = checkToDoList(body);

console.log('echo', echo);