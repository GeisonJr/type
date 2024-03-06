import { isBlob } from '../src/index'

test('isBlob', () => {
	expect(isBlob(new Blob())).toBe(true)
})

test('NOT isBlob', () => {
	expect(isBlob('')).toBe(false)
	expect(isBlob([])).toBe(false)
	expect(isBlob({})).toBe(false)
	expect(isBlob(0)).toBe(false)
	expect(isBlob(false)).toBe(false)
	expect(isBlob(null)).toBe(false)
	expect(isBlob(true)).toBe(false)
	expect(isBlob(undefined)).toBe(false)
	expect(isBlob(void 0)).toBe(false)

	expect(isBlob(Array)).toBe(false)
	expect(isBlob(ArrayBuffer)).toBe(false)
	expect(isBlob(BigInt)).toBe(false)
	expect(isBlob(Blob)).toBe(false)
	expect(isBlob(Boolean)).toBe(false)
	expect(isBlob(Buffer)).toBe(false)
	expect(isBlob(Date)).toBe(false)
	expect(isBlob(Error)).toBe(false)
	expect(isBlob(Function)).toBe(false)
	expect(isBlob(Infinity)).toBe(false)
	expect(isBlob(NaN)).toBe(false)
	expect(isBlob(Number)).toBe(false)
	expect(isBlob(Object)).toBe(false)
	expect(isBlob(Promise)).toBe(false)
	expect(isBlob(String)).toBe(false)
	expect(isBlob(Symbol)).toBe(false)
})
