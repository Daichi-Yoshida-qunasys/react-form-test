import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const AlertText = ({ children }: Props) => {
  return (
    <p style={{ color: 'red', fontSize: '10px', textAlign: 'left' }}>
      {children}
    </p>
  );
};
