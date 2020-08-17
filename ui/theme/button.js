import { css } from 'styled-components'

export const container = css`
    position: relative;
	font-size: 13px;
	font-weight: 400;
    text-transform: uppercase;
    width: max-content;
`

export const button = css`
    font-size: 13px;
    font-weight: 400;
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    background: ${props => props.theme.colors.bg.blue};
    text-transform: uppercase;
    padding: 15px 10px;

    ${props => props.theme.mixin.transition}

    &:hover, &:focus {
        opacity: .8;
        background-color: ${props => props.theme.colors.bg.blue};
    }
    
    ${props => props.disabled && css`
        cursor: not-allowed;
        opacity: .3;
        color: ${props => props.theme.colors.colors.light};

        &:hover, &:focus {
            opacity: .3;
        }
    `}

    ${props => props.type != 'action' && css`
        padding-left: 45px;
    `}
`

export const prefix = css`
    position: absolute;
    z-index: 2;
    top: 60%;
    left: 5px;
    transform: translateY(-50%);
    width: 25px;
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

            background: ${props => props.theme.colors.bg.blueDark};
        `,
        prefix
    }
}

export default styles
