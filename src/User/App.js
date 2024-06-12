import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './UserStyle.css'
import SignInPage from './SignInPage'
import Registration from './Registration'
import RegSignUp from './RegSignUp'
import Head from './Head'
import Step2SignUp from './Step2SignUp'
import PlanForm from './PlanForm'
import PaymentPicker from './PaymentPicker'
import CreditCardPage from './CreditCardPage'


const App = () => {
  return (
    <div className='admin-mainG'>
    <div className='headG'>
        <Head />
    </div>
    <div className='adminHomeG'>
        <Routes>
        <Route path="/SignInPage" element={<SignInPage/>} />
            <Route path="/Registration" element={<Registration/>} />
            <Route path="/RegSignUp" element={<RegSignUp/>} />
            <Route path="/Step2SignUp" element={<Step2SignUp/>} />
            <Route path="/PlanForm" element={<PlanForm/>} />
            <Route path="/PaymentPicker" element={<PaymentPicker/>} />
            <Route path="/CreditCardPage" element={<CreditCardPage/>} />
        </Routes>
    </div>
</div>
  )
}

export default App