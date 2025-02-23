import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { iconPaths } from './iconPaths';

interface IconProps {
  name: keyof typeof iconPaths;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color = '#000000' }: IconProps) => {
  const path = iconPaths[name];

  if (!path) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
        <Path d={path} fill={color} />
      </Svg>
    </View>
  );
};
