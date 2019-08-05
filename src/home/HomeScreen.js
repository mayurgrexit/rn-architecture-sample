import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { getTopHeadlines } from './actions'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'

// TODO: Component will mount get new articles - DONE
// TODO: Take Flatlist and show dummy articles - DONE
// TODO: Show loader while fetching articles
// TODO: Show error when articles can't be fetched
// TODO: Show retry button if loading fails
// TODO: Make a NewsItem card
class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    _renderLoader() {
        if (this.props.news.loading) {
            return (
                <Text>Loading</Text>
            )
        } else {
            return null
        }
    }

    _newItemClicked(item) {
        // console.log("item", item);
        this.props.navigation.navigate('Details', { newsItem: item })
    }

    // TODO: convert to NewCardItem
    _renderItem = ({ item, index }) => {
        // console.log("renderItem", item);

        return (
            <View style={{ flex: 1, marginBottom: 30 }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}
                    onPress={this._newItemClicked.bind(this, item)}
                >
                    <View style={{ width: 250, height: 100, backgroundColor: '#FAFAFA', marginRight: 10 }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 10 }}>{item.title}</Text>
                        <View style={{ flex: 1, flexWrap: 'wrap' }}>
                            <Text >{item.content}</Text>
                        </View>
                    </View>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    _keyExtractor = (article, index) => index.toString()

    _renderEmptyComponent = () => {
        return (
            <Text>List is Empty</Text>
        )
    }

    componentWillMount() {
        this.props.getTopHeadlines()
    }

    render() {
        const { data } = this.props.news
        console.log("props", this.props);
        let articles = []
        if ('articles' in data) {
            articles = data.articles
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={articles}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ListEmptyComponent={this._renderEmptyComponent}
                    refreshing={this.props.news.loading}
                    onRefresh={this.props.getTopHeadlines}
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.newsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopHeadlines: () => dispatch(getTopHeadlines())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
