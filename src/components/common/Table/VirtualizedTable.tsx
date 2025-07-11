import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Td, Th } from './Table.styles';
import { Column } from './table.types';

interface VirtualizedTableProps<T> {
  data: T[];
  columns: Column<T>[];
  height: string;
  rowHeight?: number;
}

const ROW_HEIGHT = 50;

const VirtualizedTable = <T extends Record<string, any>>({
  data,
  columns,
  height,
  rowHeight = ROW_HEIGHT,
}: VirtualizedTableProps<T>) => {
  const VirtualizedBody = ({ height, width }: { height: number; width: number }) => {
    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
      const row = data[index];
      return (
        <tr style={{ ...style, display: 'flex' }}>
          {columns.map((column) => (
            <Td key={column.key} style={{ flex: column.width ? `0 0 ${column.width}` : 1 }}>
              {column.render ? column.render(row[column.key], row) : row[column.key]}
            </Td>
          ))}
        </tr>
      );
    };

    return (
      <div style={{ height, width }}>
        <List height={height} width={width} itemCount={data.length} itemSize={rowHeight}>
          {Row}
        </List>
      </div>
    );
  };

  return (
    <>
      <thead>
        <tr style={{ display: 'flex' }}>
          {columns.map((column) => (
            <Th
              key={column.key}
              width={column.width}
              style={{ flex: column.width ? `0 0 ${column.width}` : 1 }}
            >
              {column.header}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody style={{ display: 'block', height }}>
        <AutoSizer>
          {({ height, width }) => <VirtualizedBody height={height} width={width} />}
        </AutoSizer>
      </tbody>
    </>
  );
};

export default VirtualizedTable;
