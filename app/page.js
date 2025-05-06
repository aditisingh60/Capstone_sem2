'use client';
import { useState } from "react";
import {cryptoAssets} from "../data/cryptoData";
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
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <div>
                <p className="stat-label">{stat.label}</p>
                <h3 className="stat-value">{stat.value}</h3>
                <div className={`stat-change ${stat.changeType}`}>
                  <i className={`fas fa-arrow-${stat.changeType === 'positive' ? 'up' : 'down'} stat-change-value`}></i>
                  <span>{stat.change}</span>
                  <span className="stat-change-period">{stat.period}</span>
                </div>
              </div>
              <div className={`stat-icon-container ${stat.iconColor}`}>
                <i className={`fas ${stat.icon} stat-icon ${stat.iconColor}`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Portfolio Performance</h3>
          <div className="chart-period">
            {chartPeriods.map(period => (
              <button 
                key={period} 
                className={`chart-period-button ${activeChartPeriod === period ? 'active' : ''}`}
                onClick={() => setActiveChartPeriod(period)}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="card-content">
          <div className="chart-container">
            <canvas id="portfolioChart"></canvas>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Your Assets</h3>
        </div>
        <div className="table-container">
          <table className="crypto-table">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Holdings</th>
                <th>Value</th>
                <th>Allocation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cryptoAssets.map((asset) => (
                <tr key={asset.id}>
                  <td>
                    <div className="crypto-name-cell">
                      <div className={`crypto-icon ${asset.symbol.toLowerCase()}`}>
                        <i className={asset.icon}></i>
                      </div>
                      <div>
                        <div className="crypto-name">{asset.name}</div>
                        <div className="crypto-symbol">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td>{asset.price}</td>
                  <td>
                    <span className={asset.priceChange.includes('+') ? 'positive-change' : 'negative-change'}>
                      {asset.priceChange}
                    </span>
                  </td>
                  <td>
                    <div className="holdings-main">{asset.holdings} {asset.symbol}</div>
                    <div className="holdings-usd">≈ {asset.holdingsValue}</div>
                  </td>
                  <td>{asset.holdingsValue}</td>
                  <td>
                    <div className="allocation-bar">
                      <div 
                        className={`allocation-progress ${asset.symbol.toLowerCase()}`} 
                        style={{width: `${asset.allocation}%`}}
                      ></div>
                    </div>
                    <div className="allocation-value">{asset.allocation}%</div>
                  </td>
                  <td>
                    <button className="action-icon">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
