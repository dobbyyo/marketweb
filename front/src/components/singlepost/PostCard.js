import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faBars,
  faCommentDots,
  faHeart,
  faHeartCrack,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import ImgCard from './ImgCard';
import noImg from '../../img/noimg.png';
import {
  LIKE_POST_REQUEST,
  REMOVE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
} from '../../reducers/post/postAction';
import CommentCard from '../commnet/CommentCard';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user/userAction';
import Edit from './Edit';
import { BoxContainer, Header, Img, Info, Option } from './styled';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const [commentOpen, setCommentOpen] = useState(false);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
    return Router.push('/');
  });

  const onClickComment = useCallback(() => {
    setCommentOpen((cur) => !cur);
  });

  const onClickBack = useCallback(() => {
    Router.push('/girl');
  });
  const onClickLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onClickUnLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  let liked;
  if (post.Likers) {
    liked = post && post.Likers.find((v) => v.id === id);
  }

  const [bars, setBars] = useState(false);
  const onClickBars = useCallback(() => {
    setBars((cur) => !cur);
  }, [setBars]);

  const [edit, setEdit] = useState(false);

  const onClickChange = useCallback(() => {
    setEdit((cur) => !cur);
  }, [setEdit]);

  return (
    <BoxContainer>
      {edit ? (
        <Edit post={post} />
      ) : (
        <>
          {post && (
            <>
              <Header>
                <div className="header__left">
                  <FontAwesomeIcon
                    icon={faArrowAltCircleLeft}
                    onClick={onClickBack}
                    style={{ cursor: 'pointer' }}
                  />
                  <div>{post.User.nickname}</div>
                </div>
                <div className="middle">
                  <div>{post.title}</div>
                </div>
                {id && post.User.id === id && (
                  <div className="header__right">
                    <FontAwesomeIcon icon={faBars} onClick={onClickBars} />
                    {bars && (
                      <Option>
                        <FontAwesomeIcon icon={faXmark} onClick={onClickBars} />
                        <button type="button" onClick={onRemovePost}>
                          게시글 삭제
                        </button>
                        <button type="button" onClick={onClickChange}>
                          게시글 수정
                        </button>
                      </Option>
                    )}
                  </div>
                )}
              </Header>
              {post.Images[0] ? (
                <ImgCard images={post.Images} />
              ) : (
                <Img src={noImg.src} alt="img" />
              )}
              <Info>
                <div className="middle">
                  <div>가격: {post.price}</div>

                  {liked ? (
                    <button type="button" onClick={onClickUnLike}>
                      <FontAwesomeIcon icon={faHeartCrack} className="icon" />
                      싫어요
                    </button>
                  ) : (
                    <button type="button" onClick={onClickLike}>
                      <FontAwesomeIcon icon={faHeart} className="icon" />
                      좋아요
                    </button>
                  )}
                </div>
                <div className="main">{post.content}</div>
                <div className="footer">
                  <div>종류: {post.clothes}</div>
                  <div>
                    <button
                      type="button"
                      className="commentBtn"
                      onClick={onClickComment}
                    >
                      <FontAwesomeIcon icon={faCommentDots} />
                    </button>
                  </div>
                  <div>성별: {post.people}</div>
                </div>
                {commentOpen ? <CommentCard post={post} /> : null}
              </Info>
            </>
          )}
        </>
      )}
    </BoxContainer>
  );
};

PostCard.propTypes = {
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

export default PostCard;
