type Foo = [firstName: string, lastName: string];

['Jane', 'Doe'] satisfies Foo;

type Bar = [firstName: string, lastName: string, '!'];

['Jane', 'Doe', '!'] satisfies Bar;
