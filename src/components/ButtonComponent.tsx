import {
  Text,
  TouchableOpacity
} from 'react-native';

import {StyledComponent} from 'nativewind';


export function ButtonComponent({...rest}){
  return (
    <StyledComponent component={TouchableOpacity} {...rest}>
      <TouchableOpacity className='h-14 bg-green-500 rounded-md items-center justify-center' {...rest}>
        <Text className='text-white font-bold text-md'>
          Sair
        </Text>
      </TouchableOpacity>
    </StyledComponent>
  );
}
