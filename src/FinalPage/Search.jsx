import React,{useState} from 'react'
import { setSearch } from '../logicpart/Action';
import { useSelector,useDispatch } from 'react-redux';
import data from '../Datapart/Data';
function ProductSearch() {
    const [state, setstate] = useState('');
    const searchQuery = useSelector(state => state.searchBar);
    const dispatch = useDispatch();
  
    const handleSearch = e => {
       
      setstate(e.target.value)
      // dispatch(setSearch(state));
    };
     

    return (
      <div>
        <input type="text" placeholder="Search products" value={state} onChange={handleSearch} />
        <button onClick={()=>dispatch(setSearch(state))}>Search</button>
        {
          <ul>
            {
              searchQuery?.map((v,i)=>{
                return <h1>{v.title}</h1>
              })
              }
            
          </ul>
        }
      </div>
    );
  }
export default ProductSearch
