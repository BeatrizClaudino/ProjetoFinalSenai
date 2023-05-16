import { View, Text, Image } from 'react-native';
import olhoFechado from '../../assets/closeeye.png'
import { TouchableOpacity } from 'react-native';

const Header = props =>{
    return (
        <View className=" bg-[#430d9b] w-screen h-[25vh]">
            <View className="p-5 flex flex-row space-x-28">
                <View className="flex flex-row">
                    <Image source={require('../../assets/User.png')} />
                    <Text className="text-cyan-50 pt-6 pl-2 text-[15px]">Hello user</Text>
                </View>
                <View className="flex flex-row space-x-5 pt-5">
                    <TouchableOpacity>
                        <Image source={olhoFechado} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/interrogacao.png')} />
                    <Image source={require('../../assets/mensagem.png')} />
                </View>
            </View>
            <View className="w-screen flex items-center">
                <View className="flex justify-center pl-8 bg-white w-[90%] h-14 rounded-lg">
                    <Text>Saldo em conta</Text>
                    <Text>R$ 3.000,00</Text>
                </View>
            </View>
        </View>
    )
}
export default Header