import { registerWebModule, NativeModule } from 'expo';

import { NativeArrKitModuleEvents } from './NativeArrKit.types';

class NativeArrKitModule extends NativeModule<NativeArrKitModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(NativeArrKitModule);
