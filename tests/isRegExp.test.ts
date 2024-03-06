import { isRegExp } from '../src/index'

test('isRegExp', () => {
	expect(isRegExp(new RegExp(''))).toBe(true)
})

test('NOT isRegExp', () => {
	expect(isRegExp('')).toBe(false)
	expect(isRegExp([])).toBe(false)
	expect(isRegExp({})).toBe(false)
	expect(isRegExp(0)).toBe(false)
	expect(isRegExp(false)).toBe(false)
	expect(isRegExp(null)).toBe(false)
	expect(isRegExp(true)).toBe(false)
	expect(isRegExp(undefined)).toBe(false)
	expect(isRegExp(void 0)).toBe(false)

	expect(isRegExp(Array)).toBe(false)
	expect(isRegExp(ArrayBuffer)).toBe(false)
	expect(isRegExp(BigInt)).toBe(false)
	expect(isRegExp(Blob)).toBe(false)
	expect(isRegExp(Boolean)).toBe(false)
	expect(isRegExp(Buffer)).toBe(false)
	expect(isRegExp(Date)).toBe(false)
	expect(isRegExp(Error)).toBe(false)
	expect(isRegExp(Function)).toBe(false)
	expect(isRegExp(Infinity)).toBe(false)
	expect(isRegExp(NaN)).toBe(false)
	expect(isRegExp(Number)).toBe(false)
	expect(isRegExp(Object)).toBe(false)
	expect(isRegExp(Promise)).toBe(false)
	expect(isRegExp(String)).toBe(false)
	expect(isRegExp(Symbol)).toBe(false)
})
