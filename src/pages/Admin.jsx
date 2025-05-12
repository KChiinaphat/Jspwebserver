import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [adminToken, setAdminToken] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
  });

  const navigate = useNavigate();

  // ตรวจสอบ token ตอนโหลดหน้า
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setAdminToken(token);
      fetchProducts(token);
    } else {
      navigate('/login'); // ถ้าไม่มี token ให้ไปหน้า login
    }
  }, []);

  const fetchProducts = async (token) => {
    try {
      const res = await axios.get('http://localhost:3000/products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const addProduct = async () => {
    if (productData.name && productData.price && productData.stock) {
      try {
        const res = await axios.post('http://localhost:3000/products', productData, {
          headers: { Authorization: `Bearer ${adminToken}` },
        });
        setProducts([...products, res.data]);
        setProductData({ name: '', price: '', description: '', stock: '' });
      } catch (error) {
        console.error("Failed to add product:", error);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const updateProduct = async (id) => {
    try {
      const res = await axios.put(`http://localhost:3000/products/${id}`, productData, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setProducts(products.map((product) => (product._id === id ? res.data : product)));
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <h1>Admin Dashboard</h1>

      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={productData.name}
          onChange={(e) => setProductData({ ...productData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Price"
          value={productData.price}
          onChange={(e) => setProductData({ ...productData, price: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={productData.description}
          onChange={(e) => setProductData({ ...productData, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={productData.stock}
          onChange={(e) => setProductData({ ...productData, stock: e.target.value })}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => updateProduct(product._id)}>Edit</button>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
