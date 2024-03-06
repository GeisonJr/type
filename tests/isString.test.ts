import { isString } from '../src/index'

test('isString', () => {
	expect(isString(String())).toBe(true)
})

test('NOT isString', () => {
	// expect(isString('')).toBe(false)
	expect(isString([])).toBe(false)
	expect(isString({})).toBe(false)
	expect(isString(0)).toBe(false)
	expect(isString(false)).toBe(false)
	expect(isString(null)).toBe(false)
	expect(isString(true)).toBe(false)
	expect(isString(undefined)).toBe(false)
	expect(isString(void 0)).toBe(false)

	expect(isString(Array)).toBe(false)
	expect(isString(ArrayBuffer)).toBe(false)
	expect(isString(BigInt)).toBe(false)
	expect(isString(Blob)).toBe(false)
	expect(isString(Boolean)).toBe(false)
	expect(isString(Buffer)).toBe(false)
	expect(isString(Date)).toBe(false)
	expect(isString(Error)).toBe(false)
	expect(isString(Function)).toBe(false)
	expect(isString(Infinity)).toBe(false)
	expect(isString(NaN)).toBe(false)
	expect(isString(Number)).toBe(false)
	expect(isString(Object)).toBe(false)
	expect(isString(Promise)).toBe(false)
	expect(isString(String)).toBe(false)
	expect(isString(Symbol)).toBe(false)
})
