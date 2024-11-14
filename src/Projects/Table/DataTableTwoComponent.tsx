import React from "react";
import { DataTableOneComponent} from "./DataTableOneComponent";
import { IDataTableOneComponentProps } from "./Interface";



export const DataTableTwoComponent = (props:IDataTableOneComponentProps) => {
    const { data,headers } = props;

    const sortedData = data.sort((a, b) => a.id - b.id);
    return <DataTableOneComponent data={data} headers={headers} />
}