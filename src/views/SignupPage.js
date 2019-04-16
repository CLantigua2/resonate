import React, { useState } from 'react'
import styled from '@emotion/styled'
import InputField from '../components/common/InputField'

const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Section>
            <form>
                <div className="divider">
                    <InputField placeholder="First Name" name={firstName} onChange={e => setFirstName(e.target.value)} type="text" />
                </div>

                <div className="divider">
                    <InputField placeholder="Last Name" name={lastName} onChange={e => setLastName(e.target.value)} type="text" />
                </div>

                <div className="divider">
                    <InputField placeholder="E-mail" name={email} onChange={e => setEmail(e.target.value)} type="email" />
                </div>

                <div className="divider">
                    <InputField placeholder="Password" name={password} onChange={e => setPassword(e.target.value)} type="password" />
                </div>
            </form>
        </Section>
    )
}

export default SignupPage

const Section = styled.section`
    width: 500px;
    margin: 18% auto;
    form {
        box-shadow: ${({ theme }) => theme.shadows.three};
        padding: 40px;
        border-radius: 10px;
    .divider {
        margin-bottom: 40px;
    }
}
`