import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Botao({evento, nomeBotao}) { 
    return(
    <TouchableOpacity className="flex items-center justify-center bg-[#230565] cursor-pointer rounded-lg h-14 w-48" onPress={evento}>
        <Text className="text-slate-50">{nomeBotao}</Text>
    </TouchableOpacity>
    )
}