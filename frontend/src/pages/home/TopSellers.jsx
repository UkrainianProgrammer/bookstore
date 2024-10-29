import React, {useEffect, useState} from 'react'

const categories = ['Choose a genre', 'Business', 'Fiction', 'Horror', 'Adventure'];

const TopSellers = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Choose a genre');

    useEffect(() => {
        fetch('books.json')
        .then(response => response.json())
        .then(data => setBooks(data));
    }, []);

    const filteredBooks = selectedCategory === 'Choose a genre' ? books : books.filter(book => book.category === selectedCategory.toLowerCase());

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            {/* category filtering */}
            <div className='mb-8 flex items-center'>
                <select onChange={(e) => setSelectedCategory(e.target.value)}
                    name='category' id='category' className='border bg-[#EAEAEA] border-gray-300 
                    rounded-md px-4 py-2 focus:outline-none'>
                    {
                    categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
        
            {/* book list */}
            {
            filteredBooks.map((book, index) => (
                <div key={index} className='flex flex-col items-center gap-6 mb-8'>
                    <img src={book.image} alt={book.title} className='object-cover w-full h-60'/>
                    <h3 className='text-xl font-medium mb-2'>{book.title}</h3>
                    <p className='text-sm'>By {book.author}</p>
                    <p className='text-sm'>{book.category}</p>
                </div>
                ))
            }
        </div>
    )
}

export default TopSellers