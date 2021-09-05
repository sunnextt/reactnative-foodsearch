import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

const SearchInput = () => {
    return (
        <View>
            <TextInput style={styles.searchInput} type="text" placeholder="Search"/>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
        SearchInput: {

    }
})
