// src/components/ui/CustomToast.jsx
import toast from 'react-hot-toast';

export const showCustomToast = ({
  user = 'Ndithini Foundation',
  message = 'This feature is coming soon!',
  avatar = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
  className = '',
  textClassName = ''
}) => {
  toast.custom((t) => (
    <div
      className={`$%7Bt.visible%20?%20'animate-enter'%20:%20'animate-leave'%7D max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 ${className}`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium text-gray-900 ${textClassName}`}>
              {user}
            </p>
            <p className={`mt-1 text-sm text-gray-500 ${textClassName}`}>
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};
export default showCustomToast