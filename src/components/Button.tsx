import {
  Text,
  TouchableOpacity
} from 'react-native';

import {styled} from 'nativewind';


export function ButtonStyled({...rest}){
  return (
    <TouchableOpacity className='h-14 bg-green-500 rounded-md items-center justify-center' {...rest}>
      <Text className='text-white font-bold text-md'>
        Entrar
      </Text>
    </TouchableOpacity>
  );
}
const Button = styled(ButtonStyled);
export {Button}
