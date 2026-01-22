// Mock data for underwriting submissions

// P&C - Commercial Auto Submissions
export const pcSubmissions = [
  {
    id: 'UW-2026-PC-001',
    applicantName: 'ABC Trucking LLC',
    status: 'New Submission',
    priority: 'High',
    productType: 'P&C',
    lineOfBusiness: 'Commercial Auto',
    coverageType: 'Fleet',
    coverageAmount: 5000000,
    submittedDate: '2026-01-22',
    receivedDate: '2026-01-22',
    effectiveDate: '2026-02-15',
    assignedTo: 'Sarah Chen',
    riskScore: 68,
    fleetSize: 45,
    vehicles: '35 Tractors, 10 Box Trucks',
    driversCount: 52,
    radiusOfOperation: 'Long Haul (500+ miles)',
    cargo: 'General Freight',
    lossHistory: '3 claims in last 3 years',
    requirementsComplete: 45
  },
  {
    id: 'UW-2026-PC-002',
    applicantName: 'Metro Delivery Services',
    status: 'Pending Review',
    priority: 'Medium',
    productType: 'P&C',
    lineOfBusiness: 'Commercial Auto',
    coverageType: 'Fleet',
    coverageAmount: 2000000,
    submittedDate: '2026-01-21',
    receivedDate: '2026-01-21',
    effectiveDate: '2026-02-10',
    assignedTo: 'Michael Park',
    riskScore: 82,
    fleetSize: 18,
    vehicles: '18 Cargo Vans',
    driversCount: 22,
    radiusOfOperation: 'Local (under 50 miles)',
    cargo: 'Packages & Documents',
    lossHistory: '1 claim in last 3 years',
    requirementsComplete: 75
  },
  {
    id: 'UW-2026-PC-003',
    applicantName: 'Midwest Transport Inc',
    status: 'In Review',
    priority: 'High',
    productType: 'P&C',
    lineOfBusiness: 'Commercial Auto',
    coverageType: 'Fleet',
    coverageAmount: 10000000,
    submittedDate: '2026-01-20',
    receivedDate: '2026-01-20',
    effectiveDate: '2026-02-05',
    assignedTo: 'Sarah Chen',
    riskScore: 55,
    fleetSize: 120,
    vehicles: '85 Tractors, 25 Flatbeds, 10 Tank Trucks',
    driversCount: 135,
    radiusOfOperation: 'Regional (200-500 miles)',
    cargo: 'Hazardous Materials',
    lossHistory: '8 claims in last 3 years',
    requirementsComplete: 60
  },
  {
    id: 'UW-2026-PC-004',
    applicantName: 'City Cab Company',
    status: 'Requirements Needed',
    priority: 'Medium',
    productType: 'P&C',
    lineOfBusiness: 'Commercial Auto',
    coverageType: 'For-Hire',
    coverageAmount: 1500000,
    submittedDate: '2026-01-19',
    receivedDate: '2026-01-19',
    effectiveDate: '2026-02-12',
    assignedTo: 'James Wilson',
    riskScore: 72,
    fleetSize: 35,
    vehicles: '35 Sedans',
    driversCount: 48,
    radiusOfOperation: 'Local (under 50 miles)',
    cargo: 'Passengers',
    lossHistory: '5 claims in last 3 years',
    requirementsComplete: 30
  },
  {
    id: 'UW-2026-PC-005',
    applicantName: 'Green Valley Landscaping',
    status: 'Approved',
    priority: 'Low',
    productType: 'P&C',
    lineOfBusiness: 'Commercial Auto',
    coverageType: 'Business Use',
    coverageAmount: 750000,
    submittedDate: '2026-01-18',
    receivedDate: '2026-01-18',
    effectiveDate: '2026-02-01',
    assignedTo: 'Sarah Chen',
    riskScore: 91,
    fleetSize: 8,
    vehicles: '5 Pickup Trucks, 3 Cargo Vans',
    driversCount: 10,
    radiusOfOperation: 'Local (under 50 miles)',
    cargo: 'Landscaping Equipment',
    lossHistory: 'No claims in last 5 years',
    requirementsComplete: 100
  }
];

// Life & Annuity Submissions
export const lifeAnnuitySubmissions = [
  {
    id: 'UW-2026-LA-001',
    applicantName: 'James Anderson',
    status: 'New Submission',
    priority: 'High',
    productType: 'Life & Annuity',
    lineOfBusiness: 'Term Life',
    coverageAmount: 500000,
    submittedDate: '2026-01-22',
    receivedDate: '2026-01-22',
    effectiveDate: '2026-02-15',
    assignedTo: 'Sarah Chen',
    riskScore: 72,
    age: 38,
    gender: 'Male',
    medicalHistory: 'Diabetes Type 2',
    tobaccoUse: 'No',
    occupation: 'Software Engineer',
    requirementsComplete: 45
  },
  {
    id: 'UW-2026-LA-002',
    applicantName: 'Maria Rodriguez',
    status: 'Pending Review',
    priority: 'Medium',
    productType: 'Life & Annuity',
    lineOfBusiness: 'Whole Life',
    coverageAmount: 250000,
    submittedDate: '2026-01-21',
    receivedDate: '2026-01-21',
    effectiveDate: '2026-02-10',
    assignedTo: 'Michael Park',
    riskScore: 85,
    age: 32,
    gender: 'Female',
    medicalHistory: 'None',
    tobaccoUse: 'No',
    occupation: 'Teacher',
    requirementsComplete: 80
  },
  {
    id: 'UW-2026-LA-003',
    applicantName: 'David Chen',
    status: 'In Review',
    priority: 'High',
    productType: 'Life & Annuity',
    lineOfBusiness: 'Universal Life',
    coverageAmount: 1000000,
    submittedDate: '2026-01-20',
    receivedDate: '2026-01-20',
    effectiveDate: '2026-02-05',
    assignedTo: 'Sarah Chen',
    riskScore: 58,
    age: 52,
    gender: 'Male',
    medicalHistory: 'Hypertension, High Cholesterol',
    tobaccoUse: 'Former (quit 5 years ago)',
    occupation: 'Business Owner',
    requirementsComplete: 65
  },
  {
    id: 'UW-2026-LA-004',
    applicantName: 'Emily Thompson',
    status: 'Requirements Needed',
    priority: 'Medium',
    productType: 'Life & Annuity',
    lineOfBusiness: 'Term Life',
    coverageAmount: 750000,
    submittedDate: '2026-01-19',
    receivedDate: '2026-01-19',
    effectiveDate: '2026-02-12',
    assignedTo: 'James Wilson',
    riskScore: 68,
    age: 45,
    gender: 'Female',
    medicalHistory: 'Asthma',
    tobaccoUse: 'No',
    occupation: 'Marketing Director',
    requirementsComplete: 30
  },
  {
    id: 'UW-2026-LA-005',
    applicantName: 'Robert Martinez',
    status: 'Approved',
    priority: 'Low',
    productType: 'Life & Annuity',
    lineOfBusiness: 'Whole Life',
    coverageAmount: 350000,
    submittedDate: '2026-01-18',
    receivedDate: '2026-01-18',
    effectiveDate: '2026-02-01',
    assignedTo: 'Sarah Chen',
    riskScore: 92,
    age: 28,
    gender: 'Male',
    medicalHistory: 'None',
    tobaccoUse: 'No',
    occupation: 'Physical Therapist',
    requirementsComplete: 100
  }
];

// Combined submissions
export const mockSubmissions = [...pcSubmissions, ...lifeAnnuitySubmissions];

// Filter by product type
export const getSubmissionsByProductType = (productType) => {
  if (productType === 'P&C') {
    return pcSubmissions;
  } else if (productType === 'Life & Annuity') {
    return lifeAnnuitySubmissions;
  }
  return mockSubmissions;
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'New Submission':
      return 'info';
    case 'Pending Review':
      return 'warning';
    case 'In Review':
      return 'warning';
    case 'Requirements Needed':
      return 'error';
    case 'Approved':
      return 'success';
    case 'Declined':
      return 'error';
    default:
      return 'neutral';
  }
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'error';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'success';
    default:
      return 'neutral';
  }
};
