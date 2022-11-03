import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeHeader from './components/HomeHeader'
import ProjectsList from './components/ProjectsList'

export default function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <HomeHeader ></HomeHeader>
        <ProjectsList></ProjectsList>
      </div>
          
    </>
  )
}
