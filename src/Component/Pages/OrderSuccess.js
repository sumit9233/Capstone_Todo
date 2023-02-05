import React from 'react'
import Button from '../UI/Button'
import Modal from '../UI/Modal'

const OrderSuccess = (props) => {
  return (
    <Modal onClose={props.onClose} >
        <div style={{fontStyle:'cursive'}}>
            <h3 > Congratualtions...</h3>
            <h3> You have successfully ordered your items!</h3>
            <Button onClick={props.onFinish}>Close</Button>
        </div>
    </Modal>
  )
}

export default OrderSuccess