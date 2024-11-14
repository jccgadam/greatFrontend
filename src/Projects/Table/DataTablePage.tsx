import { DataTableOneComponent} from "./DataTableOneComponent";
import data from './users.json';

export const DataTablePage = ()=>{
    const headers = ['id','name','age','occupation'].map((value,index)=>({ label:value,key:value,id:index+'0'}));

    return <DataTableOneComponent data={data} headers={headers} pageSize={10}/>
}