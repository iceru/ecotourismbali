import Button from '@/Components/Button';

function Search({ buttonClick, setData, data }) {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={data?.search}
        className="rounded outline-none w-56 px-2 h-full mr-2 py-[7.5px]"
        onChange={e => setData('search', e.target.value)}
      />
      <Button onClick={buttonClick}>Search</Button>
    </div>
  );
}

export default Search;
