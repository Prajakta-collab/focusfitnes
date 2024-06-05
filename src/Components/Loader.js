import React from 'react';

const Loader = ({ loading }) => {
  return (
    loading ? (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    ) : null
  );
};

export default Loader;
