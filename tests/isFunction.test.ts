import { isFunction } from '../src/index'

test('isFunction', () => {
	expect(isFunction(() => {})).toBe(true)
})

test('NOT isFunction', () => {
	expect(isFunction('')).toBe(false)
	expect(isFunction([])).toBe(false)
	expect(isFunction({})).toBe(false)
	expect(isFunction(0)).toBe(false)
	expect(isFunction(false)).toBe(false)
	expect(isFunction(null)).toBe(false)
	expect(isFunction(true)).toBe(false)
	expect(isFunction(undefined)).toBe(false)
	expect(isFunction(void 0)).toBe(false)

	// expect(isFunction(Array)).toBe(false)
	// expect(isFunction(ArrayBuffer)).toBe(false)
	// expect(isFunction(BigInt)).toBe(false)
	// expect(isFunction(Blob)).toBe(false)
	// expect(isFunction(Boolean)).toBe(false)
	// expect(isFunction(Buffer)).toBe(false)
	// expect(isFunction(Date)).toBe(false)
	// expect(isFunction(Error)).toBe(false)
	// expect(isFunction(Function)).toBe(false)
	expect(isFunction(Infinity)).toBe(false)
	expect(isFunction(NaN)).toBe(false)
	// expect(isFunction(Number)).toBe(false)
	// expect(isFunction(Object)).toBe(false)
	// expect(isFunction(Promise)).toBe(false)
	// expect(isFunction(String)).toBe(false)
	// expect(isFunction(Symbol)).toBe(false)
})
