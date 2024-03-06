import {
	isArray,
	isBoolean,
	isNothing,
	isNumber,
	isObject,
	isString,
} from './exactly'

/**
 * Check if the value is a falsy
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isFalsy(value: unknown): boolean {
	if (isNothing(value)) return true
	else if (isBoolean(value)) return !value
	else if (isNumber(value)) return value === 0
	else if (isString(value)) return value === ''
	else if (isArray(value)) return value.length === 0
	else if (isObject(value)) return Object.keys(value).length === 0

	return false
}

/**
 * Check if the value is a not a number
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isNaNumber(value: unknown): boolean {
	return Number.isNaN(Number(value))
}

/**
 * Check if the value is a truthy
 * @version 1.0.0
 * @since 1.0.0
 * @author GeisonJr
 */
export function isTruthy(value: unknown): boolean {
	if (isFalsy(value)) return false

	return true
}
