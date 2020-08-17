import React from 'react'

import styled from 'styled-components'
import { Flex } from 'reflexbox'

import theme from 'theme'
import { Props as DefaultProps } from './types'
import { Button as ButtonInterface } from 'theme/types'
import Icon from './icon'

export type Props = DefaultProps<ButtonInterface> & {
    type?: 'action' | 'shop'
}

export const defaultProps = {
    styles: theme.button.styles.default,
    type: 'action'
}

const context = { styles: defaultProps.styles }

export const Component = (props: Props) => {
    context.styles = props.styles

    return (
        <Container sx={props.sx} type={props.type}>
            { props.type == 'shop' && <Prefix background={theme.mixin.icons.dark.shop}></Prefix> }
            <Button {...props} />
        </Container>
    )
}

Component.defaultProps = defaultProps

export const Button = styled(props => <button {...props} />)`${() => context.styles.button}`
export const Container = styled(Flex)`${() => context.styles.container}`
export const Prefix = styled(Icon)`${() => context.styles.prefix}`

export default Component
