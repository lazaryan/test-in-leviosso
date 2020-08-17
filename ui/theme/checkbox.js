import { css } from 'styled-components'

export const styles = {
    default: {
        toggle: css`
            width: 20px;
            height: 18px;
            cursor: pointer;
            box-sizing: border-box;
            ${props => props.theme.mixin.transition}

            box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, 0.07);
            border: 1px solid ${props => props.theme.colors.bg.white};

            ${props => props.checked && css`
                background: url(${props => props.theme.mixin.icons.blue.checkbox_on}) 0 0 / 100% no-repeat;
            `}
            
            & > input {
                visibility: hidden;
            }
        `
    }
}

export default styles
