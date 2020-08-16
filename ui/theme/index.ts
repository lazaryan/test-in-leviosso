interface StructTheme<T> {
    default: T,
    [propName: string]: T
}

type ModuleStruct<T> = {
    styles?: StructTheme<T>,
    default: T | StructTheme<T>,
}

import { Button, Popup, Colors } from './theme'

export const button = require<ModuleStruct<Button>>('./button')
export const popup = require<ModuleStruct<Popup>>('./popup')

export const mixin = require<{}>('./mixin')
export const colors = require<{ default: Colors }>('./colors').default

export interface Theme {
    button: Button,
    popup: Popup
}

export default {
    button,
    popup,
    mixin,
    colors
}
