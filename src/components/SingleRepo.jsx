import React,{ useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { GITHUB_API} from '../utils/data'
import Component from './Component';

function SingleRepo() {
  const [userData, setUserData] = useState([]);
const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(()=> {
    async function fetchSingleRepo(){
        try{
          const response = await fetch(`${GITHUB_API}`)
          if (!response.ok){
            throw new Error('Network response was not ok')
          }
          const data = await response.json();
          console.log(data)
          setUserData(data.slice(0,1))
         } catch(error){
          console.log(error)
          setError('Error fetching data. Please try again.');
         }
      }
      fetchSingleRepo()
    },[id])
  return (
    <div>
      {error ? (<div>{error}</div>) : 
       userData.map((user) => (
        <section key={user.id} className='repo__container'>
            <ul>
              <li>Name {user.name}</li>
              <li>Fork {user.forks}</li>
            </ul>
          </section>
       ))
      }
    </div>
  );
}

export default SingleRepo
