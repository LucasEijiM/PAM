import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Botao from './src/componentes/botao';
import ResultCard from './src/componentes/resulCard';

export default function App() {

  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [showResult, setShowResult] = useState(false);

  const verificar = () => {
      if (etanol && gasolina) {
        setShowResult(true);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.texto}>Álcool ou Gasolina</Text>
      </View>
      <View style={styles.caixa2} />
      <Image
        source={require('./assets/shell.png')}
        style={styles.logoLocal}
      />
      <Text style={styles.texto2}>Preço do Etanol (R$):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEtanol}
        value={etanol}
      />
      <Text style={styles.texto3}>Preço do Gasolina (R$):</Text>
      <TextInput
        style={styles.input2}
        onChangeText={setGasolina}
        value={gasolina}
      />
      
      

      <Botao
          title="Verificar Vantagem"  
          onPress={verificar}
      />

     {showResult && (
        <ResultCard
          etanol={parseFloat(etanol)}
          gasolina={parseFloat(gasolina)}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa: {
    backgroundColor: '#FFEF00',
    position: 'absolute',
    top: 0,
    width: 300,
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 260
  },
  input2: {
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 330
  },
  caixa2: {
    backgroundColor: '#FF141E',
    position: 'absolute',
    top: 80,
    width: 300,
    height: 10,
  },
  texto: {
    fontSize: 34,
    color: '#FF141E',
  },
  texto2: {
    fontSize: 18,
    position: 'absolute',
    top: 230
  },
  texto3: {
    fontSize: 18,
    position: 'absolute',
    top: 300
  },
  logoLocal: {
    width: 192,
    height: 108,
    position: 'absolute',
    top: 100
  },
});
