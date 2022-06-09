import Image from 'next/image'
import React from 'react'

const BankCard = () => {
  return (
    <div className="flex items-center mr-4">
      <Image
        src="https://api.menorigaming.com/media/bank-dbs-indonesia-foto-dok-dbs-5-3831.png"
        alt="DBS"
        height={50}
        width={100}
        className="rounded-lg"
      />
    </div>
  )
}

export default BankCard
