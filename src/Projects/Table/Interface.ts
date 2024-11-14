interface Data{
    "id": number;
    "name": string;
    "age": number,
    "occupation": string
}
interface  Header {
    "id": string;
    label: string;
    key: string;
}
export interface IDataTableOneComponentProps {
    data:Data[];
    pageSize?: number;
    headers:Header[];
}