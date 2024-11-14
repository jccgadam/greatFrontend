import React from "react";
import {IDataTableOneComponentProps} from './Interface';
import './style.scss';
import { sortBy } from 'lodash';
export const DataTableOneComponent = (props: IDataTableOneComponentProps) => {
    const {data = [], headers} = props;
    const [pageSize, setPageSize] = React.useState(props.pageSize || 5);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [ sorter,setSorter ] = React.useState({key:'index',direction:-1});
    const currentPageData = () => {
        const startIndex = (currentPage - 1) * pageSize;
        return sortBy(data,sorter.key).slice(startIndex, startIndex + pageSize);
    }
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(parseInt(e.target.value));
        setCurrentPage(1);
    }
    const maxPage = Math.round(data.length/pageSize);
    const handleNavClick = (direction: number) => {
        if(currentPage+direction>0&&currentPage+direction<=maxPage) {
            setCurrentPage(currentPage + direction);
        }
    }
    const renderNav = ()=>{
        return <div>
            <button onClick={()=>handleNavClick(-1)}>{'<'}</button>
            <button onClick={()=>handleNavClick(1)}>{'>'}</button>
        </div>
    }
    const renderFooter = () => {
        return <select onChange={handleSelect} value={pageSize}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
        </select>
    }
    const handleClickOnHeader = (e:any)=>{
        const { direction } = sorter;
        setSorter({
            key: e.target.innerText,
            direction: direction ===-1 ? 1 : -1
        })
    }
    return <div style={{width: 300 }}>
        <table>
            <thead>
            <tr onClick={(handleClickOnHeader)}>
                {headers.map(({label, key}) => (
                    <th key={key}>{label}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {currentPageData().map(({id, name, age, occupation}) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{occupation}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <footer>
        {renderFooter()}
        {renderNav()}
        </footer>
    </div>
}