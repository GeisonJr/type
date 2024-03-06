/**
 * Check if the value is an array
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isArray<T>(value: unknown): value is Array<T> {
	return Array.isArray(value)
}

/**
 * Check if the value is an ArrayBuffer
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isArrayBuffer(value: unknown): value is ArrayBuffer {
	if (isNothing(value)) return false

	return false || value instanceof ArrayBuffer
}

/**
 * Check if the value is a BigInt
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isBigInt(value: unknown): value is BigInt {
	if (isNothing(value)) return false

	return false || value instanceof BigInt || typeof value === 'bigint'
}

/**
 * Check if the value is a boolean
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isBoolean(value: unknown): value is boolean {
	if (isNothing(value)) return false

	return false || value instanceof Boolean || typeof value === 'boolean'
}

/**
 * Check if the value is a Blob
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isBlob(value: unknown): value is Blob {
	if (isNothing(value)) return false

	return false || value instanceof Blob
}

/**
 * Check if the value is a Buffer
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isBuffer(value: unknown): value is Buffer {
	return Buffer.isBuffer(value)
}

/**
 * Check if the value is a Date
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isDate(value: unknown): value is Date {
	if (isNothing(value)) return false

	return false || value instanceof Date
}

/**
 * Check if the value is an enum
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isEnum<T extends Record<string, unknown>>(
	value: unknown,
	enumObject: T,
): value is T[keyof T] {
	if (isNothing(value)) return false

	return false || Object.values(enumObject).includes(value as T[keyof T])
}

/**
 * Check if the value is an Error
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isError(value: unknown): value is Error {
	if (isNothing(value)) return false

	return false || value instanceof Error
}

/**
 * Check if the value is a function
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isFunction(value: unknown): value is Function {
	if (isNothing(value)) return false

	return false || value instanceof Function || typeof value === 'function'
}

/**
 * Check if the value is null, undefined or void
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isNothing(value: unknown): value is null | undefined | void {
	return isNullOrUndefined(value) || isVoid(value)
}

/**
 * Check if the value is a null
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isNull(value: unknown): value is null {
	return false || value === null
}

/**
 * Check if the value is a null or undefined
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
	return false || isNull(value) || isUndefined(value)
}

/**
 * Check if the value is a number
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isNumber(value: unknown): value is number {
	if (isNothing(value)) return false

	return false || value instanceof Number || typeof value === 'number'
}

/**
 * Check if the value is an object
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isObject(value: unknown): value is object {
	if (isNothing(value)) return false

	return false || value instanceof Object || typeof value === 'object'
}

/**
 * Check if the value is an promise
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isPromise<T>(value: unknown): value is Promise<T> {
	if (isNothing(value)) return false

	return false || value instanceof Promise
}

/**
 * Check if the value is a RegExp
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isRegExp(value: unknown): value is RegExp {
	if (isNothing(value)) return false

	return false || value instanceof RegExp
}

/**
 * Check if the value is a string
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isString(value: unknown): value is string {
	if (isNothing(value)) return false

	return false || value instanceof String || typeof value === 'string'
}

/**
 * Check if the value is a symbol
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isSymbol(value: unknown): value is Symbol {
	if (isNothing(value)) return false

	return false || value instanceof Symbol || typeof value === 'symbol'
}

/**
 * Check if the value is an undefined
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isUndefined(value: unknown): value is undefined {
	return false || value === undefined || typeof value === 'undefined'
}

/**
 * Check if the value is an URL
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isURL(value: unknown): value is URL {
	if (isNothing(value)) return false

	return false || value instanceof URL
}

/**
 * Check if the value is an URLSearchParams
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isURLSearchParams(value: unknown): value is URLSearchParams {
	if (isNothing(value)) return false

	return false || value instanceof URLSearchParams
}

/**
 * Check if the value is void
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isVoid(value: unknown): value is void {
	return value === void 0
}
