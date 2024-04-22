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

  const handleSearchChange = (e)=>{
    e.preventDefault()
    setFilteredRepositories(userData.filter( filt => filt.name.toLowerCase().includes(e.target.value)))
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
       onChange={handleSearchChange}
       placeholder='Search...'/>

       <button className='search__btn' type="button">Search</button>
     

    </section>
  )
} 

export default SearchBar