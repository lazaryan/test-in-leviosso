export type Style = string[]

export type Button = {
    container: Style,
    button: Style,
    prefix: Style
}

export type Checkbox = {
    toggle: Style
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

export type Radio = {
    toggle: Style
}

export type Text = Style

export type Icon = Style

export type Image = {
    container: Style,
    image: Style
}

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
    Button: Button,
    Checkbox: Checkbox,
    Popup: Popup,
    Icon: Icon,
    Radio: Radio,
    Text: Text,
    Image: Image,
    Mixin: Mixin
}
