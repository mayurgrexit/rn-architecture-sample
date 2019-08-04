import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { getTopHeadlines } from './actions'
import { FlatList } from 'react-native-gesture-handler';

// TODO: Component did mount get new articles
// TODO: Take Flatlist and show dummy articles 
// TODO: Show loader while fetching articles
// TODO: Show error when articles can't be fetched
// TODO: Show retry button if loading fails
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

    _renderItem = ({ item, index }) => {
        console.log("renderItem", item);

        return (
            <Text>{item.title}</Text>
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
            <FlatList
                data={articles}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                ListEmptyComponent={this._renderEmptyComponent}
            />

            // <TouchableOpacity
            //     onPress={() => this.props.getTopHeadlines()}
            // >
            //     <Text>Hello</Text>
            //     {this._renderLoader()}
            // </TouchableOpacity>
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
