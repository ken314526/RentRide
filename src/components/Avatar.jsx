export default function Avatar({ name, image }) {
  const getInitials = (name) => {
    if (!name) return "";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return `${parts[0][0].toUpperCase()}${parts[1][0].toUpperCase()}`;
  };

  return (
    <div className="w-16 h-16 mr-4 mb-4 mt-5 rounded-full flex items-center justify-center bg-gray-300 text-white font-bold text-xl">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </div>
  );
}
