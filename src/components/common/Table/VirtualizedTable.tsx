import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import {
  VirtualizedTd,
  VirtualizedTh,
  VirtualizedRow,
  VirtualizedHeaderRow,
  VirtualizedWrapper,
  VirtualizedContainer,
  VirtualizedBodyContainer,
  VirtualizedCell,
} from './Table.styles';

import { Column } from './table.types';

interface VirtualizedTableProps<T> {
  data: T[];
  columns: Column<T>[];
  height: string;
  rowHeight?: number;
}

const ROW_HEIGHT = 50;
const MIN_TABLE_WIDTH = 800; // Match with StyledTable min-width

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
        <VirtualizedRow style={style}>
          {columns.map((column) => (
            <VirtualizedCell key={column.key} width={column.width}>
              <VirtualizedTd>
                {column.render ? column.render(row[column.key], row) : row[column.key]}
              </VirtualizedTd>
            </VirtualizedCell>
          ))}
        </VirtualizedRow>
      );
    };

    return (
      <List
        height={height}
        width={Math.max(width, MIN_TABLE_WIDTH)}
        itemCount={data.length}
        itemSize={rowHeight}
        overscanCount={5}
      >
        {Row}
      </List>
    );
  };

  return (
    <VirtualizedWrapper>
      <VirtualizedContainer>
        <VirtualizedHeaderRow>
          {columns.map((column) => (
            <VirtualizedCell key={column.key} width={column.width}>
              <VirtualizedTh>{column.header}</VirtualizedTh>
            </VirtualizedCell>
          ))}
        </VirtualizedHeaderRow>
        <VirtualizedBodyContainer height={height}>
          <AutoSizer>
            {({ height, width }) => <VirtualizedBody height={height} width={width} />}
          </AutoSizer>
        </VirtualizedBodyContainer>
      </VirtualizedContainer>
    </VirtualizedWrapper>
  );
};

export default VirtualizedTable;
