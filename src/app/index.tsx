import { FlatList, StyleSheet, Text, View } from 'react-native';

const FLATLIST_DATA = [
  {
    id:'1', name:'Mango'
  },
  {
    id:'2', name:'Apple'
  },{

    id:'3', name:'Pineapple'
  }
];

export default function Index(){
  return(
    <View>
      <FlatList
        data={FLATLIST_DATA}
        keyExtractor={(flatlist_item)=> flatlist_item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, backgroundColor:'#fff', margin:10
  },
  row:{
    padding:15, borderBottomWidth:1
  },
  text:{
    fontSize:16
  }
});