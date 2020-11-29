require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth soap clutch gesture slender equal gauge'; 
let testAccounts = [
"0x46eca3158473a5256991869a8a320d167f2467b2e025d5026e3d93414256eefb",
"0x3df466dc4a0b58e4f124825d2f43d1fa99c01961a01d74e866eae33aaa1a4fe0",
"0x31ad163d4b6ddb20f472c14b8262c02f040c5657f8253fc28ae947f1272e5219",
"0x35e4ce8981201469e09b9ef49bd2faa8eb52a77b6449cb2764b3899b353e5aa2",
"0xa93863e7e54b8e04201b5e28dd65c6b04a96a39b3a3da8268857adb05bf287fa",
"0x5cebe7f1898c1a7959537c66c37bb37c51ade159459df99924593cde8a041659",
"0xdd53c63877f46ee3a6a85cbaab19198cdc41904bf076429ce5e78d9105bfc724",
"0x1cbab9030bc4f3d948ae6812e7b4f6ee0c1b4c9705b61162a50a443cc796ffd1",
"0xd671bbdff8acd8dee10fca6f7bb6cab5ddea60d7d73f58ffd07667fd6f5463bd",
"0x537432573a915568acd283d15753a119cba44d246b257a8a3614bad3700675a9"
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
            version: '^0.5.11'
        }
    }
};
