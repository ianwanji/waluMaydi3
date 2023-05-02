/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */





import React, { useState } from 'react';
import { api } from '~/utils/api';
import { useForm } from 'react-hook-form';

type UserForm = {
  userName: string;
  password: string;
};

type UserData = {
  username: string;
  password: string;
};

const UserLogin: React.FC<{ userData: UserData; password: string }> = ({ userData, password }) => {
  if (userData.password === password) {
    return <div>Welcome {userData.username}!</div>;
  } else {
    return <div>Invalid password</div>;
  }
};

const SignIn: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [password, setPassword] = useState('');
  const { register, handleSubmit } = useForm<UserForm>(); // Moved inside SignIn component

  const getUser = api.users.getUserByUsername;

  async function onSubmit(formData: UserForm) {
    console.log('Form submitted with data:', formData);

    const { data, error } = getUser.useQuery({ userName: formData.userName });

    if (error) {
      // Render error state
      console.log('Error:', error);
      setUserData(null);
      setPassword('');
    } else if (!data) {
      // Render error state
      console.log('User not found');
      setUserData(null);
      setPassword('');
    } else {
      setUserData(data);
      setPassword(formData.password);
    }
  }

  const handleLogout = () => {
    setUserData(null);
    setPassword('');
  };

  return (
    <div>
      {userData ? (
        <div>
          <UserLogin userData={userData} password={password} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('userName')} name="userName" />
          <input type="password" {...register('password')} name="password" />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
