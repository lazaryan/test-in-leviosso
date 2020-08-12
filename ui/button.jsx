import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'reflexbox'

import theme from 'theme'

const context = { styles: {} }

export const Component = props => {
    context.styles = props.styles

    return (
        <Container sx={props.sx}>
            <Button {...props} />
        </Container>
    )
}

Component.propTypes = {
    sx: PropTypes.object,
    styles: PropTypes.object
}

Component.defaultProps = {
    styles: theme.button.styles.default
}

export const Button = styled(props => <button {...props} />)`${() => context.styles.button}`
export const Container = styled(Flex)`${() => context.styles.container}`

export default Component
