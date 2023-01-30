import type { NextPage } from 'next';

import SingleContentLayout from '@src/components/common/SingleContentLayout';
import Login from '@src/components/login/Login';

const LoginPage: NextPage = () => {
  return (
    <SingleContentLayout>
      <Login />
    </SingleContentLayout>
  );
};

export default LoginPage;
