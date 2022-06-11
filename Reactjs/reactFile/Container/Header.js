import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
const Header = ({count}) => {
  return (
    <div>
        <nav className='navbar navbar-light bg-warning'>
            <a className='navbar-brand'>Restaurant</a>
            <button className='btn btn-danger'>
               <Link to='/Order' style={{color:'white',textDecoration:'none'}} >Orders</Link> <span className='badge badge-dark'>{count}</span>
            </button>
        </nav>
    </div>
  )
}
const mapStateToProps=state=>({
  count : state.orderreducer.length
})
export default connect(mapStateToProps) (Header);