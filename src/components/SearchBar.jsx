import { useState, useEffect } from 'react';
import './SearchBar.css'

function SearchBar({ filteredRepositories, setFilteredRepositories, userData, setUserData}) {
    const [searchRepo, setSearchRepo] = useState('');
    
// useEffect(()=>{
//   const filtered = userData.filter(repo =>
//     repo.name.toLowerCase().includes(searchRepo.toLowerCase())
//   );
//   setFilteredRepositories(filtered);
// },[searchRepo, userData])

// const handleSearchChange = (event) => {
//   setSearchRepo(event.target.value);
//   const filtered = userData.filter(repo =>
//     repo.name.toLowerCase().includes(searchRepo.toLowerCase())
//   );
//   setFilteredRepositories(filtered);
// };

  const handleSearchClick = (e)=>{
    e.preventDefault()
    const filtered = userData.filter(repo =>
    repo.name.toLowerCase().includes(searchRepo.toLowerCase())
    );
       setSearchRepo(filtered);
  }

    // const handleSearchClick = (e) =>{
    //     e.preventDefault()
    //     console.log(e.target.value)
    //    setSearchRepo(e.target.value) 
    // }
  return (
    <section className='search__content'>
       <input 
       className='search' 
       type="text" 
       value={searchRepo}
       onChange={(e)=> setSearchRepo(e.target.value)}
       placeholder='Search...'/>

       <button onClick={handleSearchClick}  className='search__btn' type="button">Search</button>
    
       {/* {filteredRepositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))} */}
    </section>
  )
} 

export default SearchBar