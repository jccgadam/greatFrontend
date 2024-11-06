import React, {ReactElement} from "react";

export const GenerateTableComponent = (): ReactElement => {
    const [rows, setRows] = React.useState(0);
    const [columns, setColumns] = React.useState(0);
    const renderCols = (rowIndex: number) => Array(columns).fill(null).map((_, i) => {
        return <div style={{display: "table-cell",border: "1px solid #000",padding: 5}}>{i + rowIndex}</div>
    });
    const renderRows = Array(rows).fill(null).map((_, i) => {
        return <div style={{display: "table-row",border: "1px solid #000"}}>{renderCols(i*columns + 1)}</div>
    });
    const renderTable = () => <div style={{display: "table",borderCollapse:'collapse'}}>{renderRows}</div>
    const NumberInput: React.FunctionComponent<{ value: string | number, onInput: any }> = (props) => {
        return <input value={props.value} onInput={props.onInput} type="number" min={1}/>
    };
    const rowInput = <NumberInput value={rows}
                            onInput={(event: React.ChangeEvent<HTMLInputElement>) => setRows(parseInt(event.target.value))}/>
    const colInput = <NumberInput value={columns}
                                  onInput={(event: React.ChangeEvent<HTMLInputElement>) => setColumns(parseInt(event.target.value))}/>
    return <div >
            {rowInput}
            {colInput}
            {renderTable()}
        </div>;
}