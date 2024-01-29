import { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';
import ReadContract from './components/ReadContract';
import WriteContract from './components/WriteContract';
import ABI from './ABI/ABI.json';

//step-1: Create all components
//step-2: To connect the blockchain
//step-3: To create an instance of smart contract
function App() {
  const [state, setState] = useState({ web3: null, contract: null });
  useEffect(() => {
    const template = async () => {
      let web3 = new Web3(
        new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/')
      );
      const contractAddress = '0x144e820Ac9Aaf528D1586954A937d24Db5d57Fd5';
      const contractInstance = new web3.eth.Contract(ABI, contractAddress);
      setState({ web3: web3, contract: contractInstance });
    };
    template();
  }, []);

  return (
    <>
      <ReadContract state={state} />
      <WriteContract state={state} />
    </>
  );
}

export default App;
