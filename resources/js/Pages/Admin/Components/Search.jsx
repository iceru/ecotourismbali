import Button from '@/Components/Button';

function Search({ buttonClick, setData, data }) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={data?.search}
        className="rounded outline-none w-40 px-4 py-2"
        onChange={e => setData('search', e.target.value)}
      />
      <Button onClick={buttonClick} />
    </div>
  );
}

export default Search;
