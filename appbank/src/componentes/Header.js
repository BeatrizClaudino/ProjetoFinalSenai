import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Header() {
    return (
        <View className="bg-[#104677] w-screen h-52">
            <View className="flex flex-row p-6 space-x-28">
                <View className="flex flex-row ">
                    <Image source={require('../../assets/User.png')} />
                    <Text className="text-cyan-50 pt-6 pl-2 text-[15px]">Hello user</Text>
                </View>
                <View className="flex flex-row space-x-2 pt-5">
                    <Image source={require('../../assets/closeeye.png')} />
                    <Image source={require('../../assets/questao.png')} />
                    <Image source={require('../../assets/mensagens.png')} />
                </View>
            </View>
        </View>
    )
}