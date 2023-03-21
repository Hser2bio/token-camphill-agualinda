import { SwapComponent } from '../components/SwapComponent';
import { Container } from '@chakra-ui/react';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';




export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      foo: "bar"
    }
  }
}

const Home: NextPage = ({ foo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // console.log("Hello12");
  // const myPublicKey = usePublicKey();
  return (
    <div className={styles.container}>
      <Head>
        <title>Soul Again Whitelisting</title>
        <meta name="Soul Again Whitelisting" content="A Crypto Elites Club App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
      <main className={styles.main}>
        <Container>
          
          <SwapComponent />
        
        </Container>
      </main>
      </div>
    </div>
  );
};

export default Home;
