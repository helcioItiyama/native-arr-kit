// Reexport the native module. On web, it will be resolved to NativeArrKitModule.web.ts
// and on native platforms to NativeArrKitModule.ts
export { default } from './NativeArrKitModule';
export { default as NativeArrKitView } from './NativeArrKitView';
export * from  './NativeArrKit.types';
