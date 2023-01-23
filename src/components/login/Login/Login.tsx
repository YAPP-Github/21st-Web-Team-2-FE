import React, { FC } from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './Login.styles';

const Login: FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Hello There!</S.Title>
      <S.Summary>반갑습니다 유저님!</S.Summary>
      <S.Summary>Thumbs UP에 간편하게 로그인하고 토픽에 참여해보세요</S.Summary>
      <S.GoogleLogin href={getGoogleUrl()}>
        <Icon name="GoogleLogo" size={16} />
        Google 계정으로 로그인
      </S.GoogleLogin>
      <S.Terms>로그인은 서비스 이용약관 및 개인정보 처리방침에 동의함을 의미하며,</S.Terms>
      <S.Terms>서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.</S.Terms>
    </S.Wrapper>
  );
};

const getGoogleUrl = () => {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = {
    redirect_uri: 'http://localhost:3000/auth',
    scope: 'email',
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};

export default Login;
