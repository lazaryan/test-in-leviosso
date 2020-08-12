import { API } from 'utils'

import { GET_STATE } from './types'

export const getState = (actionType = GET_STATE) =>
    dispatch => new API().read({ url: 'https://api.dev.pastorsline.com/api/contacts.json', actionType, dispatch })
