const cartSubTotal = (items) =>
  items.reduce(
    (a, b) => (b.props.quantity > 0 ? b.props.price * b.props.quantity + a : a),
    0,
  );

export default cartSubTotal;
