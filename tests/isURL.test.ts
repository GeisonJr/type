import { isURL } from '../src/index'

test('isURL', () => {
	expect(isURL(new URL('protocol://host.dev'))).toBe(true)
})

test('NOT isURL', () => {
	expect(isURL('')).toBe(false)
	expect(isURL([])).toBe(false)
	expect(isURL({})).toBe(false)
	expect(isURL(0)).toBe(false)
	expect(isURL(false)).toBe(false)
	expect(isURL(null)).toBe(false)
	expect(isURL(true)).toBe(false)
	expect(isURL(undefined)).toBe(false)
	expect(isURL(void 0)).toBe(false)

	expect(isURL(Array)).toBe(false)
	expect(isURL(ArrayBuffer)).toBe(false)
	expect(isURL(BigInt)).toBe(false)
	expect(isURL(Blob)).toBe(false)
	expect(isURL(Boolean)).toBe(false)
	expect(isURL(Buffer)).toBe(false)
	expect(isURL(Date)).toBe(false)
	expect(isURL(Error)).toBe(false)
	expect(isURL(Function)).toBe(false)
	expect(isURL(Infinity)).toBe(false)
	expect(isURL(NaN)).toBe(false)
	expect(isURL(Number)).toBe(false)
	expect(isURL(Object)).toBe(false)
	expect(isURL(Promise)).toBe(false)
	expect(isURL(String)).toBe(false)
	expect(isURL(Symbol)).toBe(false)
})
