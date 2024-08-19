import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import React, {useCallback, useEffect, useRef} from "react";
import Pagination from "../components/pagination";

import qs from 'qs'
import { useNavigate} from "react-router-dom";
import {sortList} from '../components/Sort'

import {useSelector} from "react-redux";
import {setCategoryId, setPageCount, setFilters} from "../redux/slices/filter/slice";
import {fetchPizzas} from "../redux/slices/pizza/slice";
import { SearchPizzaParams} from "../redux/slices/pizza/types"
import {RootState, useAppDispatch} from "../redux/store";


const Home: React.FC = () => {
    const navigate = useNavigate()
    const {categoryId, sort, pageCount, searchValue} = useSelector((state:RootState) => state.filterSlice)
    const items = useSelector((state:RootState) => state.pizzaSlice.items)
    const sortType = sort.sortProperty
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const search = searchValue ? `&search=${searchValue}` : ''

    const dispatch = useAppDispatch()
    const onClickCategory = (id:number) => {
        dispatch(setCategoryId(Number(id)));
    }

    const onChangePage = useCallback((page:number) => {
        dispatch(setPageCount(page));
    },[]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
            const sort = sortList.find(obj => obj.sortProperty === params.sortType);

            dispatch(setFilters({
                searchValue:params.search,
                categoryId:Number(params.categoryId),
                pageCount:Number(params.pageCount),
                sort:sort? sort: sortList[0]
            }))
            isSearch.current = true;
        }
    }, [])
    const getPizzas = async () => {

        try {

            dispatch(fetchPizzas({
                pageCount,
                categoryId,
                sortType,
                search
            }))
        } catch (error) {
            console.log(error)
        }

        window.scroll(0, 0)
    };

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sort: sort.sortProperty,
                categoryId,
                pageCount
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sortType, searchValue, pageCount]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!isSearch.current) {
            getPizzas();
        }
        isSearch.current = false;

    }, [categoryId, sort, searchValue, pageCount]);

    const pizzas = items.map((obj:any) => <PizzaBlock
        id={obj.id}
        key={obj.id}
        image={obj.image}
        price={obj.price}
        title={obj.title}
        sizes={obj.sizes}
        type={obj.types}
        />)


    return (
        <div className='container'>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort value={sort}/>

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas
                }

            </div>
            <Pagination onChange={number => onChangePage(number)}/>
        </div>

    )
}
export default Home
