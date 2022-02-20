require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  networks: {
    hardhat: {
        saveDeployments: false
    },
    ropsten: {
        url: `https://ropsten.infura.io/v3/429eb57532b54560b1d4cc4201724bf0`,
        accounts: ['0x4d35d875115d8255e79ebfb37d65fe080f7c1f311668524c88f75ade0a747b32'],
    }
  },
  solidity: {
    compilers: [{
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 800,
        },
      },
    }]
  }
};
