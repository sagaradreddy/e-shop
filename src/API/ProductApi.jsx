import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const url = `https://dummyjson.com`;

function ProductApi() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [gst, setGst] = useState(5);
  const [dc, setDc] = useState(50);
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const out = await axios.get(`${url}/products`);
        setProducts(out.data.products);
      } catch (error) {
        toast.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);
  const addToCart = async (product) => {
    const check = cart.every((item) => {
      return item.id !== product.id;
    });
    if (check) {
      toast.success("product added to cart");
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      toast.warning("product already in cart");
    }
  };

  return {
    product:[products,setProducts],
    cart: [cart, setCart],
    addToCart: addToCart,
    subTotal: [subTotal, setSubTotal],
    gst: [gst, setGst],
    dc: [dc, setDc],
    discount: [discount, setDiscount],
  };
}

export default ProductApi;
