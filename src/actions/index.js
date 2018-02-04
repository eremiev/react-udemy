export function selectBook(book) {
    // selectBook is an ActionContainer, it needs to return an action,
    // an object with a type property.

    const BOOK_SELECTED = 'BOOK_SELECTED';

    return {
        type: BOOK_SELECTED,
        payload: book
    };
}