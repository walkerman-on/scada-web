import { FC, memo } from 'react';
import cl from "./Input.module.scss"
import Search from 'antd/es/input/Search';

const SearchF = () => {
    return (
        <Search placeholder="Поиск..." allowClear onSearch={onSearch} style={{ width: 200 }} />
    );
};

export const Search = memo(SearchF);
