"use client"
import React, { useState } from 'react'
import Data from '@/Shared/Data'
import Image from 'next/image' 

const CategoryList = ({onCategoryChange}:any) => {
    const [categoryList, setCategoryList] = useState(Data.CategoryListData)

    const [selectedCategory, setSelectedCategory] = useState(undefined)
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {categoryList.map((item, index:any) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer text-[13px] border-purple-400 ${selectedCategory === index ? 'grayscale-0 border-[1px]' : ''
                            }`}
                        onClick={() => {
                            setSelectedCategory(index);
                            onCategoryChange(item.value);
                        }}
                    >
                        <img src={item.icon} alt={item.name} width={40} height={40} />
                        {item.name}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CategoryList