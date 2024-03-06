import { isArray } from '../src/index'

test('isArray', () => {
	expect(isArray(Array())).toBe(true)
})

test('NOT isArray', () => {
	expect(isArray('')).toBe(false)
	// expect(isArray([])).toBe(false)
	expect(isArray({})).toBe(false)
	expect(isArray(0)).toBe(false)
	expect(isArray(false)).toBe(false)
	expect(isArray(null)).toBe(false)
	expect(isArray(true)).toBe(false)
	expect(isArray(undefined)).toBe(false)
	expect(isArray(void 0)).toBe(false)

	expect(isArray(Array)).toBe(false)
	expect(isArray(ArrayBuffer)).toBe(false)
	expect(isArray(BigInt)).toBe(false)
	expect(isArray(Blob)).toBe(false)
	expect(isArray(Boolean)).toBe(false)
	expect(isArray(Buffer)).toBe(false)
	expect(isArray(Date)).toBe(false)
	expect(isArray(Error)).toBe(false)
	expect(isArray(Function)).toBe(false)
	expect(isArray(Infinity)).toBe(false)
	expect(isArray(NaN)).toBe(false)
	expect(isArray(Number)).toBe(false)
	expect(isArray(Object)).toBe(false)
	expect(isArray(Promise)).toBe(false)
	expect(isArray(String)).toBe(false)
	expect(isArray(Symbol)).toBe(false)
})
