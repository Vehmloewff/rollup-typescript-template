import { sayHello } from './src';

let exitStatus = 0;

if (!/Elijah/.test(sayHello('Elijah'))) {
	console.error(new Error('test failed'));
	exitStatus++;
}

console.log(exitStatus === 0 ? 'OK' : `${exitStatus} PROBLEM(S) FOUND`);
process.exit(exitStatus);
