import { userInfo } from '@slices/user/userThunk';
import { useEffect } from 'react';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import styled from 'styled-components';

const ProfileCard = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.me.data);
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  return (
    <>
      <h1>프로필 카드</h1>
      <>{user.nickname}</>
      <>{user.mbti}</>
      <>{user.level}</>
      <>{user.select_count}</>
    </>
  );
};

export default ProfileCard;
