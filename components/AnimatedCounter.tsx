'use client';
import CountUp from 'react-countup';
const AnimatedCounter = ({amount}:{amount : number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        decimal=','
        decimals={2}
        duration={2.75}
        prefix='$'
        end={amount} />
    </div>
  )
}

export default AnimatedCounter