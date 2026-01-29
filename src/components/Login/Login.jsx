import { useState } from 'react';
import {
  DxcHeading,
  DxcFlex,
  DxcTypography,
  DxcButton,
  DxcTextInput,
  DxcCheckbox,
  DxcInset,
} from '@dxc-technology/halstack-react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.userId || !formData.password) {
      setError('Please enter both User ID and Password');
      return;
    }

    // Mock authentication - in real app, this would call ServiceNow API
    // For demo, accept any credentials
    const mockUser = {
      userId: formData.userId,
      name: 'Sarah Johnson',
      email: 's.johnson@insurance.com',
      domain: 'Commercial Lines', // Domain from ServiceNow domain separation
      role: 'Underwriter',
    };

    onLogin(mockUser);
  };

  const handleForgotPassword = () => {
    // In real app, this would navigate to password reset
    alert('Password reset functionality would be implemented here');
  };

  const handleCreateAccount = () => {
    // In real app, this would navigate to account creation
    alert('Account creation would be handled by ServiceNow admin');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <DxcFlex direction="column" gap="var(--spacing-gap-l)" alignItems="center">
          {/* Logo */}
          <div className="login-logo">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 0L37.5 15L52.5 7.5L45 22.5L60 30L45 37.5L52.5 52.5L37.5 45L30 60L22.5 45L7.5 52.5L15 37.5L0 30L15 22.5L7.5 7.5L22.5 15L30 0Z" fill="#4CAF50"/>
              <path d="M30 15L35 25L45 20L40 30L50 35L40 40L45 50L35 45L30 55L25 45L15 50L20 40L10 35L20 30L15 20L25 25L30 15Z" fill="#FFC107"/>
              <path d="M30 20L32.5 27.5L40 25L37.5 32.5L45 35L37.5 37.5L40 45L32.5 42.5L30 50L27.5 42.5L20 45L22.5 37.5L15 35L22.5 32.5L20 25L27.5 27.5L30 20Z" fill="#2196F3"/>
            </svg>
          </div>

          {/* Title */}
          <DxcHeading level={2} text="Sign in" />

          {/* Error Message */}
          {error && (
            <div className="login-error">
              <DxcTypography fontSize="font-scale-02" color="#D0021B">
                {error}
              </DxcTypography>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <DxcFlex direction="column" gap="var(--spacing-gap-m)">
              <DxcTextInput
                label="User ID"
                placeholder="Enter your User ID"
                value={formData.userId}
                onChange={({ value }) => handleInputChange('userId', value)}
                size="fillParent"
              />

              <DxcTextInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={({ value }) => handleInputChange('password', value)}
                size="fillParent"
              />

              {/* Remember Me and Forgot Password */}
              <DxcFlex justifyContent="space-between" alignItems="center">
                <DxcCheckbox
                  label="Remember Me (Optional)"
                  checked={formData.rememberMe}
                  onChange={(checked) => handleInputChange('rememberMe', checked)}
                />
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="forgot-password-link"
                >
                  Forgot Password?
                </button>
              </DxcFlex>

              {/* Sign In Button */}
              <DxcButton
                label="Sign In"
                mode="primary"
                type="submit"
                size="fillParent"
              />

              {/* Create Account Button */}
              <DxcButton
                label="Create Account"
                mode="secondary"
                onClick={handleCreateAccount}
                size="fillParent"
              />
            </DxcFlex>
          </form>
        </DxcFlex>
      </div>
    </div>
  );
};

export default Login;
