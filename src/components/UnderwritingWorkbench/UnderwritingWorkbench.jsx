import { useState } from 'react';
import {
  DxcHeading,
  DxcFlex,
  DxcTypography,
  DxcButton,
  DxcTabs,
  DxcBadge,
  DxcInset,
  DxcTextInput,
  DxcSelect,
  DxcDialog,
} from '@dxc-technology/halstack-react';
import './UnderwritingWorkbench.css';

const UnderwritingWorkbench = ({ submission }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [uploadedDocs, setUploadedDocs] = useState([
    { id: 1, name: 'Bldg1.jpg', description: 'Pic of Building', docType: 'Auto Info', uploadedBy: 'John Smith', uploadDate: '01/01/26' },
    { id: 2, name: 'Home_Inspection.pdf', description: 'Inspection Report', docType: 'Insured Details', uploadedBy: 'Jane Gold', uploadDate: '01/01/26' },
    { id: 3, name: 'My_Healthcard.png', description: 'Health ID', docType: 'Policy Info', uploadedBy: 'John Smith', uploadDate: '01/01/26' },
  ]);
  const [notes, setNotes] = useState([
    { date: '01/02/2026', type: 'Reminder', note: 'Send a note to UW processing team to make sure they have gotten all forms' },
    { date: '12/22/2025', type: 'Reminder', note: 'Follow up with Policy draft makers' },
    { date: '12/10/2025', type: 'Task', note: 'Clone policy 123445 for future reference' },
  ]);
  const [messages, setMessages] = useState([
    { date: '01/02/26', subject: 'Verifying Liability', from: 'person@assuremail.com', message: 'Hello I need to verify a few files for this policy: 1234522' },
    { date: '11/22/25', subject: 'New System Policy', from: 'person@assuremail.com', message: 'We\'re creating a new policy in the system' },
    { date: '10/19/25', subject: 'Comprehensive Deductibles', from: 'person@assuremail.com', message: 'A question about Comprehensive Deductibles' },
    { date: '10/01/25', subject: 'Inquiry About Policy Changes', from: 'person@assuremail.com', message: 'We\'re creating a new policy in the system' },
    { date: '09/08/25', subject: 'Verifying Financial Coverage', from: 'person@assuremail.com', message: 'A question about Comprehensive Deductibles' },
    { date: '08/03/25', subject: 'Adding a New Vehicle', from: 'person@assuremail.com', message: 'Hello I need to verify a few files for this policy: 1234522' },
  ]);
  const [activeMessageTab, setActiveMessageTab] = useState(0);
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [validationErrors] = useState([
    'Vehicles: VIN ID is invalid',
    'Coverage type is missing for Rental Reimbursement for vehicle 1',
    'Invalid contact number',
  ]);

  if (!submission) {
    return (
      <div style={{ padding: '24px', width: '100%' }}>
        <DxcTypography>No submission selected</DxcTypography>
      </div>
    );
  }

  // Mock data for the various tabs
  const mockApplicantData = {
    applicant: 'John Doe',
    address: '70 Worcester St. Boston, MA 02118',
    yearsInBusiness: '7 Years',
    ageOfPolicy: '5 Years',
    annualReceipts: '$ 5,000,000.00',
    sicCode: '1711',
  };

  const mockAgentData = {
    name: 'Mike Johnson',
    company: 'Johnson Insurance Sales',
    phone: '(859)-5551234',
    email: 'mike@johnsoninsurance.com',
    license: 'KY-INS-1928463',
  };

  const mockVehicles = [
    {
      autoNo: '1001',
      year: '1998',
      make: 'Ford',
      model: 'Contour',
      bodyType: '4 Door Hardtop',
      vin: '1001-123xxxx',
      costNew: '$12,999.00',
      state: 'WA',
      territory: 'A01',
      class: '9876',
      use: 'Comml',
      coverage: 'Liab',
    },
    // Add more vehicles as needed
  ];

  const renderTabContent = () => {
    switch (activeTabIndex) {
      case 0: // Overview
        return (
          <DxcInset>
            <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
              {/* Risk Assessment Cards */}
              <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
                <div className="risk-indicator-card risk-warning">
                  <DxcFlex alignItems="center" gap="var(--spacing-gap-m)">
                    <span className="material-icons" style={{ fontSize: '32px', color: '#FF6B00' }}>warning</span>
                    <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
                      <DxcTypography fontSize="font-scale-03" fontWeight="font-weight-semibold" color="#FF6B00">
                        High Risk Industry
                      </DxcTypography>
                      <DxcTypography fontSize="font-scale-02">
                        Construction industry has a higher risk of accidents, injuries, and liable claims
                      </DxcTypography>
                    </DxcFlex>
                  </DxcFlex>
                </div>

                <div className="risk-indicator-card risk-error">
                  <DxcFlex alignItems="center" gap="var(--spacing-gap-m)">
                    <span className="material-icons" style={{ fontSize: '32px', color: '#D0021B' }}>trending_down</span>
                    <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
                      <DxcTypography fontSize="font-scale-03" fontWeight="font-weight-semibold" color="#D0021B">
                        Poor Claims History
                      </DxcTypography>
                      <DxcTypography fontSize="font-scale-02">
                        This company has a history of frequent high dollar claims
                      </DxcTypography>
                    </DxcFlex>
                  </DxcFlex>
                </div>

                <div className="risk-indicator-card risk-info">
                  <DxcFlex alignItems="center" gap="var(--spacing-gap-m)">
                    <span className="material-icons" style={{ fontSize: '32px', color: '#0095FF' }}>local_shipping</span>
                    <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
                      <DxcTypography fontSize="font-scale-03" fontWeight="font-weight-semibold" color="#0095FF">
                        Safety Concerns
                      </DxcTypography>
                      <DxcTypography fontSize="font-scale-02">
                        This company has a history of workplace violations
                      </DxcTypography>
                    </DxcFlex>
                  </DxcFlex>
                </div>
              </DxcFlex>

              {/* Applicant Details and Agent Info */}
              <DxcFlex gap="var(--spacing-gap-l)">
                <div className="info-section" style={{ flex: 1 }}>
                  <DxcFlex justifyContent="space-between" alignItems="center">
                    <DxcHeading level={4} text="Applicant Details" />
                    <button className="icon-btn">
                      <span className="material-icons">edit</span>
                    </button>
                  </DxcFlex>
                  <DxcFlex direction="column" gap="var(--spacing-gap-m)" style={{ marginTop: 'var(--spacing-gap-m)' }}>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">person</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          Applicant / Insured
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockApplicantData.applicant}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">location_on</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          Address
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockApplicantData.address}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">business</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          Years in Business
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockApplicantData.yearsInBusiness}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">calendar_today</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          Age of Policy
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockApplicantData.ageOfPolicy}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">attach_money</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          Annual Receipts
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockApplicantData.annualReceipts}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">tag</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          SIC code
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockApplicantData.sicCode}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                  </DxcFlex>
                </div>

                <div className="info-section" style={{ flex: 1 }}>
                  <DxcFlex justifyContent="space-between" alignItems="center">
                    <DxcHeading level={4} text="Agent / Broker Information" />
                    <button className="icon-btn">
                      <span className="material-icons">edit</span>
                    </button>
                  </DxcFlex>
                  <DxcFlex direction="column" gap="var(--spacing-gap-m)" style={{ marginTop: 'var(--spacing-gap-m)' }}>
                    <DxcTypography fontSize="font-scale-03" fontWeight="font-weight-semibold">
                      {mockAgentData.name}
                    </DxcTypography>
                    <DxcTypography fontSize="font-scale-02" color="var(--color-fg-neutral-stronger)">
                      {mockAgentData.company}
                    </DxcTypography>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">phone</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          Phone
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockAgentData.phone}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">email</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          Email
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockAgentData.email}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                    <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                      <span className="material-icons info-icon">badge</span>
                      <DxcFlex direction="column" gap="var(--spacing-gap-xxs)">
                        <DxcTypography fontSize="font-scale-01" color="var(--color-fg-neutral-stronger)">
                          License
                        </DxcTypography>
                        <DxcTypography fontSize="font-scale-02" fontWeight="font-weight-semibold">
                          {mockAgentData.license}
                        </DxcTypography>
                      </DxcFlex>
                    </DxcFlex>
                  </DxcFlex>
                </div>
              </DxcFlex>
            </DxcFlex>
          </DxcInset>
        );

      case 1: // Policy Data
        return (
          <DxcInset>
            <DxcTypography>Policy Data content would go here</DxcTypography>
          </DxcInset>
        );

      case 2: // Data Reports
        return (
          <DxcInset>
            <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
              {/* Customer/Business Data Reports */}
              <div>
                <DxcFlex alignItems="center" gap="var(--spacing-gap-s)" style={{ marginBottom: 'var(--spacing-gap-m)' }}>
                  <span className="material-icons" style={{ color: '#0095FF' }}>assessment</span>
                  <DxcHeading level={4} text="Customer / Business Data Reports" />
                </DxcFlex>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report</th>
                      <th>Source</th>
                      <th>Status</th>
                      <th>Date Ordered</th>
                      <th>Results (If Available)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#" className="table-link">Credit Score</a></td>
                      <td>Dun & Bradstreet</td>
                      <td><span className="status-badge status-available">✓ Available</span></td>
                      <td>08/03/2011</td>
                      <td>Excellent</td>
                    </tr>
                    <tr>
                      <td><a href="#" className="table-link">Prior Claims</a></td>
                      <td>ISO ClaimSearch</td>
                      <td><span className="status-badge status-available">✓ Available</span></td>
                      <td>10/31/2015</td>
                      <td>0 in 5 years</td>
                    </tr>
                    <tr>
                      <td>Business License</td>
                      <td>State Database</td>
                      <td><button className="order-btn">🛒 Order</button></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Vehicle Details Data Reports */}
              <div>
                <DxcFlex alignItems="center" gap="var(--spacing-gap-s)" style={{ marginBottom: 'var(--spacing-gap-m)' }}>
                  <span className="material-icons" style={{ color: '#0095FF' }}>directions_car</span>
                  <DxcHeading level={4} text="Vehicle Details Data Reports" />
                </DxcFlex>
                <DxcSelect
                  label="Select Vehicle"
                  options={[{ label: '1998 Ford Focus - 123xxx', value: '1' }]}
                  value="1"
                  style={{ marginBottom: 'var(--spacing-gap-m)' }}
                />
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report</th>
                      <th>Source</th>
                      <th>Status</th>
                      <th>Date Ordered</th>
                      <th>Results (If Available)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vehicle History</td>
                      <td>Carfax</td>
                      <td><button className="order-btn">🛒 Order</button></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td><a href="#" className="table-link">Clue Report</a></td>
                      <td>LexisNexis</td>
                      <td><span className="status-badge status-available">✓ Available</span></td>
                      <td>10/31/2015</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Driver Details */}
              <div>
                <DxcFlex alignItems="center" gap="var(--spacing-gap-s)" style={{ marginBottom: 'var(--spacing-gap-m)' }}>
                  <span className="material-icons" style={{ color: '#0095FF' }}>person</span>
                  <DxcHeading level={4} text="Driver Details" />
                </DxcFlex>
                <DxcSelect
                  label="Select Driver"
                  options={[{ label: 'Scott Carpenter', value: '1' }]}
                  value="1"
                  style={{ marginBottom: 'var(--spacing-gap-m)' }}
                />
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Report</th>
                      <th>Source</th>
                      <th>Status</th>
                      <th>Date Ordered</th>
                      <th>Results (If Available)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Commercial MVR</td>
                      <td>LexisNexis</td>
                      <td><button className="order-btn">🛒 Order</button></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DxcFlex>
          </DxcInset>
        );

      case 3: // Document Upload
        return (
          <DxcInset>
            <DxcFlex direction="column" gap="var(--spacing-gap-l)">
              <DxcFlex justifyContent="space-between" alignItems="center">
                <DxcHeading level={4} text="Upload Supporting Documents" />
                <DxcButton
                  label="Request Documentation"
                  icon="email"
                  mode="secondary"
                  onClick={() => {}}
                />
              </DxcFlex>

              <DxcTypography fontSize="font-scale-02">
                Supported formats include pdf, doc, docx, xsl, xslx, jpg, and png
              </DxcTypography>

              <div className="upload-section">
                <DxcHeading level={5} text="Upload document" />
                <DxcFlex gap="var(--spacing-gap-m)" alignItems="flex-end">
                  <button className="select-file-btn">Select file</button>
                  <DxcTypography fontSize="font-scale-02" color="var(--color-fg-neutral-stronger)">
                    or drop file
                  </DxcTypography>
                  <DxcTextInput
                    label="Description"
                    placeholder="Describe the document"
                    style={{ flex: 1 }}
                  />
                  <DxcSelect
                    label="Document Type"
                    placeholder="Choose file type"
                    options={[
                      { label: 'Auto Info', value: 'auto' },
                      { label: 'Insured Details', value: 'insured' },
                      { label: 'Policy Info', value: 'policy' },
                    ]}
                  />
                </DxcFlex>
                <DxcButton
                  label="+ Add another document"
                  mode="text"
                  onClick={() => {}}
                  style={{ marginTop: 'var(--spacing-gap-s)' }}
                />
                <DxcButton
                  label="⬆ Upload Documents"
                  mode="primary"
                  onClick={() => {}}
                  style={{ marginTop: 'var(--spacing-gap-m)' }}
                />
              </div>

              <div>
                <DxcHeading level={5} text="Uploaded Documents" />
                <table className="document-upload-table">
                  <thead>
                    <tr>
                      <th>Document Name</th>
                      <th>Description</th>
                      <th>Doc Type</th>
                      <th>Uploaded By</th>
                      <th>Upload Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uploadedDocs.map((doc) => (
                      <tr key={doc.id}>
                        <td>{doc.name}</td>
                        <td>{doc.description}</td>
                        <td>{doc.docType}</td>
                        <td>{doc.uploadedBy}</td>
                        <td>{doc.uploadDate}</td>
                        <td>
                          <DxcFlex gap="var(--spacing-gap-xs)">
                            <button className="icon-btn-small">
                              <span className="material-icons">download</span>
                            </button>
                            <button className="icon-btn-small">
                              <span className="material-icons">visibility</span>
                            </button>
                          </DxcFlex>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DxcFlex>
          </DxcInset>
        );

      case 4: // Quotation
        return (
          <DxcInset>
            <DxcTypography>Quotation content would go here</DxcTypography>
          </DxcInset>
        );

      case 5: // Notes/Messages
        return (
          <DxcInset>
            <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
              {/* Notes Section */}
              <div>
                <DxcFlex justifyContent="space-between" alignItems="center" style={{ marginBottom: 'var(--spacing-gap-m)' }}>
                  <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                    <span className="material-icons" style={{ color: '#0095FF' }}>note</span>
                    <DxcHeading level={4} text="Notes" />
                  </DxcFlex>
                  <DxcButton
                    label="+ Add Note"
                    mode="primary"
                    onClick={() => {}}
                  />
                </DxcFlex>
                <table className="notes-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notes.map((note, index) => (
                      <tr key={index}>
                        <td>{note.date}</td>
                        <td>
                          <DxcBadge
                            label={note.type}
                            mode="contextual"
                            color={note.type === 'Reminder' ? 'info' : 'warning'}
                          />
                        </td>
                        <td>{note.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Message Center */}
              <div>
                <DxcFlex justifyContent="space-between" alignItems="center" style={{ marginBottom: 'var(--spacing-gap-m)' }}>
                  <DxcFlex alignItems="center" gap="var(--spacing-gap-s)">
                    <span className="material-icons" style={{ color: '#0095FF' }}>email</span>
                    <DxcHeading level={4} text="Message Center" />
                  </DxcFlex>
                  <DxcButton
                    label="+ New Message"
                    mode="primary"
                    onClick={() => {}}
                  />
                </DxcFlex>

                <div className="message-tabs">
                  <button
                    className={`message-tab ${activeMessageTab === 0 ? 'active' : ''}`}
                    onClick={() => setActiveMessageTab(0)}
                  >
                    Inbox
                  </button>
                  <button
                    className={`message-tab ${activeMessageTab === 1 ? 'active' : ''}`}
                    onClick={() => setActiveMessageTab(1)}
                  >
                    Sent
                  </button>
                  <button
                    className={`message-tab ${activeMessageTab === 2 ? 'active' : ''}`}
                    onClick={() => setActiveMessageTab(2)}
                  >
                    Drafts
                  </button>
                  <button
                    className={`message-tab ${activeMessageTab === 3 ? 'active' : ''}`}
                    onClick={() => setActiveMessageTab(3)}
                  >
                    Archived
                  </button>
                </div>

                <table className="messages-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Subject</th>
                      <th>From</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((msg, index) => (
                      <tr key={index}>
                        <td>{msg.date}</td>
                        <td><a href="#" className="table-link">{msg.subject}</a></td>
                        <td>{msg.from}</td>
                        <td>{msg.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DxcFlex>
          </DxcInset>
        );

      case 6: // Actions
        return (
          <DxcInset>
            <DxcTypography>Actions content would go here</DxcTypography>
          </DxcInset>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '24px', width: '100%', backgroundColor: '#f5f5f5' }}>
      <DxcFlex direction="column" gap="var(--spacing-gap-m)">
        {/* Breadcrumb */}
        <DxcFlex gap="var(--spacing-gap-xs)" alignItems="center">
          <DxcTypography fontSize="font-scale-02" color="var(--color-fg-neutral-stronger)">
            Submissions
          </DxcTypography>
          <DxcTypography fontSize="font-scale-02" color="var(--color-fg-neutral-stronger)">/</DxcTypography>
          <DxcTypography fontSize="font-scale-02" color="#0095FF">
            {submission.applicantName}
          </DxcTypography>
        </DxcFlex>

        {/* Header */}
        <DxcFlex justifyContent="space-between" alignItems="center">
          <DxcFlex direction="column" gap="var(--spacing-gap-xs)">
            <DxcHeading level={2} text={submission.applicantName} />
            <DxcFlex gap="var(--spacing-gap-m)" alignItems="center">
              <DxcTypography fontSize="font-scale-02" color="var(--color-fg-neutral-stronger)">
                Submission #: {submission.id}
              </DxcTypography>
              <DxcBadge
                label="New Business"
                mode="contextual"
                color="success"
              />
            </DxcFlex>
          </DxcFlex>
          <DxcFlex gap="var(--spacing-gap-m)" alignItems="center">
            <button className="icon-btn" title="Print">
              <span className="material-icons">print</span>
            </button>
            <DxcButton
              label="Reassign"
              icon="swap_horiz"
              mode="secondary"
              onClick={() => {}}
            />
            <DxcButton
              label="Decline"
              icon="cancel"
              mode="secondary"
              onClick={() => {}}
            />
            <DxcButton
              label="Accept"
              icon="check"
              onClick={() => setShowValidationModal(true)}
            />
          </DxcFlex>
        </DxcFlex>

        {/* Tabs Section */}
        <div style={{
          backgroundColor: "var(--color-bg-neutral-lightest)",
          borderRadius: "var(--border-radius-m)",
          boxShadow: "var(--shadow-mid-02)",
        }}>
          <DxcTabs iconPosition="left">
            <DxcTabs.Tab
              label="Overview"
              active={activeTabIndex === 0}
              onClick={() => setActiveTabIndex(0)}
            >
              <div />
            </DxcTabs.Tab>
            <DxcTabs.Tab
              label="Policy Data"
              active={activeTabIndex === 1}
              onClick={() => setActiveTabIndex(1)}
            >
              <div />
            </DxcTabs.Tab>
            <DxcTabs.Tab
              label="Data Reports"
              active={activeTabIndex === 2}
              onClick={() => setActiveTabIndex(2)}
            >
              <div />
            </DxcTabs.Tab>
            <DxcTabs.Tab
              label="Document Upload"
              active={activeTabIndex === 3}
              onClick={() => setActiveTabIndex(3)}
            >
              <div />
            </DxcTabs.Tab>
            <DxcTabs.Tab
              label="Quotation"
              active={activeTabIndex === 4}
              onClick={() => setActiveTabIndex(4)}
            >
              <div />
            </DxcTabs.Tab>
            <DxcTabs.Tab
              label="Notes/ Messages"
              active={activeTabIndex === 5}
              onClick={() => setActiveTabIndex(5)}
            >
              <div />
            </DxcTabs.Tab>
            <DxcTabs.Tab
              label="Actions"
              active={activeTabIndex === 6}
              onClick={() => setActiveTabIndex(6)}
            >
              <div />
            </DxcTabs.Tab>
          </DxcTabs>

          {/* Render Tab Content */}
          <div style={{ padding: 'var(--spacing-padding-l)' }}>
            {renderTabContent()}
          </div>
        </div>
      </DxcFlex>

      {/* Validation Error Modal */}
      {showValidationModal && (
        <DxcDialog onCloseClick={() => setShowValidationModal(false)}>
          <div style={{ padding: 'var(--spacing-padding-l)', minWidth: '500px' }}>
            <DxcFlex direction="column" gap="var(--spacing-gap-m)">
              <DxcHeading level={3} text="Submission Failed" />
              <DxcTypography fontSize="font-scale-02">
                Submission failed due to the following reasons:
              </DxcTypography>
              <DxcFlex direction="column" gap="var(--spacing-gap-s)">
                {validationErrors.map((error, index) => (
                  <DxcFlex key={index} alignItems="center" gap="var(--spacing-gap-s)">
                    <span className="material-icons" style={{ color: '#D0021B', fontSize: '20px' }}>error</span>
                    <DxcTypography fontSize="font-scale-02">{error}</DxcTypography>
                  </DxcFlex>
                ))}
              </DxcFlex>
              <DxcFlex justifyContent="flex-end">
                <DxcButton
                  label="Back to Review"
                  mode="primary"
                  onClick={() => setShowValidationModal(false)}
                />
              </DxcFlex>
            </DxcFlex>
          </div>
        </DxcDialog>
      )}
    </div>
  );
};

export default UnderwritingWorkbench;
