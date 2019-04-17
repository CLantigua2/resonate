import React, { useState } from 'react'
import styled from '@emotion/styled'
import InputField from '../components/common/InputField'
import herb1 from '../image/signup/herb1.jpg'
import herb2 from '../image/signup/herb2.jpg'

const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Section>
            <div className="pitch">
                <h3>Sign up for Free</h3>
                <img src={herb2} alt="example of herbs" />

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nobis nesciunt officia in suscipit velit aut deleniti incidunt numquam. Ea possimus qui ducimus..</p>
            </div>
            <form className="form">
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
    display: flex;
    flex-direction: row;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    justify-content: space-around;
    background-image: url(${herb1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 15% 0;
    .pitch {
        display: flex;
        flex-direction: column;
        padding: 40px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: ${({ theme }) => theme.shadows.three};
        width: 400px;
        order: 1;
        h3 {
            margin-bottom: 15px;
        }
        p {
        line-height: 25px;
        }
    }
    .form {
        box-shadow: ${({ theme }) => theme.shadows.three};
        background: white;
        padding: 40px;
        border-radius: 10px;
        width: 350px;
    .divider {
        margin-bottom: 25%;
    }
}
`