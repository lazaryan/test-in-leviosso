export type Style = string[]

export type Button = {
    container: Style,
    button: Style,
    prefix: Style
}  

export type Popup = {
    overlay: Style,
    container: Style,
    header: Style,
    label: Style,
    content: Style,
    footer: Style  
}

export type Colors = {
    colors: Object,
    bg: Object
}

export type Icon = Style

interface MixinIcon {
    [propName: string]: {
        shop: string
    }
}

export type Mixin = {
    transition: Style,
    fade: Style,
    icons: MixinIcon
}

export type Theme = {
    Button,
    Popup,
    Icon,
    Mixin
}
