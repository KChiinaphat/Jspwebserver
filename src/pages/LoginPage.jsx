import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับการล็อกอิน
  const handleLogin = async (e) => {
    e.preventDefault();  // ป้องกันการรีเฟรชของหน้าเมื่อกดปุ่ม Submit
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin');  // ไปที่หน้า AdminPage หลังจากล็อกอินสำเร็จ
    } catch (err) {
      setError('Invalid credentials or not admin');
      console.error('Login failed', err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login as Admin</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* ฟอร์มสำหรับกรอกข้อมูล */}
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div>
          <button type="submit" className="login-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
