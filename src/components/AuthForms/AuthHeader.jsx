import React from 'react'
import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'

export default function AuthHeader() {
  return (
    <>
      <Link to="/user/">
        <button>
          <BsPersonCircle className="text-[1.2rem] text-black dark:text-white" />
        </button>
      </Link>
    </>
  )
}
