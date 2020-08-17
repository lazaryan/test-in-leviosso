import React from 'react'

import styled from 'styled-components'
import { Flex } from 'reflexbox'

import { Props as DefaultProps } from './types'
import { Icon as IconInterface } from 'theme/types'

export interface Props extends DefaultProps<IconInterface>{
    background: string
}

export const Component = (props: Props) => (
    <Flex flexDirection="column" {...props}></Flex>
)

export default styled(Component)`${props => props.theme.icon.default}`
