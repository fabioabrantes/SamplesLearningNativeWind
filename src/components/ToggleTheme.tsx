import { Switch, Text, View } from "react-native";
import {useColorScheme} from 'nativewind';

import colors from 'tailwindcss/colors';

export function ToggleTheme(){

  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <View className="flex-row items-center">
      <Text className="text-yellow-500">
        Dark
      </Text>

      <Switch 
        trackColor={{true:colors.blue[500], false:colors.yellow[500]}}
        onValueChange={toggleColorScheme}
        thumbColor={colorScheme === 'light'? colors.blue[900] : colors.yellow[900]}
        value={colorScheme==='light'}
      />

      <Text className="text-blue-500">
        Light
      </Text>
    </View>
  )
}