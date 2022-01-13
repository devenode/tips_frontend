import searchSVG from '../icons/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchInput } from '../actions'


export const Search = props => {
   const searchState = useSelector(state => state.mainSearch);
   const dispatch = useDispatch();

   const handleSearchInputChange = e => {
      dispatch(changeSearchInput(e.target.value));
   }

   return (
      <div className="input-box main-search">
         <img src={searchSVG} alt="" />
         <input type="text" placeholder="Search…" onChange={handleSearchInputChange} value={searchState.value} />
      </div>
   )
}


export default Search;
