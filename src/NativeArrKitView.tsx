import { requireNativeView } from 'expo';
import * as React from 'react';

import { NativeArrKitViewProps } from './NativeArrKit.types';

const NativeView: React.ComponentType<NativeArrKitViewProps> =
  requireNativeView('NativeArrKit');

export default function NativeArrKitView(props: NativeArrKitViewProps) {
  return <NativeView {...props} />;
}
