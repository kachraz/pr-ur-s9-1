// classses export
export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-indigo-900 text-indigo-400 hover:text-indigo-100 hover:bg-indigo-600"
      {...props}
    >
      {children}
    </button>
  );
}
