import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Wallet = ({
  addNewBank,
  addNewCard,
  children,
  className,
  onAddNewBank,
  onAddNewCard,
  ...others
}) => {
  return (
    <div className={classnames('atomikui-wallet', className)} {...others}>
      {children}
    </div>
  );
};

Wallet.propTypes = {
  /** Enables Add new bank button */
  addNewBank: PropTypes.bool,
  /* Enables add new card button */
  addNewCard: PropTypes.bool,
  /** Payment method passed in to Wallet as children */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Callback when add bank button is clicked */
  onAddNewBank: PropTypes.func,
  /** Callback when add card button is clicked */
  onAddNewCard: PropTypes.func,
};

Wallet.defaultProps = {
  addNewBank: false,
  addNewCard: false,
  children: <></>,
  className: '',
  onAddNewBank: null,
  onAddNewCard: null,
};

export default Wallet;
