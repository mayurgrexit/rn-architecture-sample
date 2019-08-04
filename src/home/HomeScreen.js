import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { getTopHeadlines } from './actions'

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

    render() {
        // console.log("props", this.props);

        return (
            <TouchableOpacity
                onPress={() => this.props.getTopHeadlines()}
            >
                <Text>Hello</Text>
                {this._renderLoader()}
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state);

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
