type ValidationOptions = {
  message: string
}

export type Validator = (value: any) => boolean | string

export function validate<T extends object>(
  validator: Validator,
  options: ValidationOptions
) {
  return (target: T, propertyKey: string) => {
    const backingField = `__${propertyKey}`

    type BackingFieldType = { [K in typeof backingField]: any }
    const targetWithBackingField = target as T & BackingFieldType

    Object.defineProperty(targetWithBackingField, backingField, {
      writable: true,
      enumerable: false,
      configurable: true,
      value: undefined
    })

    Object.defineProperty(target, propertyKey, {
      get: () => targetWithBackingField[backingField],
      set: (value: any) => {
        if (!validator(value)) {
          console.error(options.message)
          return
        }
        ;(targetWithBackingField as any)[backingField] = value
      },
      enumerable: true,
      configurable: true
    })
  }
}
