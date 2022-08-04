import firebase from "firebase/compat/app"; 
import 'firebase/compat/firestore'; 
import './index.css'
import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading:true  
    }
}

componentDidMount(){
  firebase.firestore()
  .collection('products')
  .orderBy('price')
  .onSnapshot((snapshot)=>{
    // console.log(snapshot);
    // snapshot.docs.map((doc)=>{
    //   console.log(doc.data());
    // })
    const products=snapshot.docs.map((doc)=>{
      const data= doc.data();
      data['id']=doc.id;
      return data;
    });
    
    this.setState({
      products:products,
      loading:false
    })
  })
}

handleIncreaseQuantity=(product)=>{
  const{products}=this.state;
  const index=products.indexOf(product);
  // products[index].qty+=1;
  // this.setState({
  //     products:products
  // })

  const docRef=firebase.firestore().collection('products').doc(products[index].id)

  docRef.update({
    qty:products[index].qty+1
  })
  .then(()=>{
    console.log("updated successfully")
  })
  .catch((err)=>{
    console.log("updated nahi hua")
  })
}

handleDecreaseQuantity=(product)=>{
  const{products}=this.state;
  const index=products.indexOf(product);
  if(products[index].qty===0){
      this.handleDeleteProduct(product.id);
      return;
  }

  const docRef=firebase.firestore().collection('products').doc(products[index].id)
  // products[index].qty-=1;
  // this.setState({
  //     products:products,
  // })
  docRef.update({
    qty:products[index].qty-1
  })
  .then(()=>{
    console.log("updated successfully")
  })
  .catch((err)=>{
    console.log("updated nahi hua")
  })
}

handleDeleteProduct=(id)=>{
  const{products}=this.state;
  // const items=products.filter((item)=>{return item.id!==id}) // []

  // this.setState({
  //     products:items
  // })
  const docRef=firebase.firestore().collection('products').doc(id)
  docRef.delete()
  .then(()=>{
    console.log("Deleted successfully")
  })
  .catch((err)=>{
    console.log("Delete nahi hua")
  })

}

getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty
  })
  return count;
}

getCartTotal=()=>{
  const {products}=this.state;
  let total=0;
  products.forEach((product)=>{
    total+=product.price*product.qty
  })
  return total;
}

addProduct=()=>{
  firebase.firestore()
  .collection('products')
  .add({
    title:'Washing Machine',
    price:9999,
    qty:2,
    img:'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  })
  .then((docRef)=>{
    console.log('product is added',docRef)
  })
  .catch((err)=>{
    console.log("shai karo",err)
  })
}


  render(){
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button style={{fontSize:20,padding:20}} onClick={this.addProduct}>Add a Product</button> */}
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}/>
        {loading && <h1>Loading products</h1>}
        <div style={{fontSize:25, padding:10,color:'red'}}>TOTAL:{this.getCartTotal()}</div>
      </div>
      
    );
  }
  
}

export default App;
