import { BoolPredicate } from "./NativeArrKit.types";
import NativeArrKitModule from "./NativeArrKitModule";

export * from "./NativeArrKit.types";

/**
 * It zips two arrays into an array of tuples.
 * @param arr1 Ex: ["one", "two", "three"]
 * @param arr2 Ex: [1, 2, 3]
 * @returns Ex: [["one", 1], ["two", 2], ["three", 3]]
 */
export function zip<T, S>(arr1: T[], arr2: S[]): [T, S][] {
  return NativeArrKitModule.zip(arr1, arr2);
}
/**
 * It partitions an array into two arrays based on a predicate.
 * on IOS the arrays returned are not in the same order as on Android
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param predicate Ex: (value) => value % 2 === 0
 * @returns Ex: [[2, 4], [1, 3, 5]]
 */
export function partition<T>(
  arr: T[],
  predicate: BoolPredicate<T>,
): [T[], T[]] {
  return NativeArrKitModule.partition(arr, predicate);
}
/**
 * It drops the first n elements from an array.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param n Ex: 2
 * @returns Ex: [3, 4, 5]
 */
export function dropFirst<T>(arr: T[], n: number): T[] {
  return NativeArrKitModule.dropFirst(arr, n);
}
/**
 * It drops the last n elements from an array.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param n Ex: 2
 * @returns Ex: [1, 2, 3]
 */
export function dropLast<T>(arr: T[], n: number): T[] {
  return NativeArrKitModule.dropLast(arr, n);
}
/**
 * It drops elements from an array until the predicate returns false.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param predicate Ex: (value) => value < 3
 * @returns Ex: [3, 4, 5]
 */
export function dropWhile<T>(arr: T[], predicate: BoolPredicate<T>): T[] {
  return NativeArrKitModule.dropWhile(arr, predicate);
}
/**
 * It takes the first n elements from an array.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param n Ex: 2
 * @returns Ex: [1, 2]
 */
export function takeFirst<T>(arr: T[], n: number): T[] {
  return NativeArrKitModule.takeFirst(arr, n);
}
/**
 * It takes the last n elements from an array.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param n Ex: 2
 * @returns Ex: [4, 5]
 */
export function takeLast<T>(arr: T[], n: number): T[] {
  return NativeArrKitModule.takeLast(arr, n);
}
/**
 * It takes elements from an array until the predicate returns false.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param predicate Ex: (value) => value < 3
 * @returns Ex: [1, 2]
 */
export function takeWhile<T>(arr: T[], predicate: BoolPredicate<T>): T[] {
  return NativeArrKitModule.takeWhile(arr, predicate);
}
/**
 * It removes an element from an array at a given index.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @param index Ex: 2
 * @returns Ex: [1, 2, 4, 5]
 */
export function removeAt<T>(arr: T[], index: number): T[] {
  return NativeArrKitModule.removeAt(arr, index);
}
/**
 * It shuffles an array.
 * @param arr Ex: [1, 2, 3, 4, 5]
 * @returns Ex: [3, 1, 5, 2, 4]
 */
export function shuffle<T>(arr: T[]): T[] {
  return NativeArrKitModule.shuffle(arr);
}
