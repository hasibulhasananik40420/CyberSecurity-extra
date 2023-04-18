import React from 'react'
import { easeIn, motion } from "framer-motion";

const CashonDelivery = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}>
        
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
    </motion.div>
  )
}

export default CashonDelivery