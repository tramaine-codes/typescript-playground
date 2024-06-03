type Foo = [firstName: string, lastName: string];

// @ts-expect-error
['Jane'] satisfies Foo;
['Jane', 'Doe'] satisfies Foo;

type Bar = [firstName: string, lastName: string, '!'];

// @ts-expect-error
['Jane', 'Doe'] satisfies Bar;
['Jane', 'Doe', '!'] satisfies Bar;
