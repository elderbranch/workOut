const Button = ({func, text}) => {
  return (
    <button
      onClick={func}
      className="mx-auto mt-[17px] flex w-3/6 justify-center rounded-lg bg-btnColor px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{text}</button>
  )
}

export default Button