import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { GrHome } from "react-icons/gr";

const Custom404: NextPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <Link href={`/`} passHref>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GrHome style={{fontSize: '30px', marginTop: '40px'}} /><br/>
          <span>go to Home page</span>
        </div>
      </Link>
    </div>
  );
};

export default Custom404;
