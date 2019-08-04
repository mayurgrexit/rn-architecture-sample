import {
    NEWS_API_LOADING,
    NEWS_API_SUCCESS,
    NEWS_API_ERROR
} from "./types";
import { getTopHeadlinesApi } from "./services";

const getTopHeadlines = () => {
    return dispatch => {
        dispatch(getTopHeadlinesLoading(true))

        getTopHeadlinesApi()
            .then(res => {
                dispatch(getTopHeadlinesLoading(false))
                dispatch(getTopHeadlinesSuccess(res))
            })
            .catch(error => {
                dispatch(getTopHeadlinesLoading(false))
                dispatch(getTopHeadlinesError(error))
            })
    }
}

const getTopHeadlinesLoading = (loading) => {
    return {
        type: NEWS_API_LOADING,
        payload: { loading: loading }
    }
}

const getTopHeadlinesSuccess = (data) => {
    return {
        type: NEWS_API_SUCCESS,
        payload: { data: data }
    }
}

const getTopHeadlinesError = (error) => {
    return {
        type: NEWS_API_ERROR,
        payload: { error: error }
    }
}

export { getTopHeadlines }
