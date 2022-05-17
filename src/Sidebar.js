import React from 'react'
import ReactDom from 'react-dom'
import './style/Sidebar.css'
import { BsLayoutTextSidebar, BsPencilSquare } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'

import { useMyContext } from './context'

function Sidebar() {
  const value = useMyContext()
  //Const of body styling
  const handleOpen = () => {
    value.setIsOpen(!value.isOpen)
  }
  const handleClose = () => {
    value.setIsOpen(!value.isOpen)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const obj = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value,
      phone: e.target.phoneNumber.value,
      occupation: e.target.occupation.value,
    }
    value.setData([...value.data, obj])
    console.log(value.data)
  }
  return (
    <aside className='sidebar'>
      <div className={value.isOpen ? 'open sidebar-body' : 'sidebar-body'}>
        <button onClick={handleClose}>
          <ImCross size={20} style={{ color: 'wheat' }} />
        </button>
        <form className='resume-form' onSubmit={handleFormSubmit}>
          <div className='form-section'>
            <label htmlFor='#'>Name</label>
            <input name='name' id='name' />
          </div>
          <div className='form-section'>
            <label htmlFor='#'>Age</label>
            <input name='age' />
          </div>
          <div className='form-section'>
            <label htmlFor='#'>Phone Number</label>
            <input name='phoneNumber' />
          </div>
          <div className='form-section'>
            <label htmlFor='#'>Email</label>
            <input name='email' />
          </div>
          <div className='form-section'>
            <label htmlFor='#'>Fancied Job</label>
            <input name='occupation' />
          </div>
          <div className='form-section'>
            <button type='submit'>Produce resume</button>
          </div>
        </form>
      </div>
      <nav className='navbar'>
        <div className='sidebar-toggle'>
          <button onClick={handleOpen}>
            <BsPencilSquare size={45} style={{ color: 'wheat' }} />
          </button>
        </div>
        <div className='navbar-elements'>
          <div className='navbar-element'>
            <a href='#'>Home</a>
          </div>
          <div className='navbar-element'>
            <a href='#'>Resumes</a>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
