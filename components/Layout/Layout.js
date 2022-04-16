import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
const Layout = ({ children, title = "Impact Food" }) => {
  return (
    <StyledLayoutContainer>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <StyledLinkHeader>
          <Link href="/">
            <StyledAnchorLink>
              <h1>IMPACT FOOD</h1>
            </StyledAnchorLink>
          </Link>
        </StyledLinkHeader>
      </header>
      <main>{children}</main>
    </StyledLayoutContainer>
  );
};

const StyledLayoutContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledLinkHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px;
  font-size: 1.5rem;
  
`;
const StyledAnchorLink = styled.a`
  > h1 {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default Layout;
