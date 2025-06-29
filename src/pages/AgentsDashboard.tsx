
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Bot, MessageSquare, Users, Shield, CheckCircle, Phone, AlertTriangle, TrendingUp, Activity, Clock, Target } from 'lucide-react';

const AgentsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLive, setIsLive] = useState(true);

  // Real-time data simulation
  const [liveData, setLiveData] = useState({
    totalConversations: 2847,
    activeAgents: 12,
    resolutionRate: 94.2,
    avgResponseTime: 1.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setLiveData(prev => ({
          totalConversations: prev.totalConversations + Math.floor(Math.random() * 5),
          activeAgents: Math.max(8, prev.activeAgents + Math.floor(Math.random() * 3) - 1),
          resolutionRate: Math.min(100, Math.max(85, prev.resolutionRate + (Math.random() - 0.5) * 2)),
          avgResponseTime: Math.max(0.5, prev.avgResponseTime + (Math.random() - 0.5) * 0.3)
        }));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const agentPerformanceData = [
    { name: 'Loan Bot', conversations: 456, resolution: 96, avgTime: 1.1, status: 'active' },
    { name: 'KYC Bot', conversations: 342, resolution: 92, avgTime: 2.3, status: 'active' },
    { name: 'Fraud Detection', conversations: 189, resolution: 98, avgTime: 0.8, status: 'active' },
    { name: 'Compliance Bot', conversations: 234, resolution: 94, avgTime: 1.5, status: 'active' },
    { name: 'Appointment Bot', conversations: 567, resolution: 89, avgTime: 0.9, status: 'active' },
    { name: 'Investment Bot', conversations: 123, resolution: 91, avgTime: 2.1, status: 'maintenance' }
  ];

  const hourlyTrafficData = [
    { hour: '00:00', conversations: 12, resolution: 95 },
    { hour: '02:00', conversations: 8, resolution: 97 },
    { hour: '04:00', conversations: 6, resolution: 98 },
    { hour: '06:00', conversations: 15, resolution: 94 },
    { hour: '08:00', conversations: 45, resolution: 92 },
    { hour: '10:00', conversations: 89, resolution: 89 },
    { hour: '12:00', conversations: 134, resolution: 87 },
    { hour: '14:00', conversations: 156, resolution: 91 },
    { hour: '16:00', conversations: 145, resolution: 93 },
    { hour: '18:00', conversations: 98, resolution: 95 },
    { hour: '20:00', conversations: 67, resolution: 94 },
    { hour: '22:00', conversations: 34, resolution: 96 }
  ];

  const conversationTypeData = [
    { name: 'Account Inquiry', value: 35, color: '#3b82f6' },
    { name: 'Loan Support', value: 25, color: '#6366f1' },
    { name: 'KYC Process', value: 20, color: '#8b5cf6' },
    { name: 'Investment Help', value: 12, color: '#06b6d4' },
    { name: 'Technical Issues', value: 8, color: '#10b981' }
  ];

  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#06b6d4', '#10b981'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">AI Agents Dashboard</h1>
              <p className="text-slate-600 mt-1">Real-time monitoring and analytics for all AI agents</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm text-slate-600">{isLive ? 'Live Data' : 'Paused'}</span>
                <button 
                  onClick={() => setIsLive(!isLive)}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                >
                  {isLive ? 'Pause' : 'Resume'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-blue-200">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'agents', 'analytics', 'performance'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-600">Total Conversations</h3>
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{liveData.totalConversations.toLocaleString()}</div>
                <div className="text-sm text-green-600 flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12% from yesterday
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-600">Active Agents</h3>
                  <Bot className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{liveData.activeAgents}</div>
                <div className="text-sm text-blue-600 flex items-center mt-2">
                  <Activity className="h-4 w-4 mr-1" />
                  All systems operational
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-600">Resolution Rate</h3>
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{liveData.resolutionRate.toFixed(1)}%</div>
                <div className="text-sm text-green-600 flex items-center mt-2">
                  <Target className="h-4 w-4 mr-1" />
                  Above target (90%)
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-600">Avg Response Time</h3>
                  <Clock className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{liveData.avgResponseTime.toFixed(1)}s</div>
                <div className="text-sm text-green-600 flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Excellent performance
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">24-Hour Traffic Pattern</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={hourlyTrafficData}>
                      <defs>
                        <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="hour" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="conversations" 
                        stroke="#3b82f6" 
                        fillOpacity={1} 
                        fill="url(#colorConversations)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Conversation Types</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={conversationTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {conversationTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Agents Tab */}
        {activeTab === 'agents' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentPerformanceData.map((agent, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-900">{agent.name}</h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      agent.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {agent.status}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Conversations Today</span>
                      <span className="font-medium text-slate-900">{agent.conversations}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Resolution Rate</span>
                      <span className="font-medium text-slate-900">{agent.resolution}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Avg Response Time</span>
                      <span className="font-medium text-slate-900">{agent.avgTime}s</span>
                    </div>
                    
                    <div className="w-full bg-blue-100 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${agent.resolution}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics and Performance tabs would have similar structure */}
        {(activeTab === 'analytics' || activeTab === 'performance') && (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 text-center animate-fade-in">
            <Bot className="h-16 w-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {activeTab === 'analytics' ? 'Advanced Analytics' : 'Performance Metrics'}
            </h3>
            <p className="text-slate-600">
              {activeTab === 'analytics' 
                ? 'Detailed analytics and insights will be available here.'
                : 'Comprehensive performance metrics and optimization tools will be displayed here.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentsDashboard;
