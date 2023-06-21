import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';
import {BlockList} from "./BlockList";
import Spinner from "./Spinner";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastBlock = await alchemy.core.getBlockNumber();
        setBlockNumber(lastBlock)

        const blocks = await Promise.all(
          Array.from({ length: 10 }, (_, i) => alchemy.core.getBlock(lastBlock - i))
        );
        console.log(blocks);

        setBlocks(blocks);
      } catch (error) {
        // Handle any errors that occur during fetching
        console.error("Error fetching blocks:", error);
      }
    };

    fetchData();
  }, []);

  console.log(blocks);
  return (
    <>
      <div className="App">Block Number: {blockNumber}</div>
      <h3>10 last blocks</h3>
      {blocks.length > 0 ? <BlockList blocks={blocks} /> : <Spinner />}
    </>

  )
}

export default App;
