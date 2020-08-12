import { useRef, forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'reflexbox'

export const Component = props => {
    const overlayRef = useRef(null)

    const handleClickOutside = event =>
        props.onClickOutside && (event.persist(), event.target == overlayRef.current && props.onClickOutside())

    return (
        <Overlay onClick={handleClickOutside} ref={overlayRef} data-testid="ui-popup-overlay">
            <Container flexDirection="column" {...props}/>
        </Overlay>
    )
}

Component.propTypes = {
    onClickOutside: PropTypes.func
}

export const Overlay = styled(forwardRef((props, ref) => <Flex {...props} ref={ref}/>))`${props => props.theme.popup.overlay}`
export const Container = styled(Flex)`${props => props.theme.popup.container}`

export const Header = props => <Flex alignItems="center" {...props} />
export const Label = props => <label {...props}/>
export const Content = props => <Flex flexDirection="column" {...props} />
export const Footer = Flex

Component.Header = styled(Header)`${props => props.theme.popup.header}`
Component.Label = styled(Label)`${props => props.theme.popup.label}`
Component.Content = styled(Content)`${props => props.theme.popup.content}`
Component.Footer = styled(Footer)`${props => props.theme.popup.footer}`

export default Component
