'use client'
import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

export default function Charts() {
  const data = [
    { name: 'Jan', deploys: 2 },
    { name: 'Feb', deploys: 5 },
    { name: 'Mar', deploys: 3 },
    { name: 'Apr', deploys: 6 },
    { name: 'May', deploys: 4 },
  ]

  return (
    <div style={{ width: '100%', height: 360, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)', borderRadius:12, padding:12 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
          <YAxis stroke="rgba(255,255,255,0.6)" />
          <Tooltip contentStyle={{background:'#071018',border:'1px solid rgba(255,255,255,0.04)',color:'var(--text)'}} />
          <Bar dataKey="deploys" fill="url(#neonGradient)" radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="neonGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#00fff0" stopOpacity="1" />
            <stop offset="100%" stopColor="#39ff14" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
