import { isBoolean } from '../src/index'

test('isBoolean', () => {
	expect(isBoolean(Boolean())).toBe(true)
})

test('NOT isBoolean', () => {
	expect(isBoolean('')).toBe(false)
	expect(isBoolean([])).toBe(false)
	expect(isBoolean({})).toBe(false)
	expect(isBoolean(0)).toBe(false)
	// expect(isBoolean(false)).toBe(false)
	expect(isBoolean(null)).toBe(false)
	// expect(isBoolean(true)).toBe(false)
	expect(isBoolean(undefined)).toBe(false)
	expect(isBoolean(void 0)).toBe(false)

	expect(isBoolean(Array)).toBe(false)
	expect(isBoolean(ArrayBuffer)).toBe(false)
	expect(isBoolean(BigInt)).toBe(false)
	expect(isBoolean(Blob)).toBe(false)
	expect(isBoolean(Boolean)).toBe(false)
	expect(isBoolean(Buffer)).toBe(false)
	expect(isBoolean(Date)).toBe(false)
	expect(isBoolean(Error)).toBe(false)
	expect(isBoolean(Function)).toBe(false)
	expect(isBoolean(Infinity)).toBe(false)
	expect(isBoolean(NaN)).toBe(false)
	expect(isBoolean(Number)).toBe(false)
	expect(isBoolean(Object)).toBe(false)
	expect(isBoolean(Promise)).toBe(false)
	expect(isBoolean(String)).toBe(false)
	expect(isBoolean(Symbol)).toBe(false)
})
