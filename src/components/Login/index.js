import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/Accounts');
  };

  return (
    
    <div>
      <h2>Login</h2>
      <form>
    <div>
      <label for="username">Username or Email:</label>
      <input type="text" id="username" name="username" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
    </div>
    <div>
      <label for="rememberMe">Remember Me:</label>
      <input type="checkbox" id="rememberMe" name="rememberMe" />
    </div>
    <div>
       <button onClick={handleLogin} type='submit'>Login</button>
    </div>
  </form>
    </div>
  );
}

export default LoginForm;
