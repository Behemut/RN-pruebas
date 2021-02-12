/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, Text, SafeAreaView,TouchableOpacity} from 'react-native';
import  {getNewsApi} from './src/api/news';
//import {setNewsApi}  from './src/api/enviando';
import {map} from 'lodash';
import New from './src/components/New';
import axios from 'axios';
import {API_HOST} from './src/utils/constants';
import NewComponent from './src/components/NewComponent';

export default function App() {

const [news,setNews] = useState(null);
const [trigger, setTrigger] = useState(false);

const url = `${API_HOST}/noticias?_sort=created_at:DESC&_limit=10`;

/*useEffect(async ()=>{
  getNewsApi().then((response)=>{
        setNews(response);
  });
});

/*
*/
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(url);
    setNews(result.data);
  };
  fetchData();
}, [trigger,url]);
if (!news) return null;
/*
useEffect(()=>{
  axios.get(`http://192.168.1.14:1337/noticias`).then(res=>{
      setNews(res.data);
  })
  .catch (err=>{
    console.log(err);
  });
});
*/
//validacion - solo regresa new cuando


  return <SafeAreaView style={styles.contenedor}>
    <TouchableOpacity style={styles.refrescar}  onPress={() => setTrigger(!trigger)}>
    <Text style={styles.title}>Ultimas noticias</Text>

  
    </TouchableOpacity>
    <ScrollView style={styles.scrollview}>
     {   map(news, (data)=>(<NewComponent key={data.id} data={data}/>))}
    </ScrollView>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
title:{
textAlign: 'center',
fontWeight: 'bold',
fontSize: 25,
paddingVertical: 10,
},
scrollview:{
height: '100%',
marginLeft: 5,
},
boton:{
  backgroundColor: '#4344',
},
contenedor:{
  zIndex: 0,
},
refrescar:{
  //backgroundColor: 'red',
  width: '100%',
  height: 50,
  zIndex: 1,
}
});
