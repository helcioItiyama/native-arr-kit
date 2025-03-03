import * as React from 'react';

import { NativeArrKitViewProps } from './NativeArrKit.types';

export default function NativeArrKitView(props: NativeArrKitViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
