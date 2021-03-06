/* eslint-disable react/jsx-props-no-spreading */
import NextLink from 'next/link';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
