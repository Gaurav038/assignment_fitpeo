import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './topProduct.css'

function TopProduct() {
  return (
    <div className='topProduct'>

        <div className='top-heading'>
            <div className='head-bold'>
                Top Product
            </div>
            <div className='arrowD'>
                Monthly
                <KeyboardArrowDownIcon />
            </div>
        </div>
        <div className='item-product'>
            <div className='icon'>
                <span>#1</span>
            </div>
            <div className='right'>
                <div className='info'>
                    <div>Blue Y-shirt</div>
                    <smalll className='text-muted'>$25</smalll>
                </div>
                <div className='success' >4544</div>
            </div>
        </div>
        <div className='item-product'>
            <div className='icon'>
                <span>#1</span>
            </div>
            <div className='right'>
                <div className='info'>
                    <div>Blue Y-shirt</div>
                    <smalll className='text-muted'>$25</smalll>
                </div>
                <div className='success' >4544</div>
            </div>
        </div>
        <div className='item-product'>
            <div className='icon'>
                <span>#1</span>
            </div>
            <div className='right'>
                <div className='info'>
                    <div>Blue Y-shirt</div>
                    <smalll className='text-muted'>$25</smalll>
                </div>
                <div className='success' >4544</div>
            </div>
        </div>
    </div>
  )
}

export default TopProduct