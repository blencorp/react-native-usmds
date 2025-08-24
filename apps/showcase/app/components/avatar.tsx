import { ScrollView, View } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from '../../../storybook/components/Avatar/Avatar';
import { Text } from '../../../storybook/components/Text/Text';

const GITHUB_AVATAR_URI = 'https://github.com/mrzachnugent.png';
const PLACEHOLDER_AVATAR = 'https://i.pravatar.cc/150';

export default function AvatarScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full max-w-[393px] mx-auto'>
        
        {/* Basic Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Avatar</Text>
          <View className='space-y-4'>
            {/* With Image */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>With Image</Text>
              <View className='flex-row gap-4'>
                <Avatar alt="User Avatar">
                  <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                  <AvatarFallback>
                    <Text>ZN</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
            </View>

            {/* With Fallback */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>With Fallback</Text>
              <View className='flex-row gap-4'>
                <Avatar alt="John Doe">
                  <AvatarImage source={{ uri: 'invalid-image-url' }} />
                  <AvatarFallback>
                    <Text>JD</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
            </View>
          </View>
        </View>

        {/* Size Variations */}
        <View>
          <Text className='text-lg font-bold mb-4'>Size Variations</Text>
          <View className='flex-row items-center gap-4'>
            {/* Extra Small */}
            <Avatar alt="XS Avatar" className="h-6 w-6">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=1` }} />
              <AvatarFallback>
                <Text className="text-xs">XS</Text>
              </AvatarFallback>
            </Avatar>

            {/* Small */}
            <Avatar alt="SM Avatar" className="h-8 w-8">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=2` }} />
              <AvatarFallback>
                <Text className="text-sm">SM</Text>
              </AvatarFallback>
            </Avatar>

            {/* Default */}
            <Avatar alt="Default Avatar">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=3` }} />
              <AvatarFallback>
                <Text>MD</Text>
              </AvatarFallback>
            </Avatar>

            {/* Large */}
            <Avatar alt="LG Avatar" className="h-12 w-12">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=4` }} />
              <AvatarFallback>
                <Text className="text-lg">LG</Text>
              </AvatarFallback>
            </Avatar>

            {/* Extra Large */}
            <Avatar alt="XL Avatar" className="h-16 w-16">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=5` }} />
              <AvatarFallback>
                <Text className="text-xl">XL</Text>
              </AvatarFallback>
            </Avatar>
          </View>
        </View>

        {/* Color Variations */}
        <View>
          <Text className='text-lg font-bold mb-4'>Color Variations</Text>
          <View className='flex-row flex-wrap gap-4'>
            {/* Primary */}
            <Avatar alt="Primary Avatar">
              <AvatarImage source={{ uri: 'invalid-url' }} />
              <AvatarFallback className="bg-primary">
                <Text className="text-primary-foreground">PR</Text>
              </AvatarFallback>
            </Avatar>

            {/* Secondary */}
            <Avatar alt="Secondary Avatar">
              <AvatarImage source={{ uri: 'invalid-url' }} />
              <AvatarFallback className="bg-secondary">
                <Text className="text-secondary-foreground">SC</Text>
              </AvatarFallback>
            </Avatar>

            {/* Error */}
            <Avatar alt="Error Avatar">
              <AvatarImage source={{ uri: 'invalid-url' }} />
              <AvatarFallback className="bg-error">
                <Text className="text-white">ER</Text>
              </AvatarFallback>
            </Avatar>

            {/* Success */}
            <Avatar alt="Success Avatar">
              <AvatarImage source={{ uri: 'invalid-url' }} />
              <AvatarFallback className="bg-success">
                <Text className="text-white">SU</Text>
              </AvatarFallback>
            </Avatar>

            {/* Warning */}
            <Avatar alt="Warning Avatar">
              <AvatarImage source={{ uri: 'invalid-url' }} />
              <AvatarFallback className="bg-warning">
                <Text className="text-black">WA</Text>
              </AvatarFallback>
            </Avatar>

            {/* Info */}
            <Avatar alt="Info Avatar">
              <AvatarImage source={{ uri: 'invalid-url' }} />
              <AvatarFallback className="bg-info">
                <Text className="text-white">IN</Text>
              </AvatarFallback>
            </Avatar>
          </View>
        </View>

        {/* Avatar Group */}
        <View>
          <Text className='text-lg font-bold mb-4'>Avatar Group</Text>
          <View className='space-y-4'>
            {/* Horizontal Group */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Horizontal Stack</Text>
              <View className='flex-row -space-x-3'>
                <Avatar alt="User 1" className="border-2 border-background">
                  <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=10` }} />
                  <AvatarFallback>
                    <Text>U1</Text>
                  </AvatarFallback>
                </Avatar>
                <Avatar alt="User 2" className="border-2 border-background">
                  <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=11` }} />
                  <AvatarFallback>
                    <Text>U2</Text>
                  </AvatarFallback>
                </Avatar>
                <Avatar alt="User 3" className="border-2 border-background">
                  <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=12` }} />
                  <AvatarFallback>
                    <Text>U3</Text>
                  </AvatarFallback>
                </Avatar>
                <Avatar alt="More users" className="border-2 border-background">
                  <AvatarFallback className="bg-muted">
                    <Text className="text-muted-foreground text-xs">+5</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
            </View>

            {/* With Spacing */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>With Spacing</Text>
              <View className='flex-row gap-2'>
                <Avatar alt="User A">
                  <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=20` }} />
                  <AvatarFallback>
                    <Text>UA</Text>
                  </AvatarFallback>
                </Avatar>
                <Avatar alt="User B">
                  <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=21` }} />
                  <AvatarFallback>
                    <Text>UB</Text>
                  </AvatarFallback>
                </Avatar>
                <Avatar alt="User C">
                  <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=22` }} />
                  <AvatarFallback>
                    <Text>UC</Text>
                  </AvatarFallback>
                </Avatar>
              </View>
            </View>
          </View>
        </View>

        {/* Avatar with Status */}
        <View>
          <Text className='text-lg font-bold mb-4'>With Status Indicator</Text>
          <View className='flex-row gap-4'>
            {/* Online */}
            <View className='relative'>
              <Avatar alt="Online User">
                <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=30` }} />
                <AvatarFallback>
                  <Text>ON</Text>
                </AvatarFallback>
              </Avatar>
              <View className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-background' />
            </View>

            {/* Away */}
            <View className='relative'>
              <Avatar alt="Away User">
                <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=31` }} />
                <AvatarFallback>
                  <Text>AW</Text>
                </AvatarFallback>
              </Avatar>
              <View className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-warning border-2 border-background' />
            </View>

            {/* Busy */}
            <View className='relative'>
              <Avatar alt="Busy User">
                <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=32` }} />
                <AvatarFallback>
                  <Text>BS</Text>
                </AvatarFallback>
              </Avatar>
              <View className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-error border-2 border-background' />
            </View>

            {/* Offline */}
            <View className='relative'>
              <Avatar alt="Offline User">
                <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=33` }} />
                <AvatarFallback>
                  <Text>OF</Text>
                </AvatarFallback>
              </Avatar>
              <View className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-muted border-2 border-background' />
            </View>
          </View>
        </View>

        {/* Square Avatar */}
        <View>
          <Text className='text-lg font-bold mb-4'>Square Variant</Text>
          <View className='flex-row gap-4'>
            <Avatar alt="Square Avatar" className="rounded-lg">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=40` }} />
              <AvatarFallback className="rounded-lg">
                <Text>SQ</Text>
              </AvatarFallback>
            </Avatar>
            <Avatar alt="Rounded Square" className="rounded-md">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=41` }} />
              <AvatarFallback className="rounded-md">
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
            <Avatar alt="Sharp Square" className="rounded-none">
              <AvatarImage source={{ uri: `${PLACEHOLDER_AVATAR}?img=42` }} />
              <AvatarFallback className="rounded-none">
                <Text>SS</Text>
              </AvatarFallback>
            </Avatar>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}