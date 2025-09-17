import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, X } from 'lucide-react';

const LoginPage = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // In a real application, you'd send credentials to an API here
    // On successful login, you might call onClose()
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'login-modal-backdrop') {
      onClose();
    }
  };

  return (
    <div
      id="login-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 transition-all duration-300"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-[#1A1A1A] p-8 rounded-xl shadow-2xl max-w-sm w-full text-white font-sans border border-[#2A2A2A] transform transition-transform duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold flex items-center text-white">
            <Lock className="h-7 w-7 mr-3 text-white" />
            Admin Login
          </h2>
          <button
            onClick={onClose}
            className="text-[#BBBBBB] hover:text-white transition-colors p-1 rounded-full hover:bg-[#2A2A2A]"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <p className="text-[#A0A0A0] text-sm mb-8">
          Enter your credentials to access the admin panel.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-[#888888]" />
              </span>
              <input
                type="text"
                id="email"
                className="block w-full py-2.5 pl-10 pr-4 bg-[#2C2C2C] border border-[#444444] rounded-md text-white placeholder-[#777777] focus:outline-none focus:border-[#3c78cf] focus:ring-1 focus:ring-[#3c78cf] transition-all duration-200 text-sm"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-[#888888]" />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="block w-full py-2.5 pl-10 pr-10 bg-[#2C2C2C] border border-[#444444] rounded-md text-white placeholder-[#777777] focus:outline-none focus:border-[#3c78cf] focus:ring-1 focus:ring-[#3c78cf] transition-all duration-200 text-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#888888] hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 cursor-pointer text-[#1A1A1A] font-semibold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-200 text-base transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;