const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "demise depend swamp body license verb ill domain coffee add token cotton",
  "https://rinkeby.infura.io/1sbPLqIfIUFuBhHJV4QW"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  console.log(accounts);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "5000000" });

  console.log("Contract deployed to", result.options.address);
};

deploy();
