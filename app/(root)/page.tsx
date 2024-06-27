import React from 'react'
import HeaderBox from './../../components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName: 'Tauqeer'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
        <HeaderBox
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext = "Access and manage your account and transaction efficiently"
        />
        <TotalBalanceBox
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={1254.25}
        />
        </header>
       RECENT TRANSACTION
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[]}
      />
    </section>
  )
}

export default Home