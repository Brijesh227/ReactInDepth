import { useState } from 'react';

let timer: ReturnType<typeof setTimeout> | undefined;   // very important outside of function
export default function Debounce() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState<Array<string>>([]);

  const fetchList = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const data = await response.json();
    console.log('fecth call for',id);
    const nameList = [data?.body];
    setList(nameList);
  }

  const debounce = (callback: any, delay: number) => {
    return (...args: any[]) => {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      },delay);
    }
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e?.target as HTMLInputElement;
    setSearch(value);
  
    if (value.length > 0) {
      const searchItem = debounce(fetchList, 500);
      searchItem(value);
    }
  }

  return (
    <div className='text-center'>
      <h1>Debounce</h1>
      <div className='mx-auto w-full max-w-xs'>
        <input 
          type="text" 
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
          placeholder="search"
          onKeyUp={e => handleSearch(e)}
        />
        {
          search?.length > 0 && list.length > 0 && (
            <div className="mt-2 divide-y rounded-lg shadow w-full bg-white">
              <ul className="py-2 text-sm text-gray-700">
                {list?.map((item: string, index: number) => (
                  <li className="block px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors" key={index}>
                    <span className="line-clamp-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}