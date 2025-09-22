import axios from 'axios'
import { useState , useEffect} from 'react'

const url = 'https://dummyjson.com'

function CategoryApi() {
  const [category , setCategory] = useState([])
  useEffect(() => {
    const readCategories = async () => {
      const out = await axios.get(`${url}/products/categories`);
      setCategory(out.data);
    };
  readCategories();
}, []);

  return {
    category: [category, setCategory]

  }
}

export default CategoryApi
