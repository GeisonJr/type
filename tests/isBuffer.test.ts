import { isBuffer } from '../src/index'

test('isBuffer', () => {
	expect(isBuffer(new Buffer(''))).toBe(true)
})

test('NOT isBuffer', () => {
	expect(isBuffer('')).toBe(false)
	expect(isBuffer([])).toBe(false)
	expect(isBuffer({})).toBe(false)
	expect(isBuffer(0)).toBe(false)
	expect(isBuffer(false)).toBe(false)
	expect(isBuffer(null)).toBe(false)
	expect(isBuffer(true)).toBe(false)
	expect(isBuffer(undefined)).toBe(false)
	expect(isBuffer(void 0)).toBe(false)

	expect(isBuffer(Array)).toBe(false)
	expect(isBuffer(ArrayBuffer)).toBe(false)
	expect(isBuffer(BigInt)).toBe(false)
	expect(isBuffer(Blob)).toBe(false)
	expect(isBuffer(Boolean)).toBe(false)
	expect(isBuffer(Buffer)).toBe(false)
	expect(isBuffer(Date)).toBe(false)
	expect(isBuffer(Error)).toBe(false)
	expect(isBuffer(Function)).toBe(false)
	expect(isBuffer(Infinity)).toBe(false)
	expect(isBuffer(NaN)).toBe(false)
	expect(isBuffer(Number)).toBe(false)
	expect(isBuffer(Promise)).toBe(false)
	expect(isBuffer(Object)).toBe(false)
	expect(isBuffer(String)).toBe(false)
	expect(isBuffer(Symbol)).toBe(false)
})
