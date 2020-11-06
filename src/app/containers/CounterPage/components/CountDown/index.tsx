import React, { memo, useEffect } from 'react';

export const WithMemo = memo(() => {
  useEffect(() => {
    console.log('[with memo useEffect]')
  }, []);
  const func = () => {
    console.log('[with memo function]')
  }
  console.log('[with memo rerender]')
  return <div>with memo view</div>;
});

export const WithoutMemo = () => {
  useEffect(() => {
    console.log('[without memo useEffect]')
  }, []);
  const func = () => {
    console.log('[without memo function]')
  }
  console.log('[without memo rerender]')
  return (
    <div>without memo view</div>
  )
};
