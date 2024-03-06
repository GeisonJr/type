import { isObject } from '../src/index'

test('isObject', () => {
	expect(isObject({})).toBe(true)
})

test('NOT isObject', () => {
	expect(isObject('')).toBe(false)
	// expect(isObject([])).toBe(false)
	// expect(isObject({})).toBe(false)
	expect(isObject(0)).toBe(false)
	expect(isObject(false)).toBe(false)
	expect(isObject(null)).toBe(false)
	expect(isObject(true)).toBe(false)
	expect(isObject(undefined)).toBe(false)
	expect(isObject(void 0)).toBe(false)

	// expect(isObject(Array)).toBe(false)
	expect(isObject(ArrayBuffer)).toBe(false)
	// expect(isObject(BigInt)).toBe(false)
	expect(isObject(Blob)).toBe(false)
	// expect(isObject(Boolean)).toBe(false)
	expect(isObject(Buffer)).toBe(false)
	// expect(isObject(Date)).toBe(false)
	// expect(isObject(Error)).toBe(false)
	// expect(isObject(Function)).toBe(false)
	expect(isObject(Infinity)).toBe(false)
	expect(isObject(NaN)).toBe(false)
	// expect(isObject(Number)).toBe(false)
	// expect(isObject(Object)).toBe(false)
	// expect(isObject(Promise)).toBe(false)
	// expect(isObject(String)).toBe(false)
	// expect(isObject(Symbol)).toBe(false)
})
