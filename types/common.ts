/**
 * Type to query whether an array type T is a tuple type.
 * @typeParam T - type which may be an array or tuple
 * @example
 * ```
 * IsTuple<[number]> = true
 * IsTuple<number[]> = false
 * ```
 */
 export declare type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;

 /**
  * Type which can be used to index an array or tuple type.
  */
 export declare type ArrayKey = number;

 /**
 * Type which given a tuple type returns its own keys, i.e. only its indices.
 * @typeParam T - tuple type
 * @example
 * ```
 * TupleKeys<[number, string]> = '0' | '1'
 * ```
 */
export declare type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

export declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export declare type BrowserNativeObject = Date | FileList | File;