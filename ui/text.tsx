import React from 'react'

import styled from 'styled-components'
import { Flex } from 'reflexbox'

import { text } from 'theme'
import { Props as DefaultProps } from './types'
import { Text as TextInterface } from 'theme/types'

export type Props = DefaultProps<TextInterface> & {
    as?: 'p' | 'label'
}

export const defaultProps = {
    styles: text.styles.p,
    as: 'p'
}

const context = { styles: defaultProps.styles }

export const Component = (props: Props) => {
    context.styles = props.styles

    return (
        <Flex sx={props.sx}>
            <Text {...props} />
        </Flex>
    )
}

Component.defaultProps = defaultProps

export const Text = styled((props: Props) => <props.as {...props} />)`${() => context.styles}`

export default Component
