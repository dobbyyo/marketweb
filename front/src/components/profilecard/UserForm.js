import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Router from 'next/router';

import {
  ADD_USER_IMG_TO_ME_REQUEST,
  DELETE_USER_REQUEST,
  LOG_OUT_REQUEST,
  NICKNAME_CHANGE_REQUEST,
  PASSWORD_CHANGE_REQUEST,
  REMOVE_IMAGE,
  USER_IMAGE_REQUEST,
} from '../../reducers/user/userAction';

const Container = styled.div`
  /* width: 100%; */
  button {
    width: 100%;
    border: none;
    margin-top: 1rem;
    height: 2rem;
    background-color: #587;
    border-radius: 1rem;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  input {
    width: 100%;
    margin-top: 1rem;
    border-radius: 1.2rem;
  }
  .img {
    display: flex;
    justify-content: center;
    img {
      margin-right: 1rem;
    }
  }
  .blackBtn {
    background-color: #111;
    color: #fff;
    height: 2rem;
    cursor: pointer;
    margin-bottom: 1rem;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const UserForm = () => {
  const [newNickname, setNewNickname] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const dispatch = useDispatch();
  const { passwordChangeDone, passwordChangeLoading, me, imagePaths } =
    useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onClickNickname = useCallback(() => {
    setNewNickname((cur) => !cur);
  }, [setNewNickname]);
  const onClickPassword = useCallback(() => {
    setNewPassword((cur) => !cur);
  }, [setNewPassword]);

  const onError = (error) => {
    console.log(error);
  };

  const onSubmitNickname = useCallback(() => {
    const { nickname } = getValues();
    dispatch({
      type: NICKNAME_CHANGE_REQUEST,
      data: nickname,
    });
  }, []);

  const onSubmitPassword = useCallback(() => {
    const { currentPassword, changePassword } = getValues();
    dispatch({
      type: PASSWORD_CHANGE_REQUEST,
      data: { currentPassword, changePassword },
    });
  }, []);

  const onSubmitDeleteUser = useCallback(() => {
    console.log(me.id);
    dispatch({
      type: DELETE_USER_REQUEST,
      data: me.id,
    });
    Router.push('/');
  }, []);

  useEffect(() => {
    if (passwordChangeDone && !passwordChangeLoading) {
      dispatch({
        type: LOG_OUT_REQUEST,
      });
      Router.push('/login');
    }
  }, [passwordChangeDone]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((event) => {
    console.log('images', event.target.files);
    // ????????? ????????? ???????????? ???????????? ??????.
    const imageFormData = new FormData();
    // FormData??? ???????????? ???????????? ???????????? ???????????????.
    //  ???????????? ???????????? ????????? multer??? ????????? ??? ??????.
    [].forEach.call(event.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: USER_IMAGE_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onSubmit = useCallback(() => {
    const formData = new FormData();
    imagePaths.forEach((img) => {
      formData.append('image', img);
    });
    return dispatch({
      type: ADD_USER_IMG_TO_ME_REQUEST,
      data: formData,
    });
  }, [imagePaths]);

  const onRemoveImage = useCallback(
    () => () => {
      dispatch({
        type: REMOVE_IMAGE,
      });
    },
    [],
  );
  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <input
          type="button"
          value="????????? ?????????"
          onClick={onClickImageUpload}
          accept="image/*"
          className="blackBtn"
        />

        <div className="img">
          {imagePaths[0] ? (
            <>
              <img
                src={`http://localhost:3100/${imagePaths[0]}`}
                style={{ width: '200px', borderRadius: '50%' }}
                alt="img"
              />
              <div>
                <button type="button" onClick={onRemoveImage()}>
                  ??????
                </button>
                <input type="submit" value="????????? ??????" className="blackBtn" />
              </div>
            </>
          ) : null}
        </div>
      </form>

      <button onClick={onClickNickname} type="button">
        NICKNAME ??????
      </button>
      {newNickname && (
        <form onSubmit={handleSubmit(onSubmitNickname, onError)}>
          <input
            id="nickname"
            type="text"
            placeholder="?????? ???????????? ??????????????????"
            {...register('nickname', {
              required: true,
            })}
          />
          {errors.nickname && errors.nickname.type === 'required' && (
            <span style={{ color: 'red' }}>??????????????????</span>
          )}
          <input type="submit" value="??????" />
        </form>
      )}
      <button onClick={onClickPassword} type="button">
        ???????????? ??????
      </button>
      {newPassword && (
        <form onSubmit={handleSubmit(onSubmitPassword, onError)}>
          <input
            id="currentPassword"
            type="password"
            placeholder="?????? ??????????????? ??????????????????"
            {...register('currentPassword', {
              required: true,
            })}
          />
          <input
            id="changePassword"
            type="password"
            placeholder="?????? ??????????????? ??????????????????"
            {...register('changePassword', {
              required: true,
            })}
          />
          <input type="submit" value="??????" />
        </form>
      )}
      <button type="button" onClick={onSubmitDeleteUser}>
        ????????????
      </button>
    </Container>
  );
};

export default UserForm;
