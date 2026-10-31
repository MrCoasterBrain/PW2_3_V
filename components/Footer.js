import { View, Text, StyleSheet } from 'react-native';

export default function Footer({ text }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fafafa',
  },
  text: {
    fontSize: 13,
    color: '#888',
  },
});
