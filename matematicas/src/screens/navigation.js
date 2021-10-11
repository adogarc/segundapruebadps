import React from "react";
import Suma from './suma';
import Resta from './resta';
import Multiplicacion from './multiplicacion';
import Division from './division';
import Factorial from './factorial';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab=createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="suma" component={Suma} options={{title:'Suma'}}/>
            <Tab.Screen name="resta" component={Resta} options={{title:'Resta'}}/>
            <Tab.Screen name="multiplicacion" component={Multiplicacion} options={{title:'Multiplicacion'}}/>
            <Tab.Screen name="division" component={Division} options={{title:'Division'}}/>
            <Tab.Screen name="factorial" component={Factorial} options={{title:'Factorial'}}/>
        </Tab.Navigator>
    );
}