import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShop } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { Container, Logo, Menu, Toggled, User } from './styled';

const Header = () => {
  const [isToggled, isSetToggled] = useState(false);
  const { me } = useSelector((state) => state.user);

  const toggledHandler = () => {
    isSetToggled((pre) => !pre);
  };

  return (
    <Container isToggled={isToggled}>
      {/* 로고 */}
      <Logo>
        <Link href="/">
          <a>
            <FontAwesomeIcon icon={faShop} />
            <h2>항상마켓</h2>
          </a>
        </Link>
      </Logo>
      {/* 토글 */}

      <Toggled onclick={toggledHandler}>
        <Link href="/aside">
          <a>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </Link>
      </Toggled>

      {/* 메뉴 */}
      <Menu>
        <ul>
          <li>물건</li>
          <li>문의</li>
          {me && (
            <li className="uploadItem">
              <Link href="post">
                <a>물건 올리기</a>
              </Link>
            </li>
          )}
        </ul>
      </Menu>
      {/* user */}
      {me ? (
        <>
          <User>
            <div>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </div>
            <div>
              <Link href="/profile">
                <a style={{ fontSize: '14px' }}>{me.nickname}님 프로필</a>
              </Link>
            </div>
          </User>
        </>
      ) : (
        <User>
          <div>
            <Link href="/login">
              <a>로그인</a>
            </Link>
          </div>
          <div>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </div>
        </User>
      )}
    </Container>
  );
};

export default Header;
