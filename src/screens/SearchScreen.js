import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchInput from '../components/SearchInput'

const SearchScreen = () => {
    return (
        <View>
            <Text style={styles.textScreen}>SearchScreen</Text>
            <SearchInput/>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    textScreen: {
        display: 'flex',
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        backgroundColor: "red", 
        fontSize: 40, 
    }

})
