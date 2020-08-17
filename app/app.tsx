import React from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import { API } from 'utils'
import { getState } from './actions'
import { Button, Text, Checkbox, Radio, Image } from 'ui'

export const App = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        new API().updateToken()

        dispatch(getState())
            .then(response => console.log(response))
    }, [])

    console.log(state)

    return (
        <>
            <Text>BBBBB</Text>
            <Checkbox name="test" value="1" />
            <Radio name="test" value="3" />
            <Image />
        </>
    )
}

export const Component = () => (<ThemeProvider theme={theme}><App /></ThemeProvider>)

export default Component
