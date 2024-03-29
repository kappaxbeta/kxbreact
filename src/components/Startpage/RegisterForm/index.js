import React from 'react';
import { Input, Button } from 'antd';

function RegisterForm({showLogin}) {
  return <div>
    <p>Username</p>
    <Input/>
    <p>Email</p>
    <Input/>
    <Button>register</Button>
    <p>or</p>
    <Button onClick={showLogin} className="toLogin">Login</Button>
  </div>
}

export default RegisterForm;
