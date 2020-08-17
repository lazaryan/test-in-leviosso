import { css } from 'styled-components'

export const container = css`
    position: relative;
	font-size: 1.25rem;
	font-weight: 400;
    text-transform: uppercase;
`

export const button = css`
    font-size: 1.25rem;
    font-weight: 400;
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    background: ${props => props.theme.colors.bg.common};
    text-transform: uppercase;

    ${props => props.theme.mixin.transition}

    &:hover, &:focus {
        opacity: .8;
        background-color: ${props => props.theme.colors.bg.common};
    }
    
    ${props => props.disabled && css`
        cursor: not-allowed;
        opacity: .3;
        color: ${props => props.theme.colors.colors.light};

        &:hover, &:focus {
            opacity: .3;
        }
    `}
`

export const prefix = css`

`

export const styles = {
    default: {
        container,
        button,
        prefix
    },
    accent: {
        container,
        button: css`
            ${button}

            background: ${props => props.theme.colors.bg.accent};
        `,
        prefix
    }
}

export default styles
