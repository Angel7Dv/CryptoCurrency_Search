import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import CoinsTable from './components/CoinsTable'

function App() {
  const [coins, setCoins] = useState([])
  const getCoins = async () => {
    const resp = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250`)
    setCoins(resp.data)
  }
  useEffect(() => {
    getCoins()
  }, [])

  return (
    <div className="mx-full ">
      {/* <Navbar/>
      <Header /> */}
      <div className='container w-3/4  mx-auto '>

      <h1 className="mt-24 text-center text-5xl font-bold text-sky-500 shadow-lg flex justify-center p-3 "> CryptoCurrency Search Engine</h1>
      </div>
      <div className='mt-24  mx-full'>
          <CoinsTable coins={coins} />
      </div>
    </div>
  );
}

export default App;
