import React, { Fragment, useState } from 'react'
import zxcvbn from 'zxcvbn'

const PasswordStrengthBackground = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [blur, setBlur] = useState(20)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  const handlePasswordChange = (e) => {
    console.log(zxcvbn(e.target.value))

    const { guesses_log10 } = zxcvbn(e.target.value)
    setBlur(20 - Math.floor(guesses_log10) * 2)
    setPassword(e.target.value)
  }

  return (
    <Fragment>
      <div
        className='background'
        id='background'
        style={{ filter: `blur(${blur}px)` }}
      ></div>
      <div className='bg-white rounded p-10 text-center shadow-md'>
        <h1 className='text-3xl'>Image Password Strength</h1>
        <p className='text-sm text-gray-700'>
          Change the password to see the effect
        </p>
        <div className='my-4 text-left'>
          <label forHTML='email' className='text-gray-900'>
            Email:
          </label>
          <input
            type='text'
            className='border block w-full p-2 mt-2 rounded'
            id='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='my-4 text-left'>
          <label forHTML='email' className='text-gray-900'>
            Password:
          </label>
          <input
            type='password'
            className='border block w-full p-2 mt-2 rounded'
            id='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>

        <button
          className='bg-black text-white py-2 mt-4 inline-block w-full rounded'
          type='submit'
          onSubmit={(e) => submitHandler(e)}
        >
          Submit
        </button>
      </div>
    </Fragment>
  )
}

export default PasswordStrengthBackground
