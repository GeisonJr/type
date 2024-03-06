import { isArrayBuffer } from '../src/index'

test('isArrayBuffer', () => {
	expect(isArrayBuffer(new ArrayBuffer(0))).toBe(true)
})

test('NOT isArrayBuffer', () => {
	expect(isArrayBuffer('')).toBe(false)
	expect(isArrayBuffer([])).toBe(false)
	expect(isArrayBuffer({})).toBe(false)
	expect(isArrayBuffer(0)).toBe(false)
	expect(isArrayBuffer(false)).toBe(false)
	expect(isArrayBuffer(null)).toBe(false)
	expect(isArrayBuffer(true)).toBe(false)
	expect(isArrayBuffer(undefined)).toBe(false)
	expect(isArrayBuffer(void 0)).toBe(false)

	expect(isArrayBuffer(Array)).toBe(false)
	expect(isArrayBuffer(ArrayBuffer)).toBe(false)
	expect(isArrayBuffer(BigInt)).toBe(false)
	expect(isArrayBuffer(Blob)).toBe(false)
	expect(isArrayBuffer(Boolean)).toBe(false)
	expect(isArrayBuffer(Buffer)).toBe(false)
	expect(isArrayBuffer(Date)).toBe(false)
	expect(isArrayBuffer(Error)).toBe(false)
	expect(isArrayBuffer(Function)).toBe(false)
	expect(isArrayBuffer(Infinity)).toBe(false)
	expect(isArrayBuffer(NaN)).toBe(false)
	expect(isArrayBuffer(Number)).toBe(false)
	expect(isArrayBuffer(Object)).toBe(false)
	expect(isArrayBuffer(Promise)).toBe(false)
	expect(isArrayBuffer(String)).toBe(false)
	expect(isArrayBuffer(Symbol)).toBe(false)
})
