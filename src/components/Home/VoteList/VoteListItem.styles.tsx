import styled from '@emotion/styled';
import Image from 'next/image';

export const VoteListItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 24px 24px;

  width: 267px;
  height: 200px;

  background: #141517;
  border-radius: 20px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  width: 74px;
  height: 30px;

  background: #1e1d23;
  border-radius: 10px;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  color: #d2fa64;
`;

export const Title = styled.h3`
  width: 100%;
  height: 46px;

  font-weight: 700;
  font-size: 18px;
  line-height: 130%;

  color: #e4e4e4;

  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const VoteInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: auto;
  width: 100%;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  color: #9c9ea7;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Profile = styled(Image)`
  display: flex;

  width: 28px;
  height: 28px;

  background: #9c9ea7;
  border-radius: 50%;

  overflow: hidden;
`;
