import React from 'react';

import SignIn from '../../components/sign_in/sign_in.component';
import SignUp from '../../components/signup/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
       <SignIn />
       <SignUp />
    </div>
);

export default SignInAndSignUpPage;
