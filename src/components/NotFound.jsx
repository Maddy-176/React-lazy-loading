import React from 'react'
import LoadingScreen from './LoadingScreen'; 
import { Suspense } from 'react';

function NotFound() {
  return (
    <>
    <Suspense fallback={<LoadingScreen/>}>
    <h2>404: Not Found </h2>
    </Suspense>
    </>
  )
}

export default NotFound