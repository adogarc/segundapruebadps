import React, {Component} from 'react'
import { View } from 'react-native'

class ListadoResultados extends Component {
  render() {
    return (
      <View>
      {this.props.resultados.map((elemento) => (
        <Texto>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado} </Texto>
      ))}
    </View>      
    )
  }

}

export default ListadoResultados;