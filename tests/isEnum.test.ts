import { isEnum } from '../src/index'

type Test = Record<string, string>

const TEST: Test = { test: 'a' }

test('isEnum', () => {
	expect(isEnum<Test>('a', TEST)).toBe(true)
})

test('NOT isEnum', () => {
	expect(isEnum<Test>('', TEST)).toBe(false)
	expect(isEnum<Test>([], TEST)).toBe(false)
	expect(isEnum<Test>({}, TEST)).toBe(false)
	expect(isEnum<Test>(0, TEST)).toBe(false)
	expect(isEnum<Test>(false, TEST)).toBe(false)
	expect(isEnum<Test>(null, TEST)).toBe(false)
	expect(isEnum<Test>(true, TEST)).toBe(false)
	expect(isEnum<Test>(undefined, TEST)).toBe(false)
	expect(isEnum<Test>(void 0, TEST)).toBe(false)

	expect(isEnum<Test>(Array, TEST)).toBe(false)
	expect(isEnum<Test>(ArrayBuffer, TEST)).toBe(false)
	expect(isEnum<Test>(BigInt, TEST)).toBe(false)
	expect(isEnum<Test>(Blob, TEST)).toBe(false)
	expect(isEnum<Test>(Boolean, TEST)).toBe(false)
	expect(isEnum<Test>(Buffer, TEST)).toBe(false)
	expect(isEnum<Test>(Date, TEST)).toBe(false)
	expect(isEnum<Test>(Error, TEST)).toBe(false)
	expect(isEnum<Test>(Function, TEST)).toBe(false)
	expect(isEnum<Test>(Infinity, TEST)).toBe(false)
	expect(isEnum<Test>(NaN, TEST)).toBe(false)
	expect(isEnum<Test>(Number, TEST)).toBe(false)
	expect(isEnum<Test>(Object, TEST)).toBe(false)
	expect(isEnum<Test>(Promise, TEST)).toBe(false)
	expect(isEnum<Test>(String, TEST)).toBe(false)
	expect(isEnum<Test>(Symbol, TEST)).toBe(false)
})
