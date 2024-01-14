export abstract class ValueObjectBase<T> {
  protected readonly _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public get value(): T {
    return this._value;
  }

  public equals(vo?: ValueObjectBase<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    return this._value === vo._value;
  }
}
