import { View, Text, TouchableOpacity, Image } from "react-native";

const Menu = props => {
    return (
    <View className="items-center">
        <TouchableOpacity className="flex items-center justify-center bg-[#3734B9] w-[65px] h-[48px] rounded-md">
            <Image source={props.imagem} />
        </TouchableOpacity>
            <Text>{props.textoFuncao}</Text>
    </View>

    )
}
export default Menu;  