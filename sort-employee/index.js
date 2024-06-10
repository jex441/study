const employees = [
	{ name: "John", age: 45 },
	{ name: "Jane", age: 30 },
	{ name: "Jack", age: 35 },
	{ name: "Alice", age: 30 },
	{ name: "Bob", age: 45 },
];

// Output should be:
// [
//   { age: 30, names: ["Alice", "Jane"] },
//   { age: 35, names: ["Jack"] },
//   { age: 45, names: ["Bob", "John"] }
// ]
function groupAndSortEmployees(employees) {
	let hash = {};
	for (let person of employees) {
		if (!hash[person.age]) {
			hash[person.age] = [person.name];
		} else {
			hash[person.age].push(person.name);
		}
	}

	let array = [];

	for (let key in hash) {
		array.push({ age: key, names: hash[key].sort() });
	}

	console.log(array);
}

const sortedEmployees = groupAndSortEmployees(employees);
