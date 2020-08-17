import { css } from 'styled-components'

export default css`
	background: url(${props => props.background}) 0 0 / 100% no-repeat;
	width: 2rem;
	height: 2rem;
	${props => props.theme.mixin.transition}
	${props => !props.currentSort && css`
		opacity: 0.5;
	`}
`
