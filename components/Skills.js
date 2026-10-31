import { View, Text, StyleSheet } from 'react-native';

export default function Skills({ title, skills }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.list}>
        {skills.map((skill) => (
          <Text key={skill} style={styles.skill}>
            {skill}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 12,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skill: {
    backgroundColor: '#5B4FE9',
    color: '#fff',
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 14,
    overflow: 'hidden',
    margin: 4,
  },
});
