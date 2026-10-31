import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserCard({ avatar, name, position, email }) {
  return (
    <View style={styles.card}>
      <Image style={styles.avatar} source={{ uri: avatar }} resizeMode="cover" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
      <View style={styles.emailBox}>
        <Text style={styles.email}>✉ {email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '85%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginTop: 24,
    // Тень iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Тень Android
    elevation: 5,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#5B4FE9',
    marginBottom: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    color: '#636363',
    marginBottom: 10,
  },
  emailBox: {
    backgroundColor: '#EEECFD',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  email: {
    fontSize: 14,
    color: '#5B4FE9',
  },
});
