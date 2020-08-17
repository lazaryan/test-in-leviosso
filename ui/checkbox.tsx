import React, { useState } from 'react'

import styled from 'styled-components'
import { Flex } from 'reflexbox'

import { checkbox } from 'theme'
import { Props as DefaultProps } from './types'
import { Checkbox as CheckboxInterface } from 'theme/types'

export type Props = DefaultProps<CheckboxInterface> & {
    disabled?: boolean,
    checked?: boolean,
    onValueChange?: (newState: boolean) => any,
    name: string,
    value: any
}

export const defaultProps = {
    styles: checkbox.styles.default,
    checked: false
}

export const context = { styles: defaultProps.styles }

export const Component = (props: Props) => {
    context.styles = props.styles

    const [checked, setCheked] = useState(props.checked)

    const handleClick = (event: React.TouchEvent) => (
        event.persist(),
        event.preventDefault(),
        event.stopPropagation(),
        setCheked(!checked),
        props.onValueChange && props.onValueChange(!checked)
    )

    return (
        <Flex sx={props.sx}>
            <Toggle onClick={handleClick} checked={checked}>
                <input {...props} type="checkbox" checked={checked} readOnly />
            </Toggle>
        </Flex>
    )
}

Component.defaultProps = defaultProps

export const Toggle = styled((props: Props) => <label {...props} />)`${() => context.styles.toggle}`

export default Component
