import React, { useState } from 'react';
import { styles } from './style';
import { Button, Text, View } from 'react-native';

type Props = {
    totalItemsCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    portionSize?: number;
};

const Paginator: React.FC<Props> = ({
    totalItemsCount,
    pageSize,
    currentPage = 1,
    onPageChanged = () => {},
    portionSize = 10,
}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <View style={styles.paginator}>
            {
                <Button
                    disabled={!(portionNumber > 1)}
                    title="PREV"
                    onPress={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                />
            }

            {pages
                .filter(
                    (page) =>
                        page >= leftPortionPageNumber &&
                        page <= rightPortionPageNumber
                )
                .map((page) => {
                    return (
                        <Text
                            style={
                                currentPage === page
                                    ? styles.selectedPage
                                    : styles.pages
                            }
                            key={page}
                            onPress={() => onPageChanged(page)}
                        >
                            {page}
                        </Text>
                    );
                })}
            {
                <Button
                    disabled={!(portionCount > portionNumber)}
                    title="NEXT"
                    onPress={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                />
            }
        </View>
    );
};

export default Paginator;
