//https://eth-kovan.alchemyapi.io/v2/DZnOxE2MpUD_0LJZ868jQ155cuyAK2Rp

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    kovan: {
      url: 'https://eth-kovan.alchemyapi.io/v2/DZnOxE2MpUD_0LJZ868jQ155cuyAK2Rp',
      accounts: [ 'ae61d0df8f98c9b0c86db6a5be67c157d9e561a15eeb75b341b0a7645b35e87f' ]
    }
  }
}