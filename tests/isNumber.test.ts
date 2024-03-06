import { isNumber } from '../src/index'

test('isNumber', () => {
	expect(isNumber(Number())).toBe(true)
})

test('NOT isNumber', () => {
	expect(isNumber('')).toBe(false)
	expect(isNumber([])).toBe(false)
	expect(isNumber({})).toBe(false)
	// expect(isNumber(0)).toBe(false)
	expect(isNumber(false)).toBe(false)
	expect(isNumber(null)).toBe(false)
	expect(isNumber(true)).toBe(false)
	expect(isNumber(undefined)).toBe(false)
	expect(isNumber(void 0)).toBe(false)

	expect(isNumber(Array)).toBe(false)
	expect(isNumber(ArrayBuffer)).toBe(false)
	expect(isNumber(BigInt)).toBe(false)
	expect(isNumber(Blob)).toBe(false)
	expect(isNumber(Boolean)).toBe(false)
	expect(isNumber(Buffer)).toBe(false)
	expect(isNumber(Date)).toBe(false)
	expect(isNumber(Error)).toBe(false)
	expect(isNumber(Function)).toBe(false)
	// expect(isNumber(Infinity)).toBe(false)
	// expect(isNumber(NaN)).toBe(false)
	expect(isNumber(Number)).toBe(false)
	expect(isNumber(Object)).toBe(false)
	expect(isNumber(Promise)).toBe(false)
	expect(isNumber(String)).toBe(false)
	expect(isNumber(Symbol)).toBe(false)
})
