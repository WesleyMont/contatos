
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from './src/components/Header';
import { PeopleList } from './src/components/PeopleList';

const data = [
  {key: 1, name: 'Ana Carolina', number: '(81)91213-0908'},
  {key: 2, name: 'Wesley Monteiro', number: '(81)91213-1234', },
  {key: 3, name: 'Carlos Guerra', number: '(81)91213-4341'},
  {key: 4, name: 'Ana Catarina', number: '(81)91213-5632'},
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Lista de Contatos"></Header>
      <PeopleList data={data} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50,
  
  },
});
