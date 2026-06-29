'use client';
import { useState } from 'react';
import { Check, ChevronDown, Lock, Phone } from 'lucide-react';
import { PHONE, PHONE_HREF } from '../lib/site';

const INSURERS = [
  'Aetna',
  'Ambetter',
  'Anthem Blue Cross Blue Shield',
  'Beacon Health Options',
  'Blue Cross Blue Shield (BCBS)',
  'Cigna / Evernorth',
  'ComPsych',
  'Coventry Health Care',
  'Florida Blue',
  'Galaxy Health Network',
  'Humana',
  'Kaiser Permanente',
  'Magellan Health',
  'Molina Healthcare',
  'MultiPlan',
  'Optum / UBH',
  'Oscar Health',
  'Sunshine Health',
  'Tricare',
  'UnitedHealthcare',
  'Value Options / Beacon',
  'Other',
];

export default function InsuranceVerificationForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '',
    provider: '', otherProvider: '',
    memberId: '', dob: '',
  });
  const [errors, setErrors]     = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim())  e.lastName  = 'Required';
    if (!form.phone.trim())     e.phone     = 'Required';
    if (!form.provider)         e.provider  = 'Required';
    if (form.provider === 'Other' && !form.otherProvider.trim()) e.otherProvider = 'Please enter your insurance company';
    if (!form.memberId.trim())  e.memberId  = 'Required';
    if (!form.dob.trim())       e.dob       = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  /* ── Field helpers ── */
  const field = (
    id: string, label: string, type: string,
    placeholder: string, value: string,
    onChange: (v: string) => void,
    colSpan = 'col-span-1'
  ) => (
    <div className={`flex flex-col gap-1.5 ${colSpan}`}>
      <label htmlFor={id} className="text-[11.5px] font-bold uppercase tracking-[0.1em]" style={{ color: '#5A6F8A' }}>
        {label}
      </label>
      <input
        id={id} type={type} value={value}
        onChange={ev => onChange(ev.target.value)}
        placeholder={placeholder}
        className={`rounded-xl border px-3.5 py-2.5 text-[13.5px] font-medium text-apex-ink placeholder-gray-300 outline-none transition-all duration-200 focus:border-apex-navy focus:ring-2 focus:ring-apex-navy/10 bg-white ${
          errors[id] ? 'border-red-400 ring-2 ring-red-100' : 'border-[#E2EAF4] hover:border-apex-navy/40'
        }`}
      />
      {errors[id] && <span className="text-[11px] font-medium text-red-500">{errors[id]}</span>}
    </div>
  );

  /* ── Success state ── */
  if (submitted) return (
    <div className="flex flex-col items-center justify-center text-center gap-6 px-8 py-14 min-h-[520px]">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30" />
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-200">
          <Check className="h-10 w-10 text-white" strokeWidth={3} />
        </div>
      </div>
      <div>
        <h3 className="heading text-[1.65rem] text-apex-navy mb-3">You're All Set!</h3>
        <p className="body-copy text-[14.5px] leading-relaxed max-w-xs mx-auto">
          A recovery specialist will reach out within <strong className="text-apex-navy">30 minutes</strong> to review
          your coverage — confidentially and at no cost.
        </p>
      </div>
      <div className="w-full rounded-2xl bg-apex-soft border border-[#E2EAF4] p-5 text-left">
        <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: '#8AA0BC' }}>Prefer to talk now?</p>
        <a href={PHONE_HREF} className="flex items-center gap-2 font-bold text-apex-navy hover:text-apex-teal transition-colors text-[1.05rem]">
          <Phone className="h-5 w-5 flex-shrink-0" strokeWidth={2} />
          {PHONE}
        </a>
        <p className="text-[12px] mt-1" style={{ color: '#8AA0BC' }}>Available 24 / 7 · English & Spanish</p>
      </div>
      <p className="flex items-center gap-1.5 text-[11.5px]" style={{ color: '#8AA0BC' }}>
        <Lock className="h-3.5 w-3.5 flex-shrink-0" /> 100% Confidential · HIPAA Compliant · No Obligation
      </p>
    </div>
  );

  return (
    <form onSubmit={submit} noValidate>

      {/* ── Header ── */}
      <div className="px-7 pt-7 pb-5 border-b border-[#E8EFF7]">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2 text-apex-gold">
          Free Insurance Verification
        </p>
        <h3 className="heading text-[1.2rem] leading-snug text-apex-navy mb-2.5">
          Your Insurance May Cover{' '}
          <span className="text-apex-gold">100% of Your Treatment.</span>
        </h3>
        <p className="text-[13px] leading-relaxed" style={{ color: '#5A6F8A' }}>
          Insurance is confusing. Our team will walk you through each step to help you make the best decision for you or your loved one.
        </p>
      </div>

      {/* ── Fields ── */}
      <div className="px-7 py-5 flex flex-col gap-3.5">

        {/* Row 1: First + Last */}
        <div className="grid grid-cols-2 gap-2.5">
          {field('firstName', 'First Name', 'text', 'Jane',  form.firstName, v => set('firstName', v))}
          {field('lastName',  'Last Name',  'text', 'Smith', form.lastName,  v => set('lastName', v))}
        </div>

        {/* Phone */}
        {field('phone', 'Phone Number', 'tel', '(555) 000-0000', form.phone, v => set('phone', v), '')}

        {/* Insurance Provider */}
        <div className="flex flex-col gap-1">
          <label htmlFor="provider" className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: '#5A6F8A' }}>
            Insurance Provider
          </label>
          <div className="relative">
            <select
              id="provider"
              value={form.provider}
              onChange={e => set('provider', e.target.value)}
              className={`w-full appearance-none rounded-xl border px-3.5 py-2.5 pr-9 text-[13.5px] font-medium text-apex-ink outline-none transition-all duration-200 focus:border-apex-navy focus:ring-2 focus:ring-apex-navy/10 bg-white ${
                errors.provider ? 'border-red-400 ring-2 ring-red-100' : 'border-[#E2EAF4] hover:border-apex-navy/40'
              }`}
            >
              <option value="" disabled>Select your insurance…</option>
              {INSURERS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-apex-navy" strokeWidth={2} />
          </div>
          {errors.provider && <span className="text-[11px] font-medium text-red-500">{errors.provider}</span>}
        </div>

        {/* "Other" reveal */}
        {form.provider === 'Other' && (
          <div className="flex flex-col gap-1 -mt-1">
            <label htmlFor="otherProvider" className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: '#5A6F8A' }}>
              Insurance Company Name
            </label>
            <input
              id="otherProvider" type="text" value={form.otherProvider}
              onChange={e => set('otherProvider', e.target.value)}
              placeholder="Enter your insurance company…"
              autoFocus
              className={`rounded-xl border px-3.5 py-2.5 text-[13.5px] font-medium text-apex-ink placeholder-gray-300 outline-none transition-all duration-200 focus:border-apex-navy focus:ring-2 focus:ring-apex-navy/10 bg-white ${
                errors.otherProvider ? 'border-red-400 ring-2 ring-red-100' : 'border-[#E2EAF4] hover:border-apex-navy/40'
              }`}
            />
            {errors.otherProvider && <span className="text-[11px] font-medium text-red-500">{errors.otherProvider}</span>}
          </div>
        )}

        {/* Member ID + DOB */}
        <div className="grid grid-cols-2 gap-2.5">
          {field('memberId', 'Member ID',     'text', 'e.g. XYZ123456', form.memberId, v => set('memberId', v))}
          {field('dob',      'Date of Birth', 'date', '',               form.dob,      v => set('dob', v))}
        </div>

        {/* Contact agreement */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input type="checkbox" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-apex-navy cursor-pointer" />
          <p className="text-[12px] leading-relaxed select-none" style={{ color: '#5A6F8A' }}>
            By submitting this form, I agree to be contacted by{' '}
            <strong className="text-apex-navy">Apex Wellness</strong>{' '}
            regarding my insurance benefits and treatment options.
          </p>
        </label>

        {/* Submit */}
        <button type="submit" className="btn-gold btn-block">
          <Check className="h-4 w-4" strokeWidth={2.5} />
          Verify My Insurance — It&apos;s Free
        </button>

      </div>
    </form>
  );
}
