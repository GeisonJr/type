<p align="center">
  <a href="https://geison.dev/">
    <img width="100" src="https://geison.dev/assets/icons/logo.svg" alt="Logo" />
  </a>
</p>

<h1 align="center">
	Typefy Library
</h1>
<div align="center">

Easy to use, fast and lightweight library for Node.js.

</div>

<div align="center">

[![CI](https://github.com/GeisonJr/typefy/actions/workflows/ci.yaml/badge.svg)](https://github.com/GeisonJr/typefy/actions/workflows/ci.yaml)
[![CD](https://github.com/GeisonJr/typefy/actions/workflows/cd.yaml/badge.svg)](https://github.com/GeisonJr/typefy/actions/workflows/cd.yaml)
[![LICENSE](https://img.shields.io/github/license/geisonjr/typefy?style=flat)](https://github.com/GeisonJr/typefy/blob/main/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@geisonjr/typefy?style=flat)](https://npmjs.com/package/@geisonjr/typefy)
[![NPM downloads](https://img.shields.io/npm/dt/@geisonjr/typefy?style=flat)](https://npmjs.com/package/@geisonjr/typefy)

</div>

> [!WARNING]
> This project is under development and is not yet ready for use.

## 🌱 Overview

This library is a collection of functions that help you to check the type of a variable in JavaScript and TypeScript.

## ✨ Features

### Infer the type

- [x] isArray
- [x] isArrayBuffer
- [x] isBigInt
- [x] isBlob
- [x] isBoolean
- [x] isBuffer
- [x] isDate
- [x] isEnum
- [x] isError
- [x] isFunction
- [x] isNothing
- [x] isNull
- [x] isNullOrUndefined
- [x] isNumber
- [x] isObject
- [x] isPromise
- [x] isRegExp
- [x] isString
- [x] isSymbol
- [x] isUndefined
- [x] isURL
- [x] isURLSearchParams
- [x] isVoid

### Check the value

- [x] isFalsy
- [x] isNaNumber
- [x] isTruthy

## 🚀 Tecnologies

The following tools were used in the construction of the project:

- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## 📦 Install

Use the package manager [npm](https://docs.npmjs.com/),
[yarn](https://yarnpkg.com).

```bash
npm install @geisonjr/typefy
```

```bash
yarn add @geisonjr/typefy
```

## 🏗️ Usage

### Example with True Condition

```typescript
import { isBoolean } from '@geisonjr/typefy'

let test: any = true // false

// Is `true` if the value is a boolean type
if (isBoolean(test)) {
	// The intelisense will be recognize the variable as a boolean
	console.log('This is a boolean')
}

// Output: This is a boolean
```

### Example with False Condition

```typescript
import { isNumber } from '@geisonjr/typefy'

let test: any = '123'

// Is `true` if the value is a number type
if (isNumber(test)) {
	// The intelisense will be recognize the variable as a number
	console.log('This is a number')
} else {
	// The intelisense will be recognize the variable not as a number
	console.log('This is not a number')
}

// Output: This is not a number
```

## 📋 License

This project is under the
[MIT License](https://github.com/geisonjr/typefy/blob/master/LICENSE)
