import { isSymbol } from '../src/index'

test('isSymbol', () => {
	expect(isSymbol(Symbol())).toBe(true)
})

test('NOT isSymbol', () => {
	expect(isSymbol('')).toBe(false)
	expect(isSymbol([])).toBe(false)
	expect(isSymbol({})).toBe(false)
	expect(isSymbol(0)).toBe(false)
	expect(isSymbol(false)).toBe(false)
	expect(isSymbol(null)).toBe(false)
	expect(isSymbol(true)).toBe(false)
	expect(isSymbol(undefined)).toBe(false)
	expect(isSymbol(void 0)).toBe(false)

	expect(isSymbol(Array)).toBe(false)
	expect(isSymbol(ArrayBuffer)).toBe(false)
	expect(isSymbol(BigInt)).toBe(false)
	expect(isSymbol(Blob)).toBe(false)
	expect(isSymbol(Boolean)).toBe(false)
	expect(isSymbol(Buffer)).toBe(false)
	expect(isSymbol(Date)).toBe(false)
	expect(isSymbol(Error)).toBe(false)
	expect(isSymbol(Function)).toBe(false)
	expect(isSymbol(Infinity)).toBe(false)
	expect(isSymbol(NaN)).toBe(false)
	expect(isSymbol(Number)).toBe(false)
	expect(isSymbol(Object)).toBe(false)
	expect(isSymbol(Promise)).toBe(false)
	expect(isSymbol(String)).toBe(false)
	expect(isSymbol(Symbol)).toBe(false)
})
