import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ListingCardGrid from '../src/components/ListingCardGrid'
import MOCK_DATA from '../MOCK_DATA.json'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ListingCardGrid data={MOCK_DATA} />
    </div>
  )
}

export default Home
