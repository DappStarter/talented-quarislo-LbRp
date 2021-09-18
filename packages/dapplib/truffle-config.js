require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind concert gesture nation fresh suggest'; 
let testAccounts = [
"0xd0c089c74d948ccfcff5aa51d6337b649df3e19d5fab8b52ea9f3442bd6bba73",
"0xa9541e351b267a225022cd1f1e07aec945c6f2af16c546086e145037a0cef04e",
"0x4aea8d50ed24da464cb85f4db3f37134230581a72444bf359615064b0b489042",
"0xeb3f3a01557924688280cd151f9e3eec1836bea180c706b652620000f5fc0ff1",
"0x93a9503ab4a652bb87352f2021e9492decf01d0ac8d896b3f4cc0020d725203e",
"0xe53d7c9e3ce39aa0ffaabddc0d1f1f8dd73d59bdf931ae9a161d8ea1b51f5a8b",
"0x276484fb6bd0680d178399dee116baa936ad8ea4cadfed4c9cd8a7093e932ee3",
"0x6158da7ad8b222bbf2c1d116e0bcc35297d7a7c4daaac4b9476b6aa6ea23630d",
"0x081d34a961cbf2325cf8144938bdea852a050b7c17cbfc8be77dd9b280b8a0ee",
"0xca789cfab5af66aeebb8aaebf8651ca196aeb065916403bf25fcf01c10ea9c60"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

