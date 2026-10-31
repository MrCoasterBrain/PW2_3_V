import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Header, UserCard, Skills, Footer } from './components';

const user = {
  avatar: 'https://i.pravatar.cc/150?img=12',
  name: 'Иван Иванов',
  position: 'Frontend разработчик',
  email: 'ivan@example.com',
};

const skills = ['JavaScript', 'React', 'React Native'];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Header title="Мой профиль" />

      <ScrollView contentContainerStyle={styles.content}>
        <UserCard
          avatar={user.avatar}
          name={user.name}
          position={user.position}
          email={user.email}
        />
        <Skills title="Мои навыки" skills={skills} />
      </ScrollView>

      <Footer text="© 2024 Мое приложение" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
  },
});
