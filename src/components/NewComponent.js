/* eslint-disable prettier/prettier */
import React,{Component, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import moment from 'moment';
import urlParse from 'url-parse';
import es from 'moment/locale/es';
import {API_HOST} from '../utils/constants';


const url = `${API_HOST}/noticias?_sort=created_at:DESC&_limit=10`;


class NewComponent extends Component{

    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
          // State needed
          noticias: []
        };
      
      }
      componentDidMount() {
        this.setState({ noticias: this.props.data});
    
        console.log(this.state.noticias.id);
      }
    
  


    render(){

        return(
            <TouchableOpacity>
            <View style={styles.new}>
            <Text style={styles.url}>{this.state.noticias.url}</Text>
            <Text style={styles.title}>{this.state.noticias.title}</Text>
            <Text style={styles.time}>{moment (this.state.noticias.created_at).local(es).startOf().fromNow()}</Text>
  
            </View>
            </TouchableOpacity>
            );
    }


}

export default NewComponent;


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