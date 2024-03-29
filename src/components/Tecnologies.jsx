/* eslint-disable react/prop-types */
export const Tecnologies = ({ tecnologies }) => {
  return (
    <ul className="flex items-center gap-2 flex-wrap">
      {tecnologies.map((tag, index) => (
        <li
          key={index}
          className="rounded-full bg-gradient-to-r from-gray-100 via-green-50 to-amber-50 border px-2 py-1 font-semibold md:px-4 text-black"
        >
          <span>{tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tecnologies;
