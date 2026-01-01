import {useState } from 'react'
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit=async (e)=> {
    e.preventDefault();
    setError("");
    try {
      const res=await api.post("/auth/register",{name,email,password});
      localStorage.setItem("token",res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
      setEmail("");
      setPassword("");
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input placeholder="Name" value={name} onChange={(e) => setName( e.target.value)} className="w-full p-2 border rounded" />
        <input placeholder="Email" value={email} onChange={(e) => setEmail( e.target.value )} className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
        {error && <div className="text-red-600">{error}</div>}
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Create Account</button>
      </form>
    </div>
  );
}
export default Register;