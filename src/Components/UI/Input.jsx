const Input = ({ onChange, value, placeholder, type, required }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      required={required}
      className="block w-full rounded-md bg-inputBg px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-inputBorger placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
  )
}

export default Input;