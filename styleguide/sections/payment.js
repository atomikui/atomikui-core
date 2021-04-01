module.exports = {
  name: 'Payment',
  content: './styleguide/docs/Payment.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/cart/Cart.jsx',
    'src/components/wallet/Wallet.jsx',
    'src/components/wallet-item/WalletItem.jsx',
  ],
};
