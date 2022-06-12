import { GlobalMainWrapper } from './Components/MainApp/GlobalMainWrapper';
import React, { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./index.css";
import "./test.css"
import { getAllGames, setPage } from './Redux/gameReducer';
import Filters from './Components/Filters/Filters';
function App() {
  const { searchInput, page, count, isEndOfList, selectedPlatform, selectedSort } = useSelector(state => state.game);
  const dispatch = useDispatch()
  const [pageSize, setPageSize] = useState(17)

  useLayoutEffect(() => {
    dispatch(getAllGames({ page: page, pageSize: pageSize, search: searchInput }))
    dispatch(setPage(page + 1))
  }, [dispatch, searchInput, selectedPlatform, selectedSort])
  console.log(page);

  const nextAction = () => {
    dispatch(setPage(page + 1));
    dispatch(getAllGames({ page: page, pageSize: pageSize, search: searchInput }))
  }

  return (
    <>
      <Filters />
      <GlobalMainWrapper nextAction={nextAction} isEndOfList={isEndOfList} count={count} />
    </>
  );
}
export default App;