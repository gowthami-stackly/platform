import React from "react";
import "./GlobalDashboard.css";

function GlobalDashboard() {
  return (
    <div className="global-dashboard">
      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>Global Dashboard</h1>
          <p>
            Track performance, engagement, and growth across all your social
            platforms in one place.
          </p>
        </div>
      </div>

      {/* PLATFORM OVERVIEW */}
      <div className="section-title">PLATFORM OVERVIEW</div>

      <div className="overview-grid">
        <div className="overview-card">
          <div>
            <span>Total Tenants</span>
            <strong>132</strong>
            <small>↑ 8% this month</small>
          </div>
          <div className="card-icon">♧</div>
        </div>

        <div className="overview-card">
          <div>
            <span>Total Users</span>
            <strong>48,920</strong>
            <small>↑ 13% this month</small>
          </div>
          <div className="card-icon">✓</div>
        </div>

        <div className="overview-card">
          <div>
            <span>Active Subscriptions</span>
            <strong>1,233</strong>
            <small>↑ 10% this month</small>
          </div>
          <div className="card-icon">◉</div>
        </div>

        <div className="overview-card">
          <div>
            <span>Active Sessions</span>
            <strong>789</strong>
            <small>↑ 6% this month</small>
          </div>
          <div className="card-icon">↗</div>
        </div>
      </div>

      {/* QUICK NAVIGATION */}
      <div className="section-title">QUICK NAVIGATION</div>

      <div className="quick-grid">
        <div className="quick-card">
          <div className="quick-icon">♧</div>
          <div>
            <h3>Manage Tenants</h3>
            <p>Manage accounts & roles</p>
          </div>
        </div>

        <div className="quick-card">
          <div className="quick-icon">⚙</div>
          <div>
            <h3>Platform Settings</h3>
            <p>Global configuration</p>
          </div>
        </div>

        <div className="quick-card">
          <div className="quick-icon">▤</div>
          <div>
            <h3>Generate Report</h3>
            <p>Renewals & usage stats</p>
          </div>
        </div>

        <div className="quick-card">
          <div className="quick-icon">▥</div>
          <div>
            <h3>System Monitoring</h3>
            <p>Track admin actions</p>
          </div>
        </div>
      </div>

      {/* HEALTH SECTION */}
      <div className="dashboard-columns">
        {/* PLATFORM HEALTH */}
        <div className="dashboard-panel">
          <div className="panel-heading">
            <h2>Platform Health Status</h2>
            <button>Last 7 Days ▾</button>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>CPU Usage</span>
              <b className="warning-text">67%</b>
            </div>
            <div className="progress">
              <div className="progress-orange" style={{ width: "67%" }}></div>
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Memory Utilization</span>
              <b className="success-text">54%</b>
            </div>
            <div className="progress">
              <div className="progress-green" style={{ width: "54%" }}></div>
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Disk I/O</span>
              <b className="success-text">32%</b>
            </div>
            <div className="progress">
              <div className="progress-green" style={{ width: "32%" }}></div>
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Network Bandwidth</span>
              <b className="warning-text">78%</b>
            </div>
            <div className="progress">
              <div className="progress-orange" style={{ width: "78%" }}></div>
            </div>
          </div>
        </div>

        {/* SYSTEM HEALTH */}
        <div className="dashboard-panel">
          <div className="panel-heading">
            <h2>System Health</h2>
            <button>Last 7 Days ▾</button>
          </div>

          <div className="legend">
            <span>
              <i className="purple-dot"></i> Operational
            </span>
            <span>
              <i className="blue-dot"></i> Degraded
            </span>
            <span>
              <i className="green-dot"></i> Down
            </span>
          </div>

          <div className="chart">
            <div className="chart-line purple-line"></div>
            <div className="chart-line blue-line"></div>
            <div className="chart-line green-line"></div>

            <div className="chart-point p1"></div>
            <div className="chart-point p2"></div>
            <div className="chart-point p3"></div>
            <div className="chart-point p4"></div>
            <div className="chart-point p5"></div>
            <div className="chart-point p6"></div>
          </div>

          <div className="chart-days">
            <span>May 12</span>
            <span>May 13</span>
            <span>May 14</span>
            <span>May 15</span>
            <span>May 16</span>
            <span>May 17</span>
            <span>May 18</span>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="dashboard-columns">
        {/* SECURITY ALERTS */}
        <div className="dashboard-panel">
          <div className="panel-heading">
            <h2>Security alerts</h2>
            <a href="#alerts">View all alerts</a>
          </div>

          <div className="alert-box orange-alert">
            <div className="alert-icon">⚠</div>
            <div>
              <strong>High CPU Usage</strong>
              <p>Database server CPU usage is high</p>
            </div>
            <span>1 hour ago</span>
          </div>

          <div className="alert-box blue-alert">
            <div className="alert-icon">△</div>
            <div>
              <strong>Storage Threshold</strong>
              <p>Storage utilization reached 80%</p>
            </div>
            <span>2 hour ago</span>
          </div>

          <div className="alert-box yellow-alert">
            <div className="alert-icon">!</div>
            <div>
              <strong>New Tenant Registration</strong>
              <p>Techcorp solutions registered</p>
            </div>
            <span>2 hour ago</span>
          </div>
        </div>

        {/* RECENT ACTIVITIES */}
        <div className="dashboard-panel">
          <div className="panel-heading">
            <h2>Recent activities</h2>
            <a href="#activities">View All</a>
          </div>

          <div className="activity-item">
            <div className="activity-circle orange-circle">⚠</div>
            <div>
              <strong>New Tenant Created</strong>
              <p>by Admin users</p>
            </div>
            <span>10 min ago</span>
          </div>

          <div className="activity-item">
            <div className="activity-circle yellow-circle">⚠</div>
            <div>
              <strong>License Updated</strong>
              <p>by Admin users</p>
            </div>
            <span>1 hour ago</span>
          </div>

          <div className="activity-item">
            <div className="activity-circle blue-circle">ⓘ</div>
            <div>
              <strong>User Added</strong>
              <p>Superadmin granted access to monitoring module.</p>
            </div>
            <span>3 hours ago</span>
          </div>

          <div className="activity-item">
            <div className="activity-circle green-circle">✓</div>
            <div>
              <strong>Backup Completed</strong>
              <p>Daily snapshot of primary database cluster successful.</p>
            </div>
            <span>Yesterday</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="dashboard-actions">
        <button className="refresh-btn">⟳ Refresh</button>
        <button className="export-btn">⇩ Export report</button>
      </div>
    </div>
  );
}

export default GlobalDashboard;