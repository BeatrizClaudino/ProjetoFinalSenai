import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Botao({evento}){
    return(
    <TouchableOpacity className="bg-black h-10 w-48" onPress={evento}>
        <Text>AAAAAAAAAAA</Text>
    </TouchableOpacity>
    )
}