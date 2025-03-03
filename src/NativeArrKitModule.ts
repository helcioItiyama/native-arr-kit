import { NativeModule, requireNativeModule } from 'expo';

import { NativeArrKitModuleEvents } from './NativeArrKit.types';

declare class NativeArrKitModule extends NativeModule<NativeArrKitModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<NativeArrKitModule>('NativeArrKit');
