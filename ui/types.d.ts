import { PropsWithChildren, ReactNode } from 'react'

import { Theme } from 'theme/types'

export interface Props<T> extends PropsWithChildren<any>{
    theme?: Theme,
    sx?: Object,
    styles?: T,
    'data-testid'?: string,
}
