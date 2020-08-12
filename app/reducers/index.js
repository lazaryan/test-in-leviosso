import update from 'immutability-helper'
import { GET_STATE } from '../actions/types'

export const initialState = {
    total: 0,
    contacts_ids: [],
    contacts: {}
}

export const reducers = {
    [GET_STATE]: payload => ({ $merge: payload }),
}

export default (state = initialState, action) =>
    reducers[action.type] ? update(state, reducers[action.type](action.payload, state)) : state
