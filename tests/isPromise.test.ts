import { isPromise } from '../src/index'

test('isPromise', () => {
	expect(isPromise(new Promise(() => {}))).toBe(true)
})

test('NOT isPromise', () => {
	expect(isPromise('')).toBe(false)
	expect(isPromise([])).toBe(false)
	expect(isPromise({})).toBe(false)
	expect(isPromise(0)).toBe(false)
	expect(isPromise(false)).toBe(false)
	expect(isPromise(null)).toBe(false)
	expect(isPromise(true)).toBe(false)
	expect(isPromise(undefined)).toBe(false)
	expect(isPromise(void 0)).toBe(false)

	expect(isPromise(Array)).toBe(false)
	expect(isPromise(ArrayBuffer)).toBe(false)
	expect(isPromise(BigInt)).toBe(false)
	expect(isPromise(Blob)).toBe(false)
	expect(isPromise(Boolean)).toBe(false)
	expect(isPromise(Buffer)).toBe(false)
	expect(isPromise(Date)).toBe(false)
	expect(isPromise(Error)).toBe(false)
	expect(isPromise(Function)).toBe(false)
	expect(isPromise(Infinity)).toBe(false)
	expect(isPromise(NaN)).toBe(false)
	expect(isPromise(Number)).toBe(false)
	expect(isPromise(Object)).toBe(false)
	expect(isPromise(Promise)).toBe(false)
	expect(isPromise(String)).toBe(false)
	expect(isPromise(Symbol)).toBe(false)
})
