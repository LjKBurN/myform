import {
  IsTuple,
  ArrayKey,
  TupleKeys,
  Primitive,
  BrowserNativeObject,
} from './common';

declare type PathImpl<K extends string | number, V> = V extends Primitive | BrowserNativeObject ? `${K}` : `${MyPath<V>}`;

declare type RootPathImpl<K extends string | number, V> = V extends Primitive | BrowserNativeObject ? `${K}` : never;

export declare type MyPath<T> = T extends ReadonlyArray<infer V> ? IsTuple<T> extends true ? {
  [K in TupleKeys<T>]-?: PathImpl<K & string, T[K]>;
}[TupleKeys<T>] : PathImpl<ArrayKey, V> : {
  [K in keyof T]-?: RootPathImpl<K & string, T[K]>;
}[keyof T];