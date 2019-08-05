import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class DetailsScreen extends Component {

    render() {
        const { navigation } = this.props
        const newsItem = navigation.getParam('newsItem')
        console.log("newsItem", newsItem);

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 30, marginTop: 20 }}>
                        {newsItem.title}
                    </Text>
                    <Image
                        style={{ backgroundColor: 'red', height: 200, marginBottom: 16, marginRight: 16, marginLeft: 16 }}
                        source={{ uri: newsItem.urlToImage }}
                        resizeMode="stretch"
                    />
                    <Text>
                        {newsItem.content}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}