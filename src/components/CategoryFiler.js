export default function CategoryFilter({ setCategory }) {
    const categories = ["General", "Business", "Technology", "Health", "Sports"];
  
    return (
      <div>
        <select onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
  