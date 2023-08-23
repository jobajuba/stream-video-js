import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { ColorValue } from 'react-native/types';

type Props = {
  color: ColorValue;
};

export const Back = ({ color }: Props) => (
  <Svg viewBox="0 0 24 26">
    <Path
      d="M 8.36621 11.6543 C 8.36621 11.9531 8.48047 12.208 8.71777 12.4365 L 15.5732 19.1426 C 15.7578 19.3359 16.0039 19.4326 16.2852 19.4326 C 16.8564 19.4326 17.3047 18.9932 17.3047 18.4131 C 17.3047 18.1318 17.1904 17.877 16.9971 17.6836 L 10.8184 11.6543 L 16.9971 5.625 C 17.1904 5.42285 17.3047 5.16797 17.3047 4.88672 C 17.3047 4.31543 16.8564 3.87598 16.2852 3.87598 C 16.0039 3.87598 15.7578 3.97266 15.5732 4.16602 L 8.71777 10.8721 C 8.48047 11.1006 8.375 11.3555 8.36621 11.6543 Z"
      fill={color}
    />
  </Svg>
);
