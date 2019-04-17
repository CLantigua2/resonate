import React from 'react'
import { Global, css } from '@emotion/core'

export const GlobalReset = () => (
	<Global styles={css`
    /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

html {
	box-sizing: border-box;
	font-family: 'Roboto', 'Montserrat', sans-serif;
	 text-rendering: optimizeLegibility;
	font-size: 62.5%;
	height: 100%;
	margin: 0;
}
body {
	line-height: 1;
}
ol, ul, li {
	list-style-type: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h6 {
	font-size: 2.5rem;
}
h5 {
	font-size: 3.5rem;
}
h4 {
	font-size: 4.5rem;
}
h3 {
	font-size: 5.5rem;
}
h2 {
	font-size: 6.5rem;
}
h1 {
	font-size: 7.5rem;
}
p, a, li, button {
	font-size: 1.8rem;
	font-family: 'Montserrat', sans-serif;
}
a {
	text-decoration: none;
	cursor: pointer;
}
button {
	cursor: pointer;
}
`} />
)