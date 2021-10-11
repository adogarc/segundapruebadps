import React,{Component} from 'react';
import {View, Text,Button,TextInput,StyleSheet} from 'react-native';

export default class Suma extends Component
{

    constructor(props)
    {
        super(props);
        this.state={Num1:0};
    }  
    calcular=()=>{
        var numero1=parseInt(this.state.Num1);
        if(!numero1 && isNaN(numero1)){
            alert("debes ingresar un numero");
        } else{
        var total=1;
        var i=1;
        for(i;i<=numero1;i++){
            total=total*i;
        }
        alert("El factorial del numero "+numero1+" es: "+total);
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
                <Button style={styles.boton} title="Calcular" onPress={this.calcular}/>
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
        marginEnd:20,
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
        marginEnd:50,
        alignSelf:'center',
        paddingHorizontal: 30, 
    },
    boton:{
        marginTop:30,
        paddingTop:200,
        borderRadius:25,
    }
});