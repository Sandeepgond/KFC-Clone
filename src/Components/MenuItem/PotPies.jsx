import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { LocationMatersModal } from "../LocationMatersModal";

//  const getData=async()=>{
//      try {
//         const response = await fetch(`https://your-api-project-kfc-api.herokuapp.com/posts`);
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.log("error", error);
//       }
//  }

export default function PotPies(){
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('https://your-api-project-kfcnews.herokuapp.com/posts');
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);
       return (
       <>
      {
        data.map((item)=>{
          return (
          <div key={item.id}><img className="hover" style={{width:"100%",backgroundColor:"#F8F7F5"}} src={item.imgUrl} />  
              <h3  style={{lineHeight:"25px"}}>{item.title}</h3>
              <p>{item.calorie}</p>
             <p>{item.location}</p>
            </div>)
        })
       }
      </>
      )
}