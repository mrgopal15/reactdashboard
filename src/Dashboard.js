import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts'
import PieData from './assets/booking.json'
import BarData from './assets/sale.json'

export default () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <div className="col-sm-5">
            <ResponsiveContainer>
              <PieChart width={400} height={400} margin={{ top: -25 }}>
                <Pie dataKey="value" isAnimationActive={true} data={PieData} label>
                  { PieData.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />) }
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="col-sm-5">
            <BarChart width={500} height={300} data={BarData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sale" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  )

  
}