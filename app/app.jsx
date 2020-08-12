import { ThemeProvider } from 'styled-components'

import theme from 'theme'

export const App = () => {
    return (<>Test</>)
}

export const Component = () => (<ThemeProvider theme={theme}><App /></ThemeProvider>)

export default Component
