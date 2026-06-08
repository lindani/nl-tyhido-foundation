import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    // Full-screen overlay
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose} // Close if overlay is clicked
    >
      {/*
        MODAL CONTAINER:
        - Now a flex column.
        - Has a max-height to prevent it from being taller than the screen.
      */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col max-h-[90vh] text-black ${className}`}
        onClick={(e) => e.stopPropagation()} // Prevents clicks inside from closing the modal
      >
        {/*
          HEADER:
          - This part is "sticky" at the top and does not scroll.
          - flex-shrink-0 prevents it from shrinking.
        */}
        <div className="flex-shrink-0 flex justify-between items-center p-5 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-primary-600">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors rounded-full p-1"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/*
          CONTENT BODY:
          - This is the key change. overflow-y-auto makes this div scrollable
            if its content is too tall.
        */}
        <div className="overflow-y-auto p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal