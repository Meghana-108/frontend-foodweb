import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ]);
  const [orders, setOrders] = useState([
    { id: 1, user: 'John Doe', amount: 50, status: 'Completed' },
    { id: 2, user: 'Jane Smith', amount: 30, status: 'Pending' },
    { id: 3, user: 'Bob Johnson', amount: 20, status: 'Processing' },
  ]);
  const [reportData, setReportData] = useState([]); // State for report data
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleRemoveUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleUpdateOrderStatus = (orderId, status) => {
    setOrders(orders.map(order => order.id === orderId ? { ...order, status } : order));
  };

  const handleGenerateReport = () => {
    // Dummy report data generation based on date range
    const filteredOrders = orders.filter(order => {
      const orderDate = new Date(order.date);
      return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
    });
    setReportData(filteredOrders);
  };

  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => handleSectionChange('dashboard')} className={activeSection === 'dashboard' ? 'active' : ''}>Dashboard</li>
          <li onClick={() => handleSectionChange('users')} className={activeSection === 'users' ? 'active' : ''}>Manage Users</li>
          <li onClick={() => handleSectionChange('orders')} className={activeSection === 'orders' ? 'active' : ''}>Manage Orders</li>
          <li onClick={() => handleSectionChange('reports')} className={activeSection === 'reports' ? 'active' : ''}>Reports</li>
        </ul>
      </div>
      <div className="admin-content">
        {activeSection === 'dashboard' && (
          <div>
            <h1>Dashboard</h1>
            <div className="dashboard-metrics">
              <div className="metric">
                <h2>Total Users</h2>
                <p>150</p>
              </div>
              <div className="metric">
                <h2>Total Orders</h2>
                <p>85</p>
              </div>
              <div className="metric">
                <h2>Total Revenue</h2>
                <p>$1200</p>
              </div>
            </div>
            <div className="dashboard-recent-orders">
              <h2>Recent Orders</h2>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>John Doe</td>
                    <td>$50</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>Jane Smith</td>
                    <td>$30</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>003</td>
                    <td>Bob Johnson</td>
                    <td>$20</td>
                    <td>Processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="dashboard-user-activity">
              <h2>User Activity</h2>
              <ul>
                <li>John Doe logged in</li>
                <li>Jane Smith placed an order</li>
                <li>Bob Johnson updated his profile</li>
              </ul>
            </div>
          </div>
        )}
        {activeSection === 'users' && (
          <div>
            <h1>Manage Users</h1>
            <UserManagement users={users} onAddUser={handleAddUser} onRemoveUser={handleRemoveUser} />
          </div>
        )}
        {activeSection === 'orders' && (
          <div>
            <h1>Manage Orders</h1>
            <OrderManagement orders={orders} onUpdateOrderStatus={handleUpdateOrderStatus} />
          </div>
        )}
        {activeSection === 'reports' && (
          <div>
            <h1>Reports</h1>
            <div className="report-filter">
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              <button onClick={handleGenerateReport}>Generate Report</button>
            </div>
            <div className="report-output">
              <h2>Report Data</h2>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.user}</td>
                      <td>${order.amount}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const UserManagement = ({ users, onAddUser, onRemoveUser }) => {
  const [newUser, setNewUser] = useState({ id: '', name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAdd = () => {
    onAddUser({ ...newUser, id: users.length + 1 });
    setNewUser({ id: '', name: '', email: '' });
  };

  return (
    <div className="user-management">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="remove-button" onClick={() => onRemoveUser(user.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New User</h2>
      <div className="add-user-form">
        <input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Name" />
        <input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Email" />
        <button className="add-button" onClick={handleAdd}>Add User</button>
      </div>
    </div>
  );
};

const OrderManagement = ({ orders, onUpdateOrderStatus }) => {
  const handleStatusChange = (orderId, e) => {
    onUpdateOrderStatus(orderId, e.target.value);
  };

  return (
    <div className="order-management">
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>${order.amount}</td>
              <td>
                <select value={order.status} onChange={(e) => handleStatusChange(order.id, e)}>
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td>
                <button className="update-button">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
