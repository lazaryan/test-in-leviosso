import { css } from 'styled-components'

export const transition = css`
    transition: .2s;
`

export const fade = css`
    ${transition}
    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-done {
        opacity: 1;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
        pointer-events: none;
        opacity: 0;
    }
`

export const icons = {
    dark: {
        shop: `data:image/svg+xml;utf8;base64,${window.btoa(require('./icons/shop.svg'))}`
    }
}
