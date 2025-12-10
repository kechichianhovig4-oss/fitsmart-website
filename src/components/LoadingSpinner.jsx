import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-red-600"></div>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner