import { isURLSearchParams } from '../src/index'

test('isURLSearchParams', () => {
	expect(isURLSearchParams(new URLSearchParams())).toBe(true)
})

test('NOT isURLSearchParams', () => {
	expect(isURLSearchParams('')).toBe(false)
	expect(isURLSearchParams([])).toBe(false)
	expect(isURLSearchParams({})).toBe(false)
	expect(isURLSearchParams(0)).toBe(false)
	expect(isURLSearchParams(false)).toBe(false)
	expect(isURLSearchParams(null)).toBe(false)
	expect(isURLSearchParams(true)).toBe(false)
	expect(isURLSearchParams(undefined)).toBe(false)
	expect(isURLSearchParams(void 0)).toBe(false)

	expect(isURLSearchParams(Array)).toBe(false)
	expect(isURLSearchParams(ArrayBuffer)).toBe(false)
	expect(isURLSearchParams(BigInt)).toBe(false)
	expect(isURLSearchParams(Blob)).toBe(false)
	expect(isURLSearchParams(Boolean)).toBe(false)
	expect(isURLSearchParams(Buffer)).toBe(false)
	expect(isURLSearchParams(Date)).toBe(false)
	expect(isURLSearchParams(Error)).toBe(false)
	expect(isURLSearchParams(Function)).toBe(false)
	expect(isURLSearchParams(Infinity)).toBe(false)
	expect(isURLSearchParams(NaN)).toBe(false)
	expect(isURLSearchParams(Number)).toBe(false)
	expect(isURLSearchParams(Object)).toBe(false)
	expect(isURLSearchParams(Promise)).toBe(false)
	expect(isURLSearchParams(String)).toBe(false)
	expect(isURLSearchParams(Symbol)).toBe(false)
})
