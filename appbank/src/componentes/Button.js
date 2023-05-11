import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Botao({evento}){
    return(
    <TouchableOpacity className="flex items-center justify-center bg-[#3734B9] cursor-pointer hover:bg-violet-600 rounded-full h-14 w-48" onPress={evento}>
        <Text className="text-slate-50">AAAAAAAAAAA</Text>
    </TouchableOpacity>
    )
}