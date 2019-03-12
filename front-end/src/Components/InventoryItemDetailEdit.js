import React, { Component, useState, useEffect, useRef } from 'react'
import BackButton from '../Assets/Icons/SVG/Icon-back-arrow.svg'
import '../Styles/InventoryItemDetailEdit/InventoryItemDetailEdit.css'
import Switch from 'react-switch'

const InventoryItemDetailEdit = () => {
  const [stockStatus, setStockStatus] = useState(true)
  const editInventoryForm = useRef()

  const stockStatusChange = () => {
    stockStatus ? setStockStatus(false) : setStockStatus(true)
  }
  const editItem = () => {
    if (
      !editInventoryForm.current.productName.value ||
      !editInventoryForm.current.lastOrdered.value ||
      !editInventoryForm.current.city.value ||
      !editInventoryForm.current.country.value ||
      !editInventoryForm.current.quantity.value
    ) {
      alert('All fields are required unless marked.')
    }
    const editInventoryItem = {
      name: editInventoryForm.current.productName.value,
      'short-description': editInventoryForm.current.description.value,
      'ordered-by': editInventoryForm.current.lastOrdered.value,
      'last-ordered': editInventoryForm.current.lastOrdered.value,
      city: editInventoryForm.current.city.value,
      country: editInventoryForm.current.country.value,
      quantity: editInventoryForm.current.quantity.value,
      'in-stock': stockStatus
    }
  }

  // const cancelAdd = () => {
  // }

  // if (addStatus)

  return (
    <div className='iide'>
      <div className='iide__one'>
        <img className='iide__backbutton' src={BackButton} alt='backbutton' />
        <h2 className='iide__one__title'>TITLE</h2>
      </div>
      <hr className='iide__hr' />
      <div className='iide__desk'>
        <form className='iide__form'>
          <div className='iide__description__container'>
            <label>Item Description</label>
            <input className='iide__description' />
          </div>
          <div className='iide__desk__two'>
            <div className='iide__info__chunk'>
              <div className='iide__block'>
                <div className='iide__sub'>
                  <label className='iide__header'>ORDERED BY</label>
                  <input className='iide__input' />
                </div>
                <div>
                  <label className='iide__header'>LAST ORDERED</label>
                  <input className='iide__input' />
                </div>
              </div>
              <div className='iide__block'>
                <div className='iide__sub'>
                  <label className='iide__header'>REFERENCE NUMBER</label>
                  <input className='iide__input' />
                </div>
                <div>
                  <label className='iide__header'>LOCATION</label>
                  <select name='country' className='iide__select' required>
                    <option value='' />
                    <option value='Canada'>Canada</option>
                    <option value='US'>US</option>
                    <option value='Mexico'>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='iide__block__bottom'>
              <div className='iide__sub'>
                <div className='iide__block__status'>
                  <div className='iide__sub'>
                    <label className='iide__header'>QUANTITY</label>
                    <input className='iide__input' />
                  </div>
                  <label className='iide__toggle__container'>
                    STATUS
                    <div className='iide__stock'>
                      <span>IN STOCK</span>
                      <Switch
                        checked={stockStatus}
                        onChange={stockStatusChange}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        className='inventoryNew__switch'
                        width={46}
                      />
                    </div>
                  </label>
                </div>
                <div className='iide__categories__container'>
                  <label className='iide__header'>CATEGORIES</label>
                  <input className='iide__input__categories' />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='iide__block__foot'>
      <div className='iide__block__button'>
        <button className='iide__button__save'>SAVE</button>
      </div>
      <button className='iide__button__cancel'>CANCEL</button>
      </div>
    </div>
  )
}
export default InventoryItemDetailEdit

