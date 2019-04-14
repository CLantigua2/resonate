import React from 'react'
import styled from '@emotion/styled'

const Button = ({children, primary, success, danger}) => (
    <Btn
        primary={primary}
        success={success}
        danger={danger}>
        {children}
    </Btn>
)

export default Button

const Btn = styled.button`
    text-transform: uppercase;
    padding: 10px 20px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    background: ${({theme, primary, success, danger})  => primary ?theme.color.primary : success ? theme.color.success : danger ? theme.color.danger : null};
    color: #ffffff;
    border: none;
    box-shadow: ${({theme}) => theme.shadows.two};
    transition: 0.3s ease-in-out;
        &:hover {
        box-shadow: ${({theme}) => theme.shadows.three};
        }
`