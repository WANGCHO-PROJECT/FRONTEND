import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  const [nick, setNick] = useState('');
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    const storedNick = sessionStorage.getItem('nickname');
    const storedSignIn = sessionStorage.getItem('isSignIn');

    if (storedNick && storedSignIn) {
      setNick(JSON.parse(storedNick));
      setIsSignIn(JSON.parse(storedSignIn));
    }
  }, []);

  const signOutHandler = () => {
    sessionStorage.removeItem('nickname');
    sessionStorage.removeItem('isSignIn');
    let date = new Date();
    document.cookie = `authorization=; expires=${date.toUTCString()}; path=/`;

    sessionStorage.clear();
    alert('로그아웃 했습니다.');
    setNick('');
    setIsSignIn(false);
  };

  return (
    <Section>
      <HeaderItems>
        <Link to="/">왕초닷컴</Link>
      </HeaderItems>
      <HeaderItems>
        {isSignIn ? (
          <>
            <div>{nick}님 어서오세요</div>
            <button onClick={signOutHandler}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
            <Link to="/login">
              <button>로그인</button>
            </Link>
        
          </>
        )}
      </HeaderItems>
      <HeaderName>3조</HeaderName>
    </Section>
  );
}

export default Header;

const Section = styled.section`
  margin: 15px 20px;
`;

const HeaderName = styled.span`
  float: right;
`;

const HeaderItems = styled.span`
  align-items: center;
  padding: 20px;
`;
