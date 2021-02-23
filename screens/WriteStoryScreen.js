import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends Component{
    constructor(){
        super();
        this.state ={
          title :"",
          author:"",
          story:""
        }
      }

      createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
      submitStory =()=>{
        var randomRequestId = this.createUniqueId()
        db.collection('Users').add({
            "title": this.state.title,
            "author":this.state.author,
            "story":this.state.story,
            "request_id"  : randomRequestId,
        })
    
        this.setState({
            title :'',
            author : '',
            story : ''
        })
    }
    render(){
        return(
            <View>                
                <View>
                    <TextInput
                    style ={styles.formTextInput}
                    placeholder={"Title of the Story"}
                    onChangeText={(text)=>{
                        this.setState({
                            title:text
                        })
                    }
                }/>
                   <TextInput
                    style ={styles.formTextInput}
                    placeholder={"Author of the story"}
                    onChangeText={(text)=>{
                        this.setState({
                            author:text
                        })
                    }
                }
                   />
                   <TextInput
                    style ={styles.formTextInput}
                    multiline = {true}
                    placeholder={"Write Story"}
                    onChangeText={(text)=>{
                        this.setState({
                            story:text
                        })
                    }
                }
                   />
                   <TouchableOpacity style ={styles.button} onPress = {this.submitStory} >
                       <Text>Submit</Text>
                   </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        marginLeft : 150,
        marginTop : 10,
        shadowOffset: {
           width: 0,
           height: 8,
        }
    }
})
