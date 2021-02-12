/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import moment from 'moment';
import urlParse from 'url-parse';
import es from 'moment/locale/es';
import {API_HOST} from '../utils/constants';

export default function New (props){
const {data: {title, enlaces, created_at, image}} = props;

//console.log(JSON.stringify( image, null, 2));
/*
<Image
        style={styles.tinyLogo}
        source={{
          uri:  `${API_HOST}/${url}`,
        }}
      />

      Para image utilizar el lodash para el map y asignar por key e imprimir en su sinonimo de posicion 
      */

return(
<TouchableOpacity>
<View style={styles.new}>
<Text style={styles.url}>{enlaces}</Text>
<Text style={styles.title}>{title}</Text>
<Text style={styles.time}>{moment (created_at).local(es).startOf().fromNow()}</Text>

</View>
</TouchableOpacity>
);
}

const styles = StyleSheet.create({
new: {
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
},
url:{
paddingBottom: 5,
color: 'grey',
},
title:{
    fontWeight: 'bold',
    fontSize: 18,
},
time:{
    paddingTop: 10,
    color: 'grey',
},
tinyLogo: {
    width: 350,
    height: 150,
  },
});