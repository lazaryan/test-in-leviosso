interface StructTheme<T> {
    default: T,
    [propName: string]: T
}

type ModuleStruct<T> = {
    styles?: StructTheme<T>,
    default: T | StructTheme<T>,
}

import { Button, Popup, Icon, Colors, Mixin } from './theme'

export const button = require<ModuleStruct<Button>>('./button')
export const popup = require<ModuleStruct<Popup>>('./popup')
export const icon = require<ModuleStruct<Icon>>('./icon')

export const mixin = require<Mixin>('./mixin')
export const colors = require<StructTheme<Colors>>('./colors').default

export default {
    button,
    popup,
    icon,
    mixin,
    colors
}
