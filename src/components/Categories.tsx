import React, {memo} from 'react';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';


type CategoriesProps = {
    value: number;
    onClickCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = memo(({value, onClickCategory}:CategoriesProps) => {

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName, index) => (
                        <li key={index} onClick={() => onClickCategory(index)} className={value === index ? 'active': ''}>{categoryName}</li>

                    ))
                }
               </ul>
        </div>
    )
})
export default Categories