import { Td } from './Table.styles';
import { Column } from './table.types';

interface TableBodyProps<T> {
  data: T[];
  columns: Column<T>[];
}

const TableBody = <T extends Record<string, any>>({ data, columns }: TableBodyProps<T>) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <Td key={column.key}>
              {column.render ? column.render(row[column.key], row) : row[column.key]}
            </Td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
