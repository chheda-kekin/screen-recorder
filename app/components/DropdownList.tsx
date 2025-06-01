"use client";

import Image from "next/image";
import { useState } from "react";

const filterOptions = ['Most recent', 'Most liked', 'Oldest first', 'Last viewed']

const DropdownList = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [filterVal, setFilterVal] = useState('Most Recent');

    const handleSelectFilter = (filterVal) => {
        setFilterVal(filterVal);
        setIsOpen(false);
    }

    return (
        <>
            <div className="relative">
                <div className="cursor-pointer" onClick={() => {setIsOpen(currentVal => ! currentVal)}}>
                    <div className="filter-trigger">
                        <figure>
                            <Image src="/assets/icons/hamburger.svg" alt="menu icon"  width={14} height={14} />
                            {filterVal}
                        </figure>
                        <Image src="/assets/icons/arrow-down.svg" width={20} height={20} alt="Down arrow icon" />
                    </div>
                </div>

                { isOpen && (<ul className="dropdown">
                    {filterOptions.map(option => (<li key={option} className="list-item" onClick={handleSelectFilter.bind(this, option)}> {option} </li>))}    
                </ul>) }
            </div>
        </>
    )
}

export default DropdownList;