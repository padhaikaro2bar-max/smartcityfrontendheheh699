import React, { useState } from 'react';
import UserApp from './UserApp';
import AmbulanceApp from './AmbulanceApp';

const ROLE_KEY = 'tracker-app-role';

export default function App() {
  const [role, setRole] = useState(() => localStorage.getItem(ROLE_KEY));
  const [hoveredRole, setHoveredRole] = useState(null);

  const chooseRole = (r) => {
    localStorage.setItem(ROLE_KEY, r);
    setRole(r);
  };

  const switchRole = () => {
    localStorage.removeItem(ROLE_KEY);
    setRole(null);
  };

  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-yellow-100 rounded-full opacity-50"></div>
        
        <div className="relative z-10 bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-2xl shadow-lg">
                <span className="text-2xl">🚨</span>
              </div>
            </div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent mb-2 tracking-tight">
              RAPID LANE
            </h1>
            <p className="text-gray-600 text-sm font-medium">
              Smart ambulance tracking for safer roads
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto mt-3"></div>
          </div>

          {/* Role Selection */}
          <div className="space-y-4">
            <p className="text-center text-gray-500 text-xs font-medium mb-6">
              Choose your role to get started
            </p>
            
            {/* Regular Driver Button */}
            <div
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredRole === 'user' ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredRole('user')}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => chooseRole('user')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <button className="relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-300">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-xl">🚗</span>
                  <div className="text-left">
                    <div className="font-bold">Regular Driver</div>
                    <div className="text-xs opacity-90">Get ambulance alerts on your route</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Ambulance Driver Button */}
            <div
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredRole === 'ambulance' ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredRole('ambulance')}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => chooseRole('ambulance')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <button className="relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-300">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-xl animate-pulse">🚑</span>
                  <div className="text-left">
                    <div className="font-bold">Ambulance Driver</div>
                    <div className="text-xs opacity-90">Alert nearby vehicles of emergency</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-xs text-gray-400 flex items-center justify-center space-x-1">
              <span>🔄</span>
              <span>You can switch roles anytime</span>
            </p>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return role === 'ambulance' ? (
    <AmbulanceApp onSwitchRole={switchRole} />
  ) : (
    <UserApp onSwitchRole={switchRole} />
  );
}