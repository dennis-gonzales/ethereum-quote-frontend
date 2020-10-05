import web3 from './web3';

// contract address
const address = '0xcFA173528f68295797873A6b5042cA6Fe42DDa9D';

// contract abi/interface
const abi = [{ "constant": false, "inputs": [{ "name": "newQuote", "type": "string" }], "name": "updateQuote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "quote", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "initialQuote", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];

export default new web3.eth.Contract(abi, address);