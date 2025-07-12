import { useCallback } from 'react';

import { FixedSizeGrid as Grid } from 'react-window';

import AutoSizer from 'react-virtualized-auto-sizer';

import UserCard from '../UserCard/UserCard';
import SearchInput from '../../common/SearchInput';

import { User } from '../../../types';

import {
  GridContainer,
  LoadingContainer,
  ErrorContainer,
  ListHeader,
  ListContent,
  WhiteCardWrapper,
} from './VirtualizedCardList.styles';

interface VirtualizedCardListProps {
  users: User[];
  loading?: boolean;
  error: null | Error;
  search?: string;
  onSearch?: (term: string) => void;
}

const MAX_CARD_WIDTH = 300;
const MIN_CARD_WIDTH = 250;
const CARD_HEIGHT = 200;
const GAP = 16;

const VirtualizedCardList = ({
  users,
  loading,
  error,
  search = '',
  onSearch,
}: VirtualizedCardListProps) => {
  const Cell = useCallback(
    ({ columnIndex, rowIndex, style, data }: any) => {
      const { columnWidth } = data;
      const index = rowIndex * data.columnCount + columnIndex;
      if (index >= users.length) return null;

      const user = users[index];
      return (
        <div
          style={{
            ...style,
            left: Number(style.left) + GAP / 2,
            top: Number(style.top) + GAP / 2,
            width: columnWidth - GAP,
            height: CARD_HEIGHT,
            padding: GAP / 2,
          }}
        >
          <WhiteCardWrapper>
            <UserCard user={user} className="card-container" />
          </WhiteCardWrapper>
        </div>
      );
    },
    [users]
  );

  if (loading) {
    return (
      <LoadingContainer>
        <div>Loading...</div>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <div>Error: {error.message}</div>
      </ErrorContainer>
    );
  }

  return (
    <ListContent>
      {onSearch && (
        <ListHeader>
          <SearchInput
            value={search}
            onChange={onSearch}
            placeholder="Search users..."
            debounceMs={400}
          />
        </ListHeader>
      )}
      {users.length === 0 ? (
        <ErrorContainer>
          <div>No users found</div>
        </ErrorContainer>
      ) : (
        <GridContainer>
          <AutoSizer>
            {({ height, width }) => {
              // Calculate how many columns can fit, ensuring at least 1 column
              const columnCount = Math.max(1, Math.floor((width - GAP) / (MAX_CARD_WIDTH + GAP)));
              // Calculate the actual card width based on available space
              const columnWidth = Math.max(
                MIN_CARD_WIDTH,
                Math.min(MAX_CARD_WIDTH, (width - GAP * (columnCount + 1)) / columnCount)
              );
              const rowCount = Math.ceil(users.length / columnCount);

              return (
                <Grid
                  columnCount={columnCount}
                  columnWidth={columnWidth + GAP}
                  height={height}
                  rowCount={rowCount}
                  rowHeight={CARD_HEIGHT + GAP}
                  width={width}
                  itemData={{ columnCount, columnWidth }}
                >
                  {Cell}
                </Grid>
              );
            }}
          </AutoSizer>
        </GridContainer>
      )}
    </ListContent>
  );
};

export default VirtualizedCardList;
