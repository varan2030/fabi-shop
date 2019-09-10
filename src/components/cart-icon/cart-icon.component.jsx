import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { selecrCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCardHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>
            {itemCount}
        </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selecrCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);