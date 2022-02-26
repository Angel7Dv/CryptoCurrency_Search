import React, { useState } from 'react'

const CoinsTable = ({ coins }) => {
  const [searsh, setSearsh] = useState("")

  const filterSearsh = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searsh.toLowerCase()) |
    coin.symbol.toLowerCase().includes(searsh.toLowerCase()))
  console.log(filterSearsh[0])
  return (
    <div>
      <div className="overflow-x-auto mt-12">
        <div className="mx-6 rounded-md min-w-screen min-h-screen  flex items-start justify-center font-sans overflow-hidden">
          <div className="mx-auto w-full bg-gray-100 ">
      <div className="flex justify-center mt-12">
        <input className='w-1/2 p-1 bg-gray-800 rounded-lg text-center' type="text" placeholder='searsh' onChange={e => setSearsh(e.target.value)} />
      </div>
            <div className="mx-6 shadow-md rounded my-6 ">
              <table className="mx-auto min-w-max w-full table text-gray-400  border-separate  text-sm">
                <thead >
                  <tr className="bg-gray-500 text-gray-100 uppercase text-sm leading-normal">
                    <th className="py-3 px-6  text-left">#</th>
                    <th className="py-3 px-6  text-left"></th>
                    <th className="py-3 px-6  text-left">name</th>
                    <th className="py-3 px-6  text-left">price</th>
                    <th className="py-3 px-6  text-left">24h%</th>
                    <th className="py-3 px-6  text-left">Cap. market</th>
                  </tr>
                </thead>
                <tbody className="my-2 text-gray-600 text-sm font-light">
                  {filterSearsh.map((coin, index) =>

                    <tr key={coin.id} className="bg-gray-300 font-bold border border-slate-900 shadow-md hover:shadow-red-500 hover:bg-gray-200 hover:text-gray-900">
                      <td className="py-3 px-6  text-left ">
                        <div className=" flex items-center">
                          {index + 1}
                        </div>
                      </td>

                      <td className="py-3 px-6  text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className='hover:bg-gradient-to-b bg-gradient-to-t from-gray-50 to-gray-300 mx-2 bg-gray-800 rounded-full'>
                          <img className="m-1 w-6 h-6 rounded-full" src={coin.image} alt={coin.id}/>
                          </div>
                            {coin.symbol}
                        </div>
                      </td>
                      <td className="py-3 px-6  text-left">
                        <div className="flex items-center">                    
                            {coin.id}
                        </div>
                      </td>
                      <td className="py-3 px-6  text-left">
                        <div className="flex">                    
                            {coin.current_price}$
                       
                        </div>
                      </td>
  
                      <td className="py-2 px-6  text-left">
                        <div className="flex items-center">  
                        <div className='rounded border border-gray-500 '>
                          <div className={ coin.price_change_percentage_24h > 0 ? 'bg-teal-500 px-1' : 'bg-red-500 px-1' }>
                            <p className='text-gray-50'>
                              {coin.price_change_percentage_24h}
                            
                              </p>
                          </div>
                          </div>                  
                        </div>
                      </td>

                      <td className="py-3 px-6  text-left">
                        <div className="flex items-center">                    
                         
                            {coin.market_cap}
                            
                        </div>
                      </td>
                    </tr>

                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CoinsTable


