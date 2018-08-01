"use strict";
// tslint:disable:object-literal-sort-keys
Object.defineProperty(exports, "__esModule", { value: true });

export default {
  networks: {
    cmt: {
      bip32: {
      public: 0x043587cf, 
      private: 0x04358394,
      },
	  name: 'mainnet',
      nethash: '20700d78709abd9f48c2c1970eb3202b1076b6dc83b0ed851a9f52dd84c9d1ed',
      token: 'CMT',
      symbol: 'CMT',
      version: 0x1c, // Addresses will begin with 'A'
      explorer: 'http://178.128.66.43:4200',
      wif: 0xBB, // Network prefix for wif generation
      activePeer: {
      ip: '178.128.66.43',
      port: 4100
      },
      peers: [],
      },
    devnet: {
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
name: 'devnet',
    nethash: '578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23',
    token: 'TEST',
    symbol: 'TEST',
    version: 28, // Addresses will begin with 'a'
    explorer: 'https://dexplorer.ark.io',
    wif: 0xba, // Network prefix for wif generation
    activePeer: {
      ip: '104.238.165.129',
      port: 4002
    },
    peers: [],
  },
  },
  blockchain: {
    interval: 8,
    delegates: 51,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};

//# sourceMappingURL=index.js.map

console.log('using cmt costum content');
