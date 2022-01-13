import React, { useState, useEffect, useRef } from "react";
// Styles
import { Wrapper, Content } from './SearchBar.styles';
// images
import searchicon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial=useRef(true);

    useEffect(() => { //useEffect always trigger on initial render
        if(initial.current){
            initial.current=false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)
        return () => clearTimeout(timer) //when returning in useEffect, it runs the returned statement before each render -- here , clear timer
    }, [setSearchTerm, state]);
    return (
        <Wrapper>
            <Content>
                <img src={searchicon} alt='search-icon' />
                <input
                    type='text'
                    placeholder="Search Movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
}

export default SearchBar;