import React from 'react'

import styled from 'styled-components'
import { Flex } from 'reflexbox'

import { image } from 'theme'
import { Props as DefaultProps } from './types'
import { Image as ImageInterface } from 'theme/types'

export type Props = DefaultProps<ImageInterface> & {
    src?: string
}

export const defaultProps = {
    styles: image.styles.default
}

const context = { styles: defaultProps.styles }

export const Component = (props: Props) => {
    context.styles = props.styles

    return (
        <Container sx={props.sx}>
            <Image {...props} />
        </Container>
    )
}

Component.defaultProps = defaultProps

export const Container = styled(Flex)`${() => context.styles.container}`
export const Image = styled.span`${() => context.styles.image}`

export default Component
