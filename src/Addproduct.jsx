import { useEffect, useState } from "react";

const Addproduct=()=>{

    const [productData,setProductData]=useState({
        ProductName:"",
        Price:""
    })
    const [proItems, setProItems] = useState([]);

    const setvalue=(e)=>{
        const { name, value }=e.target;
            setProductData({
              ...productData,
              [name]: value
            });
            console.log(productData)
        }

        console.log(proItems);


        const Adddata=(e)=>{
            e.preventDefault();
            const isDuplicate = proItems.some(product => product.ProductName === productData.ProductName);
            if (isDuplicate) {
              alert('Product with this name already exists!');
              return;
            }
            const newProduct = {
                id: new Date().getTime(), 
                ...productData
              };
              
              const updatedproItems = [...proItems, newProduct];
              setProItems(updatedproItems);
            
              localStorage.setItem('proItems', JSON.stringify(updatedproItems));
              alert("product save")
              setProductData({
              ProductName:"",
              Price:""
            })

        }

        useEffect(() => {
            const storedproItems = localStorage.getItem('proItems');
            if (storedproItems) {
              setProItems(JSON.parse(storedproItems));
            }
          }, []);
return(<>

<div className="Addproduct">
<form className="Add_product_form"  onSubmit={Adddata} >
    <div className="mb-4">
      <label className="" />
      Product Name
      <input className="proprice" required id="ProductName" type="text" placeholder="ProductName" name="ProductName" value={productData.ProductName} onChange={setvalue}/>
    </div>
    <div className="mb-6">
      <label className="">
      Price
      </label>
      <input required className="proprice" id="Price" type="text" placeholder="Price" name="Price" value={productData.Price} onChange={setvalue}/>
    </div>
    <button className="add_product_Button" type="submit" >
        Add Product
      </button>
    </form>
    </div>

</>)

}

export default Addproduct;