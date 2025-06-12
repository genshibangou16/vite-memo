import { useLogin } from '../hooks/useLogin';
import './LoginButton.css';

export default function LoginButton() {
  const { toggleLogin, isLoggedIn } = useLogin();

  return (
    <button className="login-button" onClick={toggleLogin}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}
