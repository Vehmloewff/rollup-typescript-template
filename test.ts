import { sayHello } from './src';
import { it } from 'zip-tap';

it(`sayHello should return a gretting`, (expect) => {
	expect(sayHello(`Elijah`)).toMatch(/hello.*Elijah/i);
});
