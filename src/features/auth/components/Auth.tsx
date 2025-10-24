import { useNavigate } from 'react-router';

import { ROUTES } from '~constants/routes';
import styles from '~features/auth/components/Auth.module.scss';
import AuthForm from '~features/auth/components/auth-form/AuthForm.tsx';
import type { AuthRequestData } from '~features/auth/types/AuthData.ts';
import { useAuth } from '~shared/hooks/useAuth.ts';

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  /**
   * Handles the submission of authentication form data.
   *
   * This asynchronous function processes the authentication request by invoking
   * the login function with the provided authentication form data. Upon successful
   * login, it navigates the user to the home page of the clients section.
   * In case of an error during the login process, it logs the error in the console.
   *
   * @param {AuthRequestData} authFormData - The authentication request data
   * object containing the credentials or information required for the login process.
   *
   * @returns {Promise<void>} A promise that resolves when the login is successful
   * and navigation is completed, or logs an error if the login process fails.
   */
  const handleSubmit = async (authFormData: AuthRequestData): Promise<void> => {
    try {
      await login(authFormData);
      navigate(ROUTES.CLIENTS.HOME, { replace: true });
    } catch (err) {
      console.log('Failed to sign in', err);
    }
  };

  /**
   * Navigates the user to the home page of the application.
   *
   * This function utilizes a predefined navigation method to redirect the user to the specified route
   * associated with the home page. It is a utility function typically used to provide a quick and consistent
   * way to navigate to the main or home screen within the application.
   */
  const goToHome = () => {
    navigate(ROUTES.HOME);
  };

  console.log({ pass: 'm38rmF$', n: 'johnd' });

  return (
    <div className={styles.auth}>
      <button onClick={goToHome} className={styles.auth__goHomeBtn}>
        Home
      </button>

      <h2>Sign In !</h2>

      <div className={styles.auth__form}>
        <AuthForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Auth;
