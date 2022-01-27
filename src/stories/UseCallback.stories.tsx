import React, {useCallback, useMemo, useState} from "react";

export default {
  title: 'useCallback demo',
}

// 19. useCallback

export const LikeUseCallback = () => {
  console.log('LikeUseCallback')
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['React', 'Redux', 'JS', 'HTML'])

  const memoizedAddBook = useMemo(() => {   // используем для обектов и масивов
    return () => {
      console.log(books)
      const newBooks = [...books, 'Angular' + new Date().getTime()]
      setBooks(newBooks)
    }
  }, [books])

  const memoizedAddBook2 = useCallback(() => {    // 19. для функиций callback
    console.log(books)
    const newBooks = [...books, 'Angular' + new Date().getTime()]
    setBooks(newBooks)
  }, [books])

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
    <Book addBook={memoizedAddBook2}/>
  </>
}

const BooksSecret = (props: { addBook: () => void }) => {
  console.log('BooksSecret')
  return <div>
    <button onClick={() => props.addBook()}>add user</button>
  </div>
}

const Book = React.memo(BooksSecret)