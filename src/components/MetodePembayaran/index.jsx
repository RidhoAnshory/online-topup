import React from 'react'
import Marquee from 'react-fast-marquee'
import BankCard from './components/BankCard'

const MetodePembayaran = () => {
  return (
    <section className="w-full lg:w-[480px] mx-auto h-full bg-base-200 p-6">
      <h5 className="mb-6 text-xl font-bold">Metode Pembayaran</h5>

      <Marquee
        gradient={true}
        className="rounded-lg"
        gradientColor={['198', '179', '134']}
        gradientWidth={20}
      >
        <BankCard />
        <BankCard />
        <BankCard />
        <BankCard />
      </Marquee>
    </section>
  )
}

export default MetodePembayaran
