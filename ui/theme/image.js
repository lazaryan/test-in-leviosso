import { css } from 'styled-components'

export const container = css`
    position: relative;
    width: ${props => props.width || "13rem"};
    height: ${props => props.height || "11rem"};
    max-width: 100%;
    max-height: 100%;
    background: #f7f7f7;
    border: 0;
    cursor: pointer;
    overflow: hidden;
`

export const image = css`
    width: 100%;
    height: 100%;
    background: url(${props => console.log(props) || props.src}) center / contain no-repeat;

    ${props => !props.src && css`
        background: url(${props => props.theme.mixin.icons.light.image_icon}) center / contain no-repeat;
    `}

    ${props => props.disabled && css`
		opacity: .8;
	`}
`

export const styles = {
    default: {
        container,
        image
    }
}

export default styles
