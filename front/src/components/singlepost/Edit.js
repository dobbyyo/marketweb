import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import {
  REMOVE_IMAGE,
  UPDATE_POST_REQUEST,
  UPLOAD_IMAGES_REQUEST,
} from '../../reducers/post/postAction';
// import { Form } from '../login/styled';

const Form = styled.form`
  display: grid;
  gap: 0.875rem;
  width: 100%;
  padding: 1.5rem 2rem;
  /* justify-content: center; */
  /* background-color: blue; */
  /* label {
    padding: 0.7rem 0;
  } */
  input,
  select {
    border-radius: 0.2rem;
    background-color: #eee;
    color: #000;
    padding: 0.25rem 0.625rem;
    width: 100%;
  }
  .btn {
    display: block;
    background-color: #201c2c;
    color: #fff;
    font-size: 1.6rem;
    border-radius: 1rem;
    border: none;
    margin: 1rem 0;
    width: 40%;
  }
  .img {
    display: flex;
    justify-content: center;
  }
  .imgContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    height: 80vh;
    width: 80%;
    justify-content: space-around;
    label {
      width: 100%;
      height: 2rem;
    }
    select,
    input {
      height: 4rem;
    }
  }
`;

const Edit = ({ post }) => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      title: post.title,
      content: post.content,
      price: post.price,
      clothes: post.clothes,
      people: post.people,
    },
  });

  const onSubmit = useCallback(() => {
    const { title, content, price, clothes, people } = getValues();

    console.log(imagePaths);
    const formData = new FormData();
    imagePaths.forEach((img) => {
      formData.append('image', img);
    });
    formData.append('title', title);
    formData.append('content', content);
    formData.append('price', price);
    formData.append('clothes', clothes);
    formData.append('people', people);
    dispatch({
      type: UPDATE_POST_REQUEST,
      data: { data: formData, PostId: post.id },
    });
    Router.back();
  }, [imagePaths]);

  const onError = (error) => {
    console.log(error);
  };

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((event) => {
    console.log('images', event.target.files);
    const imageFormData = new FormData();
    [].forEach.call(event.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    [],
  );

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      encType="multipart/form-data"
    >
      <label htmlFor="title">??????</label>
      <input
        id="title"
        name="title"
        type="text"
        {...register('title', {
          required: true,
        })}
      />
      {errors.title && errors.title.type === 'required' && (
        <span style={{ color: 'red' }}>????????? ??????????????????</span>
      )}
      <label htmlFor="content">??????</label>
      <input
        id="content"
        name="content"
        type="text"
        {...register('content', {
          required: true,
        })}
      />
      {errors.content && errors.content.type === 'required' && (
        <span style={{ color: 'red' }}>????????? ??????????????????</span>
      )}

      <label htmlFor="price">??????</label>
      <input
        id="price"
        name="price"
        type="number"
        {...register('price', {
          required: true,
        })}
      />
      {errors.price && errors.price.type === 'required' && (
        <span style={{ color: 'red' }}>????????? ??????????????????</span>
      )}

      <label htmlFor="clothes">??? ??????</label>
      <select id="clothes" name="clothes" {...register('clothes')}>
        <option value="none" disabled>
          ???????????????
        </option>
        <option value="??????">??????</option>
        <option value="?????????">?????????</option>
        <option value="?????????">?????????</option>
        <option value="??????">??????</option>
        <option value="?????????">?????????</option>
        <option value="??????">??????</option>
      </select>

      <label htmlFor="people">??????</label>
      <select id="people" name="people" {...register('people')}>
        <option value="none" disabled>
          ???????????????
        </option>
        <option value="all">??????</option>
        <option value="man">??????</option>
        <option value="girl">??????</option>
        <option value="child">??????</option>
      </select>

      <div className="imgContainer">
        <input
          type="file"
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
          className="btn"
        />
      </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={v} className="img">
            <img
              src={`http://localhost:3100/${v}`}
              style={{ width: '200px' }}
              alt="img"
            />
            {/* ????????? Express.static ??????????????? */}
            <div>
              <button type="button" onClick={onRemoveImage(i)}>
                ??????
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="imgContainer">
        <input className="btn" type="submit" value="??????" />
      </div>
    </Form>
  );
};

Edit.propTypes = {
  post: PropTypes.shape({
    Comment: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
    User: PropTypes.shape({
      id: PropTypes.number,
      nickname: PropTypes.string,
    }),
    UserId: PropTypes.number,
    clothes: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
    people: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Edit;
