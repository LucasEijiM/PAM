import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultCard = ({ etanol, gasolina }) => {
  const percentual = ((etanol / gasolina) * 100).toFixed(1);
  const recomendacao = etanol / gasolina < 0.7 ? 'ETANOL' : 'GASOLINA';

  return (
    <View style={styles.caixa4}>
      <View style={styles.caixa3}>
        <Text style={styles.titulo}>Abasteça com: {recomendacao}</Text>
        <Text style={styles.descricao}>
          O etanol está custando {percentual}% da gasolina.
        </Text>
        <Text style={styles.descricao}>
          {etanol / gasolina < 0.7
            ? 'Abaixo de 70%, o etanol compensa!'
            : 'Acima de 70%, prefira a gasolina.'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  caixa4: {
    backgroundColor: '#FF141E',
    position: 'absolute',
    top: 485,
    width: 280,
    height: 150,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa3: {
    backgroundColor: '#FFEF00',
    width: 270,
    height: 140,
    borderRadius: 6,
    padding: 14,
    justifyContent: 'center',
    gap: 6,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FF141E',
  },
  descricao: {
    fontSize: 14,
    color: '#333',
  },
});

export default ResultCard;
