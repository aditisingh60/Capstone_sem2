'use client';
import { useState } from "react";
import {cryptoData} from "../data/cryptoData";
import styles from "./dashboard.css";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChartPeriod, setActiveChartPeriod] = useState("1W");
  const stats = [
    {
      label: 'Portfolio Value',
      value: '$24,635.89',
      change: '+2.45%',
      changeType: 'positive',
      period: 'vs yesterday',
      icon: 'fa-wallet',
      iconColor: 'primary'
    },
    {
      label: '24h Trading Volume',
      value: '$5,934.61',
      change: '-1.2%',
      changeType: 'negative',
      period: 'vs yesterday',
      icon: 'fa-chart-line',
      iconColor: 'secondary'
    },
    {
      label: 'Assets',
      value: '12',
      change: '+1',
      changeType: 'positive',
      period: 'since last week',
      icon: 'fa-coins',
      iconColor: 'purple'
    },
    {
      label: 'Total Profit/Loss',
      value: '+$1,258.32',
      change: '+4.8%',
      changeType: 'positive',
      period: 'all time',
      icon: 'fa-percentage',
      iconColor: 'warning'
    }
  ];
  const chartPeriods = ['1D', '1W', '1M', '3M', '1Y']

  return (
    <section className="dashboard">
      <div className="page-header">
      <div>
        <h2 className="page-title">Dashboard</h2>
        <p className="page-subtitle">Overview of your cryptocurrency portfolio</p>
      </div>
      <div className="page-actions">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for assets..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search search-icon">Refresh</i>
        </div>
        </div>
      </div>
    </section>
  );
}
