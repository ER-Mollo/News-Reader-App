export default function CategoryFilter({ setCategory }) {
  const categories = ["General", "Business", "Technology", "Health", "Sports"];

  return (
    <div className="w-full max-w-xs mx-auto mb-6">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      >
        {categories.map((category) => (
          <option key={category} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
