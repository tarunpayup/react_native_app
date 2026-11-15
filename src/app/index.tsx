import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


type ItemRowProps = {
  text: String,
  onRemove: ()=> void;
}

function ItemRow({text, onRemove}:ItemRowProps){
  return(
    <View style={styles.row}>
      <Text style={styles.rowText}>- {text}</Text>
      <Pressable onPress={onRemove}>
        <Text style={styles.removeText}>Remove</Text>
      </Pressable>
    </View>
  );
}

export default function HomeScreen(){
  const [item, setItem] = useState('');
  const [items,setItems] = useState<string[]>([]);
  const router = useRouter();

  const addItem = () => {
    if(item.trim() === '') return;
    setItems([...items,item]);
    setItem('');
  }

  const removeItem = (index:number) => {
    setItems(items.filter((_,i)=> i !==index))
  }

  const handleSubmit = () => {
    router.push({
      pathname:'/login',
      params:{items: JSON.stringify(items)}
    });
  }

  return(
    <View style={styles.container}>
      <TextInput value={item} onChangeText={setItem} style={styles.input} placeholder='Enter Item Name'/>
      <Pressable onPress={addItem} style={styles.button}>
        <Text style={styles.buttonText}>Add Item</Text>
      </Pressable>


      <FlatList data={items} keyExtractor={(_,index) => index.toString()} 
        renderItem={
          ({item, index})=>(
            <ItemRow text={item} onRemove={() => removeItem(index)}/>
          )
        } />

        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>View Summary</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, padding:16, paddingTop:70, backgroundColor:'white'
  },
  input:{
    borderWidth:1, borderColor:'#ccc', borderRadius:10, padding:10, margin:10
  },
  button:{
    backgroundColor:'#000', padding:15, borderRadius:10, alignItems:'center', margin:5
  },
  buttonText:{
    color:'white', fontWeight:'bold'
  },
  row:{
    flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  rowText:{
    flex:1
  },
  removeText:{
    color:'red', fontWeight:'bold'
  }
});