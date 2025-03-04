import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { iconPaths } from './iconPaths';
import { cn } from '@/lib/utils';
import { cssInterop } from 'nativewind';
cssInterop(Svg, { className: 'style' });
cssInterop(View, { className: 'style' });

interface IconProps {
  name: keyof typeof iconPaths;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ name, size = 24, color, className }: IconProps) => {
  const path = iconPaths[name];

  if (!path) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox='0 0 24 24' className={cn(className)} fill='currentColor' stroke='currentColor'>
        <Path d={path} />
      </Svg>
    </View>
  );
};
