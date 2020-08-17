import { css } from 'styled-components'

export const styles = {
    default: {
        toggle: css`
            width: 20px;
            height: 20px;
            cursor: pointer;
            border-radius: 50%;
            box-sizing: border-box;
            ${props => props.theme.mixin.transition}

            box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, 0.07);
            border: 1px solid ${props => props.theme.colors.bg.white};

            ${props => props.checked && css`
                border: 4px solid ${props => props.theme.colors.bg.blueDark};
            `}
            
            & > input {
                visibility: hidden;
            }
        `
    }
}

export default styles