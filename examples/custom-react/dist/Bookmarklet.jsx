import React from 'react';
import styled from 'styled-components';

const BookmarkletContainer = styled.div`
  text-align: center;
`;

const BookmarkletLink = styled.a`
  display: inline-block;
  padding: .5em 1em;
  color: #fff;
  background: #50dcf3;
  border-radius: 4px;
  text-decoration: none;
`;

const Bookmarklet = () => {
  return (
    <BookmarkContainer>
      <p>
        <BookmarkletLink href="javascript:(function(){!function(e)%7Bvar%20t%3D%7B%7D%3Bfunction%20n(r)%7Bif(t%5Br%5D)return%20t%5Br%5D.exports%3Bvar%20o%3Dt%5Br%5D%3D%7Bi%3Ar%2Cl%3A!1%2Cexports%3A%7B%7D%7D%3Breturn%20e%5Br%5D.call(o.exports%2Co%2Co.exports%2Cn)%2Co.l%3D!0%2Co.exports%7Dn.m%3De%2Cn.c%3Dt%2Cn.d%3Dfunction(e%2Ct%2Cr)%7Bn.o(e%2Ct)%7C%7CObject.defineProperty(e%2Ct%2C%7Benumerable%3A!0%2Cget%3Ar%7D)%7D%2Cn.r%3Dfunction(e)%7B%22undefined%22!%3Dtypeof%20Symbol%26%26Symbol.toStringTag%26%26Object.defineProperty(e%2CSymbol.toStringTag%2C%7Bvalue%3A%22Module%22%7D)%2CObject.defineProperty(e%2C%22__esModule%22%2C%7Bvalue%3A!0%7D)%7D%2Cn.t%3Dfunction(e%2Ct)%7Bif(1%26t%26%26(e%3Dn(e))%2C8%26t)return%20e%3Bif(4%26t%26%26%22object%22%3D%3Dtypeof%20e%26%26e%26%26e.__esModule)return%20e%3Bvar%20r%3DObject.create(null)%3Bif(n.r(r)%2CObject.defineProperty(r%2C%22default%22%2C%7Benumerable%3A!0%2Cvalue%3Ae%7D)%2C2%26t%26%26%22string%22!%3Dtypeof%20e)for(var%20o%20in%20e)n.d(r%2Co%2Cfunction(t)%7Breturn%20e%5Bt%5D%7D.bind(null%2Co))%3Breturn%20r%7D%2Cn.n%3Dfunction(e)%7Bvar%20t%3De%26%26e.__esModule%3Ffunction()%7Breturn%20e.default%7D%3Afunction()%7Breturn%20e%7D%3Breturn%20n.d(t%2C%22a%22%2Ct)%2Ct%7D%2Cn.o%3Dfunction(e%2Ct)%7Breturn%20Object.prototype.hasOwnProperty.call(e%2Ct)%7D%2Cn.p%3D%22%22%2Cn(n.s%3D0)%7D(%5Bfunction(e%2Ct)%7Bconst%20n%3Ddocument.createElement(%22div%22)%3Bn.innerHTML%3D%22Hello%20world%22%2Cdocument.body.appendChild(n)%7D%5D)%3B})()">Bookmarklet</BookmarkletLink>
      </p> 
      <p>
        Drag this button to your bookmarks bar to save it as a bookmarklet.<br/>
        <bold>Another Cool Bookmarklet</bold> by Jon Nicholson.
      </p>
    </BookmarkContainer>
  )
};

export default Bookmarklet;
