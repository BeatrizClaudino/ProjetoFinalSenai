import { View, Text, Image } from 'react-native';
import olhoFechado from '../../assets/closeeye.png'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import olhoAberto from '../../assets/eye.png'

const Header1 = props =>{
    const [exibirSaldo, setExibirSaldo] = useState(false)
    const [saldo, setSaldo] = useState('3000')

    function trocarolho(){
        setExibirSaldo(!exibirSaldo)
    }
    return (
        <View className=" bg-[#430d9b] w-screen h-[25vh]">
            <View className="p-5 flex flex-row space-x-28">
                <View className="flex flex-row">
                    <Image source={require('../../assets/User.png')} />
                    <Text className="text-cyan-50 pt-6 pl-2 text-[15px]">Hello user</Text>
                </View>
                <View className="flex flex-row space-x-5 pt-5">
                    <TouchableOpacity onPress={trocarolho}>
                        <Image source={exibirSaldo ? olhoAberto : olhoFechado} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/interrogacao.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/mensagem.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-screen flex items-center">
                <View className="flex justify-center pl-8 bg-white w-[90%] h-14 rounded-lg">
                    <Text>Saldo em conta</Text>
                    <Text>{exibirSaldo ? saldo : "****" }</Text>
                </View>
            </View>
        </View>
    )
}
export default Header1