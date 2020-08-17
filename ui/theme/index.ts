interface StructTheme<T> {
    default?: T,
    [propName: string]: T
}

type ModuleStruct<T> = {
    styles?: StructTheme<T>,
    default: T | StructTheme<T>,
}

import {
    Button,
    Checkbox,
    Popup,
    Icon,
    Colors,
    Radio,
    Text,
    Image,
    Mixin
} from './theme'

export const button = require<ModuleStruct<Button>>('./button')
export const popup = require<ModuleStruct<Popup>>('./popup')
export const icon = require<ModuleStruct<Icon>>('./icon')
export const text = require<ModuleStruct<Text>>('./text')
export const checkbox = require<ModuleStruct<Checkbox>>('./checkbox')
export const radio = require<ModuleStruct<Radio>>('./radio')
export const image = require<ModuleStruct<Image>>('./image')

export const mixin = require<Mixin>('./mixin')
export const colors = require<StructTheme<Colors>>('./colors').default

export default {
    button,
    popup,
    icon,
    text,
    checkbox,
    radio,
    image,
    mixin,
    colors
}
