module.exports = {
  name: 'Payment Wallet',
  content: './styleguide/docs/Wallet.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/wallet/Wallet.js',
      'src/components/wallet-item/WalletItem.js',
    ];
  },
};
