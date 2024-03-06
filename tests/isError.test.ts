import { isError } from '../src/index'

test('isError', () => {
	expect(isError(new Error())).toBe(true)
})

test('NOT isError', () => {
	expect(isError('')).toBe(false)
	expect(isError([])).toBe(false)
	expect(isError({})).toBe(false)
	expect(isError(0)).toBe(false)
	expect(isError(false)).toBe(false)
	expect(isError(null)).toBe(false)
	expect(isError(true)).toBe(false)
	expect(isError(undefined)).toBe(false)
	expect(isError(void 0)).toBe(false)

	expect(isError(Array)).toBe(false)
	expect(isError(ArrayBuffer)).toBe(false)
	expect(isError(BigInt)).toBe(false)
	expect(isError(Blob)).toBe(false)
	expect(isError(Boolean)).toBe(false)
	expect(isError(Buffer)).toBe(false)
	expect(isError(Date)).toBe(false)
	expect(isError(Error)).toBe(false)
	expect(isError(Function)).toBe(false)
	expect(isError(Infinity)).toBe(false)
	expect(isError(NaN)).toBe(false)
	expect(isError(Number)).toBe(false)
	expect(isError(Object)).toBe(false)
	expect(isError(Promise)).toBe(false)
	expect(isError(String)).toBe(false)
	expect(isError(Symbol)).toBe(false)
})
