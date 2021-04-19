//import styles from '../styles/Home.module.css'
import react from 'react'
import Header from './components/Header'
import React, { useContext, useEffect } from 'react'
import UserProvider from './providers/UserProvider';
import { checkLoggedIn } from './components/generic/token';

export default function Home() {

  checkLoggedIn();

  return (
    <div >
      <Header />
      <br />
      <h1 align="center">HOME</h1>
    </div>
  )
}
