import { isDate } from '../src/index'

test('isDate', () => {
	expect(isDate(new Date())).toBe(true)
})

test('NOT isDate', () => {
	expect(isDate('')).toBe(false)
	expect(isDate([])).toBe(false)
	expect(isDate({})).toBe(false)
	expect(isDate(0)).toBe(false)
	expect(isDate(false)).toBe(false)
	expect(isDate(null)).toBe(false)
	expect(isDate(true)).toBe(false)
	expect(isDate(undefined)).toBe(false)
	expect(isDate(void 0)).toBe(false)

	expect(isDate(Array)).toBe(false)
	expect(isDate(ArrayBuffer)).toBe(false)
	expect(isDate(BigInt)).toBe(false)
	expect(isDate(Blob)).toBe(false)
	expect(isDate(Boolean)).toBe(false)
	expect(isDate(Buffer)).toBe(false)
	expect(isDate(Date)).toBe(false)
	expect(isDate(Error)).toBe(false)
	expect(isDate(Function)).toBe(false)
	expect(isDate(Infinity)).toBe(false)
	expect(isDate(NaN)).toBe(false)
	expect(isDate(Number)).toBe(false)
	expect(isDate(Object)).toBe(false)
	expect(isDate(Promise)).toBe(false)
	expect(isDate(String)).toBe(false)
	expect(isDate(Symbol)).toBe(false)
})
