import React,{Component} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {View, Text,Button,TextInput,StyleSheet} from 'react-native';

export default class Suma extends Component
{

    constructor(props)
    {
        super(props);
        this.state={Num1:0,Num2:0};
    }  
    calcular=()=>{
        var numero1=parseInt(this.state.Num1);
        var numero2=parseInt(this.state.Num2);

        if(!numero1 && isNaN(numero1)){
            alert("debes ingresar un numero");
        } else if(!numero2 && isNaN(numero2)){
            alert("Debes ingresar un numero");
        }else{
        var resultado=numero1 *numero2;
        alert("La Multiplicacion entre "+numero1+ " y el numero " +numero2+" es: "+resultado);
        }

    }
    render()
    {
        return(
            <View>
                <View>
                    <Text style={styles.titulo} >Binvenido a tu calculadora</Text>
                </View>
                <View>
                    <Text style={styles.enunciado}>Ingrese su primer número</Text>
                    <TextInput onChangeText={(Num1)=>this.setState({Num1})} style={styles.numeros} placeholder="Ingresar numero" keyboardType="numeric" ></TextInput>
                </View>
                <View>
                    <Text style={styles.enunciado}>Ingrese su segundo número</Text>
                    <TextInput onChangeText={Num2=>this.setState({Num2})} style={styles.numeros} placeholder="Ingresar numero" keyboardType="numeric" ></TextInput>
                    <Button title="Calcular" onPress={this.calcular}/>
                </View>
                <View>
                       
                </View>
            </View>
            
            
        );
    }
}
const styles=StyleSheet.create({
    titulo:{
        fontSize:24,
        textAlign:'center',
        marginTop:40,
    },
    enunciado:{
        fontSize:15,
        marginTop:40,
        textAlign:'center',
    },
    numeros:{
        height: 50, 
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: 'blue', 
        borderRadius: 5, 
        width: '60%', 
        marginRight: 5, 
        marginLeft: -5, 
        marginBottom: 10, 
        color: '#000', 
        marginTop:20,
        marginEnd:20,
       alignSelf:'center',
        paddingHorizontal: 30, 
    }
});