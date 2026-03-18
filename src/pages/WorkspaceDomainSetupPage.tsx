import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const Eyebrow = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(0, 150, 255, 0.12);
  border: 1px solid rgba(0, 150, 255, 0.25);
  color: #8fd0ff;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.78);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1.45fr;
  gap: 2rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.section)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
`;

const FormSectionTitle = styled.h3`
  font-size: 1.1rem;
  margin: 1rem 0 0.25rem;
  color: #8fd0ff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const Body = styled.p`
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.75;
  margin-bottom: 1.25rem;
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
`;

const Bullet = styled.li`
  color: rgba(255, 255, 255, 0.84);
  margin-bottom: 0.85rem;
  line-height: 1.55;
`;

const SmallNote = styled.p`
  margin-top: 1.25rem;
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const SuccessMessage = styled(motion.div)`
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  margin-bottom: 1.25rem;
  background: rgba(239, 68, 68, 0.14);
  color: #fecaca;
  border: 1px solid rgba(239, 68, 68, 0.4);
  padding: 1rem 1.1rem;
  border-radius: 14px;
  line-height: 1.6;
`;

const ValidationSummary = styled(motion.div)`
  margin-bottom: 1rem;
  background: rgba(245, 158, 11, 0.12);
  color: #fde68a;
  border: 1px solid rgba(245, 158, 11, 0.32);
  padding: 0.95rem 1rem;
  border-radius: 14px;
  line-height: 1.6;
`;

const SensitiveNote = styled.div`
  margin-bottom: 1rem;
  background: rgba(0, 150, 255, 0.09);
  color: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(0, 150, 255, 0.24);
  padding: 0.95rem 1rem;
  border-radius: 14px;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.98rem;
  font-weight: 600;
`;

const RequiredMark = styled.span`
  color: #fb7185;
`;

const fieldStyles = css<{ $invalid?: boolean }>`
  width: 100%;
  padding: 0.95rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ $invalid }) => ($invalid ? 'rgba(239, 68, 68, 0.85)' : 'rgba(255, 255, 255, 0.12)')};
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.25s ease;
  box-shadow: ${({ $invalid }) => ($invalid ? '0 0 0 4px rgba(239, 68, 68, 0.14)' : 'none')};

  &:focus {
    outline: none;
    border-color: ${({ $invalid }) => ($invalid ? '#fb7185' : '#0096ff')};
    box-shadow: ${({ $invalid }) => ($invalid ? '0 0 0 4px rgba(239, 68, 68, 0.14)' : '0 0 0 4px rgba(0, 150, 255, 0.14)')};
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.34);
  }
`;

const Input = styled.input<{ $invalid?: boolean }>`
  ${fieldStyles}
`;

const Select = styled.select<{ $invalid?: boolean }>`
  ${fieldStyles}

  option {
    color: #0b1220;
  }
`;

const TextArea = styled.textarea<{ $invalid?: boolean }>`
  ${fieldStyles}
  min-height: 130px;
  resize: vertical;
  font-family: inherit;
`;

const FieldError = styled.span`
  color: #fca5a5;
  font-size: 0.88rem;
  line-height: 1.4;
`;

const SubmitButton = styled(motion.button)`
  margin-top: 0.5rem;
  width: 100%;
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 999px;
  color: white;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 16px 40px rgba(0, 150, 255, 0.35);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

type FormData = {
  fullName: string;
  businessName: string;
  email: string;
  ccEmail: string;
  billingEmail: string;
  phone: string;
  domainName: string;
  domainRegistrar: string;
  registrarLoginEmail: string;
  registrarUsername: string;
  registrarPassword: string;
  workspaceType: string;
  workspaceAdminEmail: string;
  workspaceAdminUsername: string;
  workspaceAdminPassword: string;
  numberOfUsers: string;
  primaryUseCase: string;
  currentWebsite: string;
  dnsHosting: string;
  dnsLoginEmail: string;
  dnsUsername: string;
  dnsPassword: string;
  businessAddress: string;
  timeline: string;
  adminAccessReady: string;
  purchasedAlready: string;
  neededAccounts: string;
  mailboxCcRules: string;
  forwardingRules: string;
  recoveryEmail: string;
  recoveryPhone: string;
  twoFactorNotes: string;
  sharedDrivesOrGroups: string;
  migrationFrom: string;
  launchPriority: string;
  extraRequirements: string;
};

type ErrorMap = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  fullName: '',
  businessName: '',
  email: '',
  ccEmail: '',
  billingEmail: '',
  phone: '',
  domainName: '',
  domainRegistrar: '',
  registrarLoginEmail: '',
  registrarUsername: '',
  registrarPassword: '',
  workspaceType: '',
  workspaceAdminEmail: '',
  workspaceAdminUsername: '',
  workspaceAdminPassword: '',
  numberOfUsers: '',
  primaryUseCase: '',
  currentWebsite: '',
  dnsHosting: '',
  dnsLoginEmail: '',
  dnsUsername: '',
  dnsPassword: '',
  businessAddress: '',
  timeline: '',
  adminAccessReady: '',
  purchasedAlready: '',
  neededAccounts: '',
  mailboxCcRules: '',
  forwardingRules: '',
  recoveryEmail: '',
  recoveryPhone: '',
  twoFactorNotes: '',
  sharedDrivesOrGroups: '',
  migrationFrom: '',
  launchPriority: '',
  extraRequirements: '',
};

const requiredFieldLabels: Record<keyof FormData, string> = {
  fullName: 'Full name',
  businessName: 'Business / company name',
  email: 'Primary email',
  ccEmail: 'CC email(s)',
  billingEmail: 'Billing / invoices email',
  phone: 'Phone number',
  domainName: 'Domain name',
  domainRegistrar: 'Where is the domain purchased?',
  registrarLoginEmail: 'Registrar login email',
  registrarUsername: 'Registrar username',
  registrarPassword: 'Registrar password or temporary password',
  workspaceType: 'What are we setting up?',
  workspaceAdminEmail: 'Workspace admin email',
  workspaceAdminUsername: 'Workspace admin username',
  workspaceAdminPassword: 'Workspace admin password or temporary password',
  numberOfUsers: 'How many users/mailboxes?',
  primaryUseCase: 'Primary business use case',
  currentWebsite: 'Current website URL',
  dnsHosting: 'Who manages DNS / nameservers?',
  dnsLoginEmail: 'DNS login email',
  dnsUsername: 'DNS username',
  dnsPassword: 'DNS password or temporary password',
  businessAddress: 'Business address',
  timeline: 'Preferred timeline',
  adminAccessReady: 'Do you have admin access ready?',
  purchasedAlready: 'Have you already purchased everything needed?',
  neededAccounts: 'Accounts to create or configure',
  mailboxCcRules: 'CC / mailbox routing requirements',
  forwardingRules: 'Forwarding / alias / distribution rules',
  recoveryEmail: 'Recovery email',
  recoveryPhone: 'Recovery phone',
  twoFactorNotes: '2FA / OTP / authenticator notes',
  sharedDrivesOrGroups: 'Shared drives / groups / team inboxes',
  migrationFrom: 'Migrating from current provider',
  launchPriority: 'Most important thing to get right first',
  extraRequirements: 'Extra requirements / notes',
};

const requiredFields: Array<keyof FormData> = [
  'fullName',
  'businessName',
  'email',
  'domainName',
  'domainRegistrar',
  'workspaceType',
  'numberOfUsers',
  'primaryUseCase',
  'purchasedAlready',
  'adminAccessReady',
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmailList = (value: string) =>
  value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .every((entry) => emailPattern.test(entry));

const validateForm = (data: FormData): ErrorMap => {
  const errors: ErrorMap = {};

  requiredFields.forEach((field) => {
    if (!data[field].trim()) {
      errors[field] = `${requiredFieldLabels[field]} is required.`;
    }
  });

  ['email', 'registrarLoginEmail', 'workspaceAdminEmail', 'dnsLoginEmail', 'billingEmail', 'recoveryEmail'].forEach((field) => {
    const key = field as keyof FormData;
    if (data[key].trim() && !emailPattern.test(data[key].trim())) {
      errors[key] = `Enter a valid ${requiredFieldLabels[key].toLowerCase()}.`;
    }
  });

  if (data.ccEmail.trim() && !validateEmailList(data.ccEmail)) {
    errors.ccEmail = 'Use valid email addresses separated by commas.';
  }

  return errors;
};

const WorkspaceDomainSetupPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [touchedFields, setTouchedFields] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const validationErrors = useMemo(() => validateForm(formData), [formData]);
  const visibleErrors = useMemo(() => {
    const entries = Object.entries(validationErrors).filter(([field]) => touchedFields[field as keyof FormData]);
    return Object.fromEntries(entries) as ErrorMap;
  }, [touchedFields, validationErrors]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);
    setSubmitError('');

    const nextTouched = Object.fromEntries(
      Object.keys(formData).map((key) => [key, true])
    ) as Partial<Record<keyof FormData, boolean>>;
    setTouchedFields(nextTouched);

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        _subject: `New Workspace/Domain Setup Request — ${formData.businessName || formData.fullName}`,
        _replyto: formData.email,
        _template: 'table',
        service: 'Workspace + Domain Setup',
      };

      const response = await fetch('https://formsubmit.co/ajax/eddie@eddiemoger.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      const confirmed = result?.success === true || result?.success === 'true';

      if (!response.ok || !confirmed) {
        throw new Error(result?.message || 'The setup request could not be confirmed by the intake service.');
      }

      setShowSuccess(true);
      setFormData(initialFormData);
      setTouchedFields({});
      setTimeout(() => setShowSuccess(false), 6000);
    } catch (error) {
      console.error('Workspace setup form submission error:', error);
      const message = error instanceof Error ? error.message : 'The setup request could not be sent.';
      setSubmitError(`Could not send setup request. ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <Hero>
        <Eyebrow>Done-for-you setup</Eyebrow>
        <PageTitle
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Workspace + Domain Setup
        </PageTitle>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          If you want the full customer setup handled cleanly — domain, workspace,
          email details, DNS, users, access, and the annoying configuration bits —
          this form collects the minimum needed to get started, with optional details below if they already have them handy.
        </Subtitle>
      </Hero>

      <Grid>
        <Card
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
        >
          <SectionTitle>What this setup service covers</SectionTitle>
          <Body>
            This is for clients who want the infrastructure side handled properly
            instead of piecing it together over ten emails and three broken logins.
          </Body>
          <BulletList>
            <Bullet>Domain and registrar handoff details</Bullet>
            <Bullet>Workspace setup for the right number of users</Bullet>
            <Bullet>Email routing, CC requirements, and admin ownership</Bullet>
            <Bullet>DNS / nameserver / provider details in one place</Bullet>
            <Bullet>Optional login handoff fields if they already have access ready</Bullet>
            <Bullet>Everything sent directly to Eddie’s email for review</Bullet>
          </BulletList>
          <SmallNote>
            This version is designed for non-technical users first. The essentials are required, and the deeper technical details are optional if they already know them.
          </SmallNote>
        </Card>

        <Card
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
        >
          <SectionTitle>Client intake form</SectionTitle>
          <Body>
            Fill this out once. It gets sent to <strong>eddie@eddiemoger.com</strong>{' '}
            so the project can be set up without guesswork.
          </Body>

          <SensitiveNote>
            Only fill in the technical access details if you already have them handy. If not, the basics are enough to get the conversation started.
          </SensitiveNote>

          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✓ Request sent. Eddie now has your setup details in his inbox.
            </SuccessMessage>
          )}

          {submitError && (
            <ErrorMessage initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
              {submitError}
            </ErrorMessage>
          )}

          {Object.keys(visibleErrors).length > 0 && (
            <ValidationSummary initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
              Required fields are now highlighted in red. Fix the marked fields and try again.
            </ValidationSummary>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            <FormSectionTitle>Primary contact</FormSectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="fullName">Full name <RequiredMark>*</RequiredMark></Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.fullName} placeholder="Jane Smith" />
                {visibleErrors.fullName && <FieldError>{visibleErrors.fullName}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="businessName">Business / company name <RequiredMark>*</RequiredMark></Label>
                <Input id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.businessName} placeholder="Smith Dental" />
                {visibleErrors.businessName && <FieldError>{visibleErrors.businessName}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="email">Primary email <RequiredMark>*</RequiredMark></Label>
                <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.email} placeholder="owner@company.com" />
                {visibleErrors.email && <FieldError>{visibleErrors.email}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="ccEmail">CC email(s)</Label>
                <Input id="ccEmail" name="ccEmail" value={formData.ccEmail} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.ccEmail} placeholder="manager@company.com, ops@company.com" />
                {visibleErrors.ccEmail && <FieldError>{visibleErrors.ccEmail}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="billingEmail">Billing / invoices email</Label>
                <Input id="billingEmail" type="email" name="billingEmail" value={formData.billingEmail} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.billingEmail} placeholder="billing@company.com" />
                {visibleErrors.billingEmail && <FieldError>{visibleErrors.billingEmail}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.phone} placeholder="(555) 555-5555" />
                {visibleErrors.phone && <FieldError>{visibleErrors.phone}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormSectionTitle>Domain + registrar access</FormSectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="domainName">Domain name <RequiredMark>*</RequiredMark></Label>
                <Input id="domainName" name="domainName" value={formData.domainName} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.domainName} placeholder="yourbusiness.com" />
                {visibleErrors.domainName && <FieldError>{visibleErrors.domainName}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="domainRegistrar">Where is the domain purchased? <RequiredMark>*</RequiredMark></Label>
                <Input id="domainRegistrar" name="domainRegistrar" value={formData.domainRegistrar} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.domainRegistrar} placeholder="GoDaddy, Squarespace, Namecheap, Google Domains, etc." />
                {visibleErrors.domainRegistrar && <FieldError>{visibleErrors.domainRegistrar}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="registrarLoginEmail">Registrar login email</Label>
                <Input id="registrarLoginEmail" type="email" name="registrarLoginEmail" value={formData.registrarLoginEmail} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.registrarLoginEmail} placeholder="login used at registrar" />
                {visibleErrors.registrarLoginEmail && <FieldError>{visibleErrors.registrarLoginEmail}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="registrarUsername">Registrar username</Label>
                <Input id="registrarUsername" name="registrarUsername" value={formData.registrarUsername} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.registrarUsername} placeholder="Username if different from email" />
                {visibleErrors.registrarUsername && <FieldError>{visibleErrors.registrarUsername}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="registrarPassword">Registrar password / temporary password</Label>
              <Input id="registrarPassword" type="text" name="registrarPassword" value={formData.registrarPassword} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.registrarPassword} placeholder="Paste the current or temporary password here if ready" />
              {visibleErrors.registrarPassword && <FieldError>{visibleErrors.registrarPassword}</FieldError>}
            </FormGroup>

            <FormSectionTitle>Workspace / Microsoft 365 / Google Workspace</FormSectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="workspaceType">What are we setting up? <RequiredMark>*</RequiredMark></Label>
                <Select id="workspaceType" name="workspaceType" value={formData.workspaceType} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.workspaceType}>
                  <option value="">Select one</option>
                  <option value="google-workspace">Google Workspace</option>
                  <option value="microsoft-365">Microsoft 365</option>
                  <option value="custom-domain-email">Custom domain email only</option>
                  <option value="website-domain-email">Website + domain + email</option>
                  <option value="other">Other / mixed setup</option>
                </Select>
                {visibleErrors.workspaceType && <FieldError>{visibleErrors.workspaceType}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="numberOfUsers">How many users/mailboxes? <RequiredMark>*</RequiredMark></Label>
                <Input id="numberOfUsers" name="numberOfUsers" value={formData.numberOfUsers} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.numberOfUsers} placeholder="1, 3, 12, etc." />
                {visibleErrors.numberOfUsers && <FieldError>{visibleErrors.numberOfUsers}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="workspaceAdminEmail">Workspace admin email</Label>
                <Input id="workspaceAdminEmail" type="email" name="workspaceAdminEmail" value={formData.workspaceAdminEmail} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.workspaceAdminEmail} placeholder="admin@company.com" />
                {visibleErrors.workspaceAdminEmail && <FieldError>{visibleErrors.workspaceAdminEmail}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="workspaceAdminUsername">Workspace admin username</Label>
                <Input id="workspaceAdminUsername" name="workspaceAdminUsername" value={formData.workspaceAdminUsername} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.workspaceAdminUsername} placeholder="Only if different from email" />
                {visibleErrors.workspaceAdminUsername && <FieldError>{visibleErrors.workspaceAdminUsername}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="workspaceAdminPassword">Workspace admin password / temporary password</Label>
              <Input id="workspaceAdminPassword" type="text" name="workspaceAdminPassword" value={formData.workspaceAdminPassword} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.workspaceAdminPassword} placeholder="Paste the admin password or temporary password if ready" />
              {visibleErrors.workspaceAdminPassword && <FieldError>{visibleErrors.workspaceAdminPassword}</FieldError>}
            </FormGroup>

            <FormSectionTitle>Website / domain access (optional)</FormSectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="dnsHosting">Who handles your website or domain settings?</Label>
                <Input id="dnsHosting" name="dnsHosting" value={formData.dnsHosting} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.dnsHosting} placeholder="Website company, GoDaddy, Cloudflare, or just write 'not sure'" />
                {visibleErrors.dnsHosting && <FieldError>{visibleErrors.dnsHosting}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="dnsLoginEmail">Website/domain login email</Label>
                <Input id="dnsLoginEmail" type="email" name="dnsLoginEmail" value={formData.dnsLoginEmail} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.dnsLoginEmail} placeholder="dns-admin@company.com" />
                {visibleErrors.dnsLoginEmail && <FieldError>{visibleErrors.dnsLoginEmail}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="dnsUsername">Website/domain username</Label>
                <Input id="dnsUsername" name="dnsUsername" value={formData.dnsUsername} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.dnsUsername} placeholder="Cloudflare / hosting username" />
                {visibleErrors.dnsUsername && <FieldError>{visibleErrors.dnsUsername}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="dnsPassword">Website/domain password / temporary password</Label>
                <Input id="dnsPassword" type="text" name="dnsPassword" value={formData.dnsPassword} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.dnsPassword} placeholder="Paste password if access is ready" />
                {visibleErrors.dnsPassword && <FieldError>{visibleErrors.dnsPassword}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormSectionTitle>Emails to set up</FormSectionTitle>
            <FormGroup>
              <Label htmlFor="neededAccounts">Email addresses to create</Label>
              <TextArea id="neededAccounts" name="neededAccounts" value={formData.neededAccounts} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.neededAccounts} placeholder="sales@, support@, info@, owner@, billing@, frontdesk@, etc." />
              {visibleErrors.neededAccounts && <FieldError>{visibleErrors.neededAccounts}</FieldError>}
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="mailboxCcRules">Who should be copied on certain emails?</Label>
                <TextArea id="mailboxCcRules" name="mailboxCcRules" value={formData.mailboxCcRules} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.mailboxCcRules} placeholder="Who should be CC'd on what? Example: all new leads CC owner@ + ops@" />
                {visibleErrors.mailboxCcRules && <FieldError>{visibleErrors.mailboxCcRules}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="forwardingRules">Any forwarding or alias rules?</Label>
                <TextArea id="forwardingRules" name="forwardingRules" value={formData.forwardingRules} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.forwardingRules} placeholder="Example: info@ forwards to jane@ and mark@, support@ is shared inbox, hello@ aliases to owner@" />
                {visibleErrors.forwardingRules && <FieldError>{visibleErrors.forwardingRules}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="sharedDrivesOrGroups">Shared drives / groups / team inboxes</Label>
              <TextArea id="sharedDrivesOrGroups" name="sharedDrivesOrGroups" value={formData.sharedDrivesOrGroups} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.sharedDrivesOrGroups} placeholder="Any shared drives, distribution groups, role inboxes, or permissions Eddie should create while setting this up" />
              {visibleErrors.sharedDrivesOrGroups && <FieldError>{visibleErrors.sharedDrivesOrGroups}</FieldError>}
            </FormGroup>

            <FormSectionTitle>Access + recovery (optional)</FormSectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="recoveryEmail">Recovery email</Label>
                <Input id="recoveryEmail" type="email" name="recoveryEmail" value={formData.recoveryEmail} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.recoveryEmail} placeholder="Recovery / backup email if applicable" />
                {visibleErrors.recoveryEmail && <FieldError>{visibleErrors.recoveryEmail}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="recoveryPhone">Recovery phone</Label>
                <Input id="recoveryPhone" name="recoveryPhone" value={formData.recoveryPhone} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.recoveryPhone} placeholder="Phone tied to account recovery or MFA" />
                {visibleErrors.recoveryPhone && <FieldError>{visibleErrors.recoveryPhone}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="twoFactorNotes">2FA / OTP / authenticator notes</Label>
              <TextArea id="twoFactorNotes" name="twoFactorNotes" value={formData.twoFactorNotes} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.twoFactorNotes} placeholder="Describe how Eddie should get past MFA: text message, call this number, authenticator app, backup codes, ask this person, etc." />
              {visibleErrors.twoFactorNotes && <FieldError>{visibleErrors.twoFactorNotes}</FieldError>}
            </FormGroup>

            <FormSectionTitle>Business details</FormSectionTitle>
            <FormGroup>
              <Label htmlFor="primaryUseCase">Primary business use case <RequiredMark>*</RequiredMark></Label>
              <Input id="primaryUseCase" name="primaryUseCase" value={formData.primaryUseCase} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.primaryUseCase} placeholder="Team email, client communication, booking confirmations, CRM notifications, etc." />
              {visibleErrors.primaryUseCase && <FieldError>{visibleErrors.primaryUseCase}</FieldError>}
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="currentWebsite">Current website URL</Label>
                <Input id="currentWebsite" name="currentWebsite" value={formData.currentWebsite} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.currentWebsite} placeholder="https://yourbusiness.com" />
                {visibleErrors.currentWebsite && <FieldError>{visibleErrors.currentWebsite}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="businessAddress">Business address</Label>
                <Input id="businessAddress" name="businessAddress" value={formData.businessAddress} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.businessAddress} placeholder="Useful if location/business verification matters" />
                {visibleErrors.businessAddress && <FieldError>{visibleErrors.businessAddress}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="timeline">Preferred timeline</Label>
                <Input id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.timeline} placeholder="ASAP, this week, by next month" />
                {visibleErrors.timeline && <FieldError>{visibleErrors.timeline}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="launchPriority">What matters most to you?</Label>
                <Input id="launchPriority" name="launchPriority" value={formData.launchPriority} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.launchPriority} placeholder="Example: email deliverability, keeping the website live, staff logins, DNS cutover" />
                {visibleErrors.launchPriority && <FieldError>{visibleErrors.launchPriority}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Label htmlFor="purchasedAlready">Have you already purchased everything needed? <RequiredMark>*</RequiredMark></Label>
                <Select id="purchasedAlready" name="purchasedAlready" value={formData.purchasedAlready} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.purchasedAlready}>
                  <option value="">Select one</option>
                  <option value="yes">Yes</option>
                  <option value="partially">Partially</option>
                  <option value="no">No</option>
                </Select>
                {visibleErrors.purchasedAlready && <FieldError>{visibleErrors.purchasedAlready}</FieldError>}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="adminAccessReady">Do you have admin access ready? <RequiredMark>*</RequiredMark></Label>
                <Select id="adminAccessReady" name="adminAccessReady" value={formData.adminAccessReady} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.adminAccessReady}>
                  <option value="">Select one</option>
                  <option value="yes">Yes</option>
                  <option value="need-help">Need help locating access</option>
                  <option value="not-sure">Not sure</option>
                </Select>
                {visibleErrors.adminAccessReady && <FieldError>{visibleErrors.adminAccessReady}</FieldError>}
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="migrationFrom">Migrating from current provider</Label>
              <Input id="migrationFrom" name="migrationFrom" value={formData.migrationFrom} onChange={handleChange} onBlur={handleBlur} $invalid={!!visibleErrors.migrationFrom} placeholder="Example: moving from Bluehost email, old Microsoft tenant, Gmail aliases, current web host email" />
              {visibleErrors.migrationFrom && <FieldError>{visibleErrors.migrationFrom}</FieldError>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="extraRequirements">Extra requirements / notes</Label>
              <TextArea
                id="extraRequirements"
                name="extraRequirements"
                value={formData.extraRequirements}
                onChange={handleChange}
                onBlur={handleBlur}
                $invalid={!!visibleErrors.extraRequirements}
                placeholder="Anything else Eddie needs to know: stakeholders to include, who approves changes, website edits tied to email setup, launch-day concerns, weird provider quirks, etc."
              />
              {visibleErrors.extraRequirements && <FieldError>{visibleErrors.extraRequirements}</FieldError>}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? 'Sending setup request...' : 'Send setup request'}
            </SubmitButton>
          </Form>
        </Card>
      </Grid>
    </PageContainer>
  );
};

export default WorkspaceDomainSetupPage;
