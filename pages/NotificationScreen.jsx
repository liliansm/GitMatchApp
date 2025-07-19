import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import NavigationMenu from '../components/NavigationMenu';

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      type: 'vaga',
      title: 'Nova vaga',
      subtitle: 'Analista de Sistemas',
      time: 'Há 2h',
      iconColor: '#D19401',
    },
    {
      id: 2,
      type: 'match',
      title: 'Ana Carvalho',
      subtitle: 'É compatível com a vaga de Dev FrontEnd',
      time: 'Há 4h',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      id: 3,
      type: 'vaga',
      title: 'Nova vaga',
      subtitle: 'Analista de Sistemas',
      time: 'Há 6h',
      iconColor: '#D19401',
    },
    {
      id: 4,
      type: 'match',
      title: 'Ana Carvalho',
      subtitle: 'É compatível com a vaga de Dev FrontEnd',
      time: 'Há 9h',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
  ];

  const handleDeleteAccount = () => {
    Alert.alert(
      'Tem certeza?',
      'Deseja mesmo excluir sua conta? Essa ação não poderá ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim, excluir',
          style: 'destructive',
          onPress: () => {
            console.log('Conta excluída');
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Notificações</Text>

        {notifications.map((item) => (
          <View key={item.id} style={styles.notificationBox}>
            {item.type === 'vaga' ? (
              <View
                style={[styles.iconCircle, { backgroundColor: item.iconColor }]}
              />
            ) : (
              <Image source={{ uri: item.image }} style={styles.profileImage} />
            )}

            <View style={styles.textContainer}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationSubtitle}>{item.subtitle}</Text>
            </View>

            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.viewMore}>
          <Text style={styles.viewMoreText}>Ver mais notificações</Text>
        </TouchableOpacity>

      </ScrollView>

      <NavigationMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },
  content: {
    padding: 20,
    paddingBottom: 100, 
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  notificationBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  timeText: {
    fontSize: 13,
    color: '#888',
  },
  viewMore: {
    alignItems: 'center',
    marginTop: 20,
  },
  viewMoreText: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    marginTop: 30,
    backgroundColor: '#dc2626',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
