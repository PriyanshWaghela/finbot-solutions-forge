
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Shield, CheckCircle, Phone, AlertTriangle } from 'lucide-react';

const DashboardPreview = () => {
  // Sample data for specific bots (Loan Fraud Detection, Regulatory Compliance, KYC, Appointment Booking)
  const conversationData = [
    { name: 'Mon', fraud: 45, compliance: 32, kyc: 28, appointments: 67 },
    { name: 'Tue', fraud: 52, compliance: 41, kyc: 35, appointments: 73 },
    { name: 'Wed', fraud: 38, compliance: 29, kyc: 42, appointments: 81 },
    { name: 'Thu', fraud: 67, compliance: 48, kyc: 31, appointments: 69 },
    { name: 'Fri', fraud: 71, compliance: 56, kyc: 47, apartments: 88 },
    { name: 'Sat', fraud: 34, compliance: 22, kyc: 19, appointments: 45 },
    { name: 'Sun', fraud: 29, compliance: 18, kyc: 16, appointments: 38 }
  ];

  const botPerformanceData = [
    { name: 'Fraud Detection', value: 94, color: '#ef4444' },
    { name: 'Compliance', value: 98, color: '#8b5cf6' },
    { name: 'KYC Processing', value: 92, color: '#14b8a6' },
    { name: 'Appointments', value: 89, color: '#f59e0b' }
  ];

  const COLORS = ['#ef4444', '#8b5cf6', '#14b8a6', '#f59e0b'];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Your Command Center for Financial AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Monitor, analyze, and optimize your AI-powered financial operations with comprehensive 
            real-time dashboards and intelligent reporting.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">FinBot Analytics Dashboard</h3>
                <p className="text-slate-300">Real-time insights from your AI-powered operations</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-300">Live Data</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="p-6 border-b border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-blue-800">Total Conversations</h4>
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-900">2,847</div>
                <div className="text-sm text-blue-600">+12% from last week</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-green-800">Bot Resolution Rate</h4>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-900">94.2%</div>
                <div className="text-sm text-green-600">+3% improvement</div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-amber-800">Human Handovers</h4>
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-amber-900">162</div>
                <div className="text-sm text-amber-600">-8% reduction</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-purple-800">Cost Savings</h4>
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-900">₹84,230</div>
                <div className="text-sm text-purple-600">This month</div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Conversation Trends */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Weekly Bot Activity</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conversationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="fraud" fill="#ef4444" name="Fraud Detection" />
                      <Bar dataKey="compliance" fill="#8b5cf6" name="Compliance" />
                      <Bar dataKey="kyc" fill="#14b8a6" name="KYC" />
                      <Bar dataKey="appointments" fill="#f59e0b" name="Appointments" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bot Performance */}
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Bot Performance Scores</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={botPerformanceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {botPerformanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Centralized Report Highlights */}
            <div className="mt-8 bg-slate-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-blue-600" />
                Centralized Report Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h5 className="font-medium text-slate-700 mb-2">KYC Completion Rate</h5>
                  <div className="text-2xl font-bold text-teal-600">92.3%</div>
                  <div className="text-sm text-slate-500">+5% this month</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h5 className="font-medium text-slate-700 mb-2">Fraud Alerts Generated</h5>
                  <div className="text-2xl font-bold text-red-600">47</div>
                  <div className="text-sm text-slate-500">Real-time monitoring</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h5 className="font-medium text-slate-700 mb-2">Compliance Score</h5>
                  <div className="text-2xl font-bold text-purple-600">98.7%</div>
                  <div className="text-sm text-slate-500">Above industry avg</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h5 className="font-medium text-slate-700 mb-2">Appointment Efficiency</h5>
                  <div className="text-2xl font-bold text-amber-600">89.1%</div>
                  <div className="text-sm text-slate-500">Reduced no-shows</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Experience the Power of Intelligent Analytics
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get real-time insights, automated reports, and actionable intelligence that drives 
              your financial operations forward. See how our dashboard transforms data into decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent">
                Request Live Demo
              </button>
              <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 border border-white/20">
                Download Dashboard Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
