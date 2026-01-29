import { useState } from 'react';
import { DxcApplicationLayout, DxcFlex, DxcTypography } from '@dxc-technology/halstack-react';
import Dashboard from './components/Dashboard/Dashboard';
import UnderwritingWorkbench from './components/UnderwritingWorkbench/UnderwritingWorkbench';
import SubmissionIntake from './components/SubmissionIntake/SubmissionIntake';
import Login from './components/Login/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [sidenavExpanded, setSidenavExpanded] = useState(true);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentView('dashboard');
    setSelectedSubmission(null);
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const handleSubmissionSelect = (submission) => {
    setSelectedSubmission(submission);
    setCurrentView('workbench');
  };

  const handleNavigationClick = (view) => {
    setCurrentView(view);
    if (view !== 'workbench') {
      setSelectedSubmission(null);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onSubmissionSelect={handleSubmissionSelect} />;
      case 'workbench':
        return <UnderwritingWorkbench submission={selectedSubmission} />;
      case 'intake':
        return <SubmissionIntake />;
      default:
        return <Dashboard onSubmissionSelect={handleSubmissionSelect} />;
    }
  };

  const sidenavItems = [
    {
      label: "Dashboard",
      icon: "dashboard",
      selected: currentView === 'dashboard',
      onClick: () => handleNavigationClick('dashboard')
    },
    {
      label: "My Queue",
      icon: "assignment",
      selected: currentView === 'queue',
      onClick: () => handleNavigationClick('dashboard')
    },
    {
      label: "New Submission",
      icon: "add_circle",
      selected: currentView === 'intake',
      onClick: () => handleNavigationClick('intake')
    },
  ];

  return (
    <DxcApplicationLayout
      header={
        <DxcApplicationLayout.Header
          appTitle="Underwriter Assistant"
          sideContent={(isResponsive) =>
            isResponsive ? null : (
              <DxcFlex gap="var(--spacing-gap-m)" alignItems="center">
                {/* Assure Answers Chat Icon */}
                <button
                  onClick={() => alert('Assure Answers chat would open here')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                  }}
                  title="Assure Answers - AI Assistant"
                >
                  <span className="material-icons" style={{ fontSize: '24px', color: '#0095FF' }}>
                    chat
                  </span>
                </button>

                <DxcFlex direction="column" gap="var(--spacing-gap-none)" alignItems="flex-end">
                  <DxcTypography fontWeight="font-weight-semibold">{user.name}</DxcTypography>
                  <DxcTypography
                    fontSize="font-scale-01"
                    color="var(--color-fg-neutral-stronger)"
                  >
                    {user.domain}
                  </DxcTypography>
                </DxcFlex>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0095FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
              </DxcFlex>
            )
          }
        />
      }
      sidenav={
        <DxcApplicationLayout.Sidenav
          navItems={sidenavItems}
          expanded={sidenavExpanded}
          onExpandedChange={setSidenavExpanded}
        />
      }
    >
      <DxcApplicationLayout.Main>
        {renderContent()}
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
}

export default App;
