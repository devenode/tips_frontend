import searchSVG from '../../icons/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchInput } from '../../actions/mainSearch';
import s from './styles.module.css';


export const Search = props => {
   const searchState = useSelector(state => state.mainSearch);
   const dispatch = useDispatch();

   const handleSearchInputChange = e => {
      dispatch(changeSearchInput(e.target.value));
   }

   return (
      <div className={`input-box ${s.mainSearch}`}>
         <img src={searchSVG} alt="" />
         <input type="text" placeholder="Search…" onChange={handleSearchInputChange} value={searchState.value} />
      </div>
   )
}


export default Search;
