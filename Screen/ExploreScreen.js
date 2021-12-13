import React  from 'react';
import {StyleSheet,View,Text,Button,FlatList} from 'react-native';


const ExploreScreen = () => {
        return (
            <View>
            <Text style={styles.textList}> ExploreScreen </Text>
            
            <View style={styles.button}>
            <Button 
             title='go to Details Screen'
             
            />
            </View>
            </View>
        );
    
};


const styles = StyleSheet.create ({
    
    textList:{
        fontSize:30,
        fontWeight:'bold',
        padding:10,
        margin:10,
        backgroundColor:'#71DFE7',
    },
    button: {
        padding: 10,
        margin: 10
    }
    
})

export default ExploreScreen;
