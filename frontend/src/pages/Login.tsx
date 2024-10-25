// LoginForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

interface LoginFormInputs {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const { login, isAuthenticated, logout } = useAuth();

  const onSubmit = (data: LoginFormInputs) => {
    login(data.username, data.password);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Вы авторизованы!</p>
          <button onClick={logout}>Выйти</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Имя пользователя</label>
            <input {...register("username", { required: true })} />
          </div>
          <div>
            <label>Пароль</label>
            <input type="password" {...register("password", { required: true })} />
          </div>
          <button type="submit">Войти</button>
        </form>
      )}
    </div>
  );
};


