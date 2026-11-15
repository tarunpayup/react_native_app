import { useLocalSearchParams } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

export default function SummaryScreen(){
  const {items} = useLocalSearchParams<{items:string}>();
  const parsedItems:string[] = JSON.parse(items);

  return(
    <View style={{flex:1, backgroundColor:'white', padding:16, paddingTop:70}}>
      <Text style={{fontWeight:'bold', marginBottom:10}}>Your Items:</Text>
      <FlatList
        data={parsedItems}
        keyExtractor={(_,index)=>index.toString()}
        renderItem={
          ({item}) => <Text> - {item}</Text>
        }/>
    </View>
  );
}