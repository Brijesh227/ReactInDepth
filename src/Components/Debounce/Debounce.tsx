import { useState } from 'react';

export default function Debounce() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState<Array<string>>([]);

  const fetchList = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    const nameList = data.map((item: any) => item.username);
    setList(nameList);
  }

  // const debounce = (func: Function, delay: number) => {
  //   let timer: any;
  //   return function (...args: any[]) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, delay);
  //   }
  // }

  const debounce = (callback: any, delay: number) => {
    return () => {
      setTimeout(() => {
        callback()
      },delay)
    }
  }


  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e?.target as HTMLInputElement;
    if (value?.length > 0) {
      setSearch(value);
      debounce(fetchList, 500)(value);
    } else {
      setSearch('');
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
          search?.length > 0 && list.length > 0 &&
          <div className="divide-y rounded-lg shadow w-full">
            <ul className="py-2 text-sm text-gray-700">
              <li className="block px-4 py-2 hover:bg-gray-300">
                <span>Dashboard</span>
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}