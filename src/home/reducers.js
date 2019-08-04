import { NEWS_API_LOADING, NEWS_API_ERROR, NEWS_API_SUCCESS } from "./types";
const INIT_STATE = { loading: false, data: {}, error: {} }

const NewsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case NEWS_API_LOADING:
            return { ...state, loading: action.payload.loading }
        case NEWS_API_ERROR:
            return { ...state, error: action.payload.error }
        case NEWS_API_SUCCESS:
            return { ...state, data: action.payload.data }
        default:
            return state
    }
}

export default NewsReducer
