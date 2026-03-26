import { useState } from 'react';

interface Props {
  categories: { key: string; label: string }[];
  onFilter: (category: string) => void;
}

export default function ProjectFilter({ categories, onFilter }: Props) {
  const [active, setActive] = useState('all');

  const handleClick = (key: string) => {
    setActive(key);
    onFilter(key);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => handleClick(cat.key)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            active === cat.key
              ? 'bg-accent text-white shadow-lg shadow-accent/25'
              : 'bg-surface-light text-slate-300 hover:bg-surface-lighter border border-slate-700'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
