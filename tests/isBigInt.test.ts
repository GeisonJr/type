import { isBigInt } from '../src/index'

test('isBigInt', () => {
	expect(isBigInt(BigInt(0))).toBe(true)
})

test('NOT isBigInt', () => {
	expect(isBigInt('')).toBe(false)
	expect(isBigInt([])).toBe(false)
	expect(isBigInt({})).toBe(false)
	expect(isBigInt(0)).toBe(false)
	expect(isBigInt(false)).toBe(false)
	expect(isBigInt(null)).toBe(false)
	expect(isBigInt(true)).toBe(false)
	expect(isBigInt(undefined)).toBe(false)
	expect(isBigInt(void 0)).toBe(false)

	expect(isBigInt(Array)).toBe(false)
	expect(isBigInt(ArrayBuffer)).toBe(false)
	expect(isBigInt(BigInt)).toBe(false)
	expect(isBigInt(Blob)).toBe(false)
	expect(isBigInt(Boolean)).toBe(false)
	expect(isBigInt(Buffer)).toBe(false)
	expect(isBigInt(Date)).toBe(false)
	expect(isBigInt(Error)).toBe(false)
	expect(isBigInt(Function)).toBe(false)
	expect(isBigInt(Infinity)).toBe(false)
	expect(isBigInt(NaN)).toBe(false)
	expect(isBigInt(Number)).toBe(false)
	expect(isBigInt(Object)).toBe(false)
	expect(isBigInt(Promise)).toBe(false)
	expect(isBigInt(String)).toBe(false)
	expect(isBigInt(Symbol)).toBe(false)
})
