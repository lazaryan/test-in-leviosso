import React from 'react'

import styled from 'styled-components'
import { Flex, BoxProps } from 'reflexbox'

import theme, { Theme } from 'theme'

export interface Props extends React.PropsWithChildren<any> {
    styles: Theme['button'],
    sx?: Object
}

export const defaultProps = {
    styles: theme.button.styles.default
}

const context = { styles: defaultProps.styles }

export const Component = (props: Props) => {
    context.styles = props.styles

    return (
        <Container sx={props.sx}>
            <Button {...props} />
        </Container>
    )
}

Component.defaultProps = defaultProps

export const Button = styled(props => <button {...props} />)`${() => context.styles.button}`
export const Container = styled(Flex)`${() => context.styles.container}`

export default Component
