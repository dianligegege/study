const isFunction = variable => typeof variable === 'function';
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor (handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }

    // 添加状态
    this._status = PENDING
    // 添加状态
    this._value = undefined
    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this)) 
    } catch (err) {
      this._reject(err)
    }
  }

  _resolve (val) {
    if (this._status !== PENDING) return;
    this._status = FULFILLED;
    this._value = val;
  }

  _reject (err) {
    if (this._status !== PENDING) return;
    this._status = REJECTED;
    this._value = err;
  }
}

export default MyPromise;