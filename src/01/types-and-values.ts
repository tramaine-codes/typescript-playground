import assert from 'node:assert';

type SomeFunction<A, B> = [A, B];
type Foo = SomeFunction<number, string>;

[1, 'bar'] satisfies Foo;

type DoNothing<T> = T;
type Baz = DoNothing<boolean>;

true satisfies Baz;

function identity<T>(a: T): T {
  return a;
}

assert.deepStrictEqual(identity(1), 1);

function safeHead<T>(arr: T[], defaultValue: T): T {
  return arr[0] ?? defaultValue;
}

assert.deepStrictEqual(safeHead<number>([], 0), 0);
assert.deepStrictEqual(safeHead(['qux', 'quux'], 'none'), 'qux');

type Two = number & 2;
2 satisfies Two;
