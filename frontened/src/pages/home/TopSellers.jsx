import React, { useEffect, useState } from 'react'
import BookCard from "../../pages/books/BookCard";

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination , Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const categories =["choose a genre", "Business", "Fiction", "Horror", "Adventure"]
const TopSellers = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("choose a genre");
    const {data: books = []} = useFetchAllBooksQuery()
    //console.log(books)

    const filteredBooks = selectedCategory === "choose a genre" ? books: books.filter(books =>
        books.category == selectedCategory.toLowerCase())
    
    
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
      {/* category filter*/}
      <div className='mb-8 flex items-center'>
        <select 
        onChange ={(e) => setSelectedCategory(e.target.value)}
        name="category" id="category" className='border bg-[#EAEAEA]
        border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
        {
            categories.map((category, index) => (
                <option key ={index} value={category}>{category}</option>
            ))
        }
        </select>
        
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
        
        filteredBooks.length > 0 && filteredBooks.map((book, index) => (
          <SwiperSlide key={index}>
            <BookCard book={book}/>
          </SwiperSlide>
            
        ))
        }
        
        
      </Swiper>
      
    </div>
  )
}

export default TopSellers
