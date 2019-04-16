import React from 'react'
import styled from '@emotion/styled'
import BounceLoader from 'react-spinners/BounceLoader'


// usage <Alert primary={true} >Your trash is loading..</Alert>

const Alert = ({children, primary, success, danger}) => (
    <Container
        primary={primary}
        success={success}
        danger={danger}
        >
        <BounceLoader
        color={"white"}
        />
        <p>{children}</p>
    </Container>
)

export default Alert

const Container = styled.div`
background: ${({theme, primary, success, danger})  => primary ?theme.color.primary : success ? theme.color.success : danger ? theme.color.danger : null};
color: #ffffff;
display: flex;
width: 283px;
padding: 10px 20px;
flex-direction: row;
border-radius: 10px;
border: 1px solid black;
justify-content: space-between;
align-items: center;
font-weight: 700;
`