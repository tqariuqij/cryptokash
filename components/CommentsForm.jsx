import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h1>post comment form</h1>
    </div>
  )
}

export default CommentsForm
