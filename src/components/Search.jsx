import React from 'react';

function Search({ handleClickOpen, handleSearch, title }) {
    return (
        <div className='flex px-5 justify-between items-center mt-4'>
            <div className='font-bold text-xl flex'>
                List {title}
            </div>
            <div>
                <input onChange={handleSearch} className='pl-2 py-2 w-120 border-2 rounded-xl' type="text" placeholder='Search by Name' />
            </div>
            <div onClick={handleClickOpen} className='py-4 px-2 text- bg-blue-600 text-white text-xl h-11 flex rounded-xl items-center text-xs'>ADD TYPE CHAIR</div>
        </div>
    );
}

export default Search;