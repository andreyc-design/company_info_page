import { useCallback, useMemo } from 'react';

import { useLoginMutation } from '~features/auth/api/authApi';
import { LocalStorageKeys } from '~shared/types/StorageKeys.ts';

/**
 * A custom hook for managing authentication in the application.
 *
 * This hook provides functionality for authenticating users, including login
 * and logout operations. It also maintains the authentication token and provides
 * reactive states such as loading and error states.
 *
 * @returns {Object} An object containing the following properties:
 * - `token` {string|null}: The authentication token retrieved from localStorage, or null if no token is present.
 * - `login` {function}: A function to execute the login process. Accepts an object with `username` and `password`.
 * - `logout` {function}: A function to clear the authentication token from localStorage.
 * - `isLoading` {boolean}: Indicates whether the login operation is currently in progress.
 * - `isError` {boolean}: Indicates whether an error occurred during the login operation.
 * - `error` {any}: The error information from the login operation, if any.
 */
export const useAuth = (): {
  token: string | null;
  login: (authData: { username: string; password: string }) => Promise<object | undefined>;
  logout: () => void;
  isLoading: boolean;
  isError: boolean;
} => {
  const [loginMutation, loginResult] = useLoginMutation();

  const localToken = localStorage.getItem(LocalStorageKeys.Token);
  const token = useMemo(() => localToken || null, [localToken]);

  /**
   * Asynchronous function to handle the login process for a user.
   *
   * This function takes authentication data containing a username and password,
   * executes a login mutation, and stores the returned authentication token in
   * localStorage upon successful login. If an error occurs during the process,
   * it logs an error message to the console.
   *
   * @param {Object} authData - An object containing authentication data.
   * @param {string} authData.username - The username of the user attempting to log in.
   * @param {string} authData.password - The password of the user attempting to log in.
   * @returns {Promise<Object|undefined>} A promise resolving to the server response
   * containing authentication data on success, or undefined if an error occurs.
   */
  const login = useCallback(
    async (authData: { username: string; password: string }): Promise<object | undefined> => {
      try {
        const data = await loginMutation(authData).unwrap();
        localStorage.setItem(LocalStorageKeys.Token, data.token);
        return data;
      } catch (err) {
        console.error('Login failed', err);
      }
    },
    [loginMutation]
  );

  const logout = useCallback(() => {
    localStorage.removeItem(LocalStorageKeys.Token);
  }, []);

  return useMemo(() => {
    return {
      token,
      login,
      logout,
      isLoading: loginResult.isLoading,
      isError: loginResult.isError,
    };
  }, [token, login, logout, loginResult.isLoading, loginResult.isError]);
};
