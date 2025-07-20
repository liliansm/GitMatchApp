import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { logout } from '../service/authService'; 
export default function SettingsCompanyScreen({ navigation }) {
  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  const handleDeleteAccount = () => {
    Alert.alert('Confirmação', 'Tem certeza que deseja excluir sua conta?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', style: 'destructive', onPress: () => console.log('Conta excluída') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1e293b" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      {/* Lista de opções */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('EditCompanyProfile')}
      >
        <Feather name="user" size={20} color="#1d4ed8" style={styles.icon} />
        <Text style={styles.optionText}>Alterar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('UpdatePassword')}
      >
        <MaterialIcons name="lock-outline" size={20} color="#1d4ed8" style={styles.icon} />
        <Text style={styles.optionText}>Alterar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#1d4ed8" style={styles.icon} />
        <Text style={styles.optionText}>Sair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, styles.delete]} onPress={handleDeleteAccount}>
        <FontAwesome5 name="trash-alt" size={18} color="#dc2626" style={styles.icon} />
        <Text style={[styles.optionText, { color: '#dc2626' }]}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 12,
    color: '#1e293b',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
  },
  icon: {
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  delete: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fca5a5',
  },
});
