import { NativeModule, requireNativeModule } from "expo";

import { BoolPredicate } from "./NativeArrKit.types";

declare class NativeArrKitModule extends NativeModule {
  zip<T, S>(arr1: T[], arr2: S[]): [T, S][];
  partition<T>(arr: T[], predicate: BoolPredicate<T>): [T[], T[]];
  dropFirst<T>(arr: T[], n: number): T[];
  dropLast<T>(arr: T[], n: number): T[];
  dropWhile<T>(arr: T[], predicate: BoolPredicate<T>): T[];
  takeFirst<T>(arr: T[], n: number): T[];
  takeLast<T>(arr: T[], n: number): T[];
  takeWhile<T>(arr: T[], predicate: BoolPredicate<T>): T[];
  removeAt<T>(arr: T[], index: number): T[];
  shuffle<T>(arr: T[]): T[];
}

// This call loads the native module object from the JSI.
export default requireNativeModule<NativeArrKitModule>("NativeArrKit");
