import React from 'react'

const Loading = () => {
  return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-900 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50">
          <h1 className="text-white text-3xl">
              Stay Seated, Stay Sharp. Starting Quiz In a moment!
          </h1>
      </div>
  );
}

export default Loading
