import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import AuthLayout from '../components/AuthLayout';
import axios from 'axios';
import{API_BASE_URL} from '../config';





export default function ResetCodeScreen({ navigation, route }) {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email); // Armazena o e-mail da tela anterior
    }
  }, []);

  const validarCodigo = async () => {

    await axios.post(`${API_BASE_URL}/email/validar-codigo`, { email: email, codigo:code}).then(response => {
      console.log('Código validado com sucesso:', response.data);
       navigation.navigate('NewPassword', {  email: email, codigo:code }); // Navega para a tela de nova senha
    }).catch(error => {
      console.error('Erro ao validar código:', error.response?.data || error.message);
      Alert.alert('Erro', 'Código inválido ou expirado. Tente novamente.');
    });
     
 

    

}


  return (
    <AuthLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Digite o Código</Text>
        <Text style={styles.subtitle}>
          Enviamos um código para seu e-mail. Digite-o abaixo para redefinir sua senha.
        </Text>

        <TextInput
          placeholder="Código de verificação"
          style={styles.input}
          value={code}
          onChangeText={setCode}
        />

        <TouchableOpacity
          style={styles.verifyButton}
           onPress={validarCodigo}
        >
          <Text style={styles.verifyButtonText}>Verificar código</Text>
        </TouchableOpacity>

        <Text style={styles.backText} onPress={() => navigation.goBack()}>
          Voltar
        </Text>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  verifyButton: {
    backgroundColor: '#1d4ed8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backText: {
    color: '#1d4ed8',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
