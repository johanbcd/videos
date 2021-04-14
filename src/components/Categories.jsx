import React from 'react';
import '../assets/styles/components/Categories.scss'

export default function Categories({children, title}) {
    return (
        <div className="categories">
            <h2 className="categories__title">{title}</h2>
                {children}
        </div>
    )
}
