// src/components/EmployeeForm.js
import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    // Personal & Employment Details
    fullName: '',
    employeeId: '',
    department: '',
    role: '',
    dateOfJoining: '',
    contactNumber: '',
    emailAddress: '',
    // Bank Details
    bankName: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
  });

  // A single handler to update the state for any form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server.
    // For now, we'll just log it to the console.
    console.log('Form Submitted:', formData);
    alert('Employee details submitted successfully! Check the console for data.');
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <h1>EduNaviQ Employee Details</h1>
        <p>Please fill out the form to add a new employee.</p>
      </header>

      <form onSubmit={handleSubmit}>
        {/* Section 1: Personal & Employment Details */}
        <div className="form-section">
          <h2>Personal & Employment Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role / Position</label>
              <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfJoining">Date of Joining</label>
              <input type="date" id="dateOfJoining" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </div>
            <div className="form-group full-width">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
            </div>
          </div>
        </div>

        {/* Section 2: Bank Details */}
        <div className="form-section">
          <h2>Bank Account Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="accountHolderName">Account Holder Name</label>
              <input type="text" id="accountHolderName" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="bankName">Bank Name</label>
              <input type="text" id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input type="text" id="accountNumber" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="ifscCode">IFSC Code</label>
              <input type="text" id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-btn">Submit Details</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;