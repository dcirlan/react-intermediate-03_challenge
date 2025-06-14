import React, { useEffect, useState } from 'react';

export default function Message() {
  useEffect(() => {
    console.log(`user is logged in`);
  }, []);

  useEffect(() => {
    return () => {
      console.log(`Bye !`);
    }
  }, []);

  return <h1>User is logged in</h1>;
}
