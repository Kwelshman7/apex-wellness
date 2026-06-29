# Apex Wellness Website Build Guide

## Mission
Build a polished, premium, one-page healthcare website for Apex Wellness Group. The site must feel trustworthy, calm, clinical, family-centered, and professionally designed. It should look like a high-end custom healthcare site, not a generic template.

## Brand Direction
Apex Wellness Group helps individuals and families navigate behavioral health and substance use treatment options. If Apex is not the right fit, the team helps connect people with trusted providers and appropriate referral options.

## Design Theme
Use the Apex Wellness logo colors throughout:
- Deep Navy: #071F4D / #08285A
- Gold Accent: #C98A18 / #D49A2A
- White: #FFFFFF
- Soft Blue Background: #F4F8FC
- Light Border: #DDE7F1
- Body Text: #0B1B3A

## Typography
Use a premium serif for large headings and a clean sans-serif for body text.
Recommended:
- Headings: Playfair Display or Cormorant Garamond
- Body/UI: Inter or Manrope

## Global Layout Rules
- One-page landing page only.
- No extra pages needed in the MVP.
- Sticky clean header.
- Max content width: 1200px–1280px.
- Generous vertical padding: 96px desktop, 64px tablet, 48px mobile.
- Use consistent cards: 24px border radius, soft shadow, white background, gold/navy bottom border accents.
- Use the lion mark as a subtle oversized watermark in several sections at 5–8% opacity, cropped off the left side.
- No harsh gradients, no neon glow, no dark middle sections except the footer.
- Gold is an accent only. Navy is the primary action/trust color.
- Every section must feel like it belongs to the same design system.

## Required Assets
Place these in `/public/images/`:
- apex-wellness-logo.png
- apex-lion-mark.png
- dcf-logo.png
- joint-commission.png

## Page Sections
1. Header
2. Hero
3. The Problem
4. Why Apex Is Different
5. Programs / Levels of Care
6. National Referral Network
7. Insurance & Coverage
8. Stories / Trust Section
9. Final Contact CTA
10. Footer

## Critical Content Rules
- Do not overpromise outcomes.
- Avoid sounding like a national placement organization.
- Position Apex as guidance/support with owned programs and trusted referral options when appropriate.
- Include emergency disclaimer in footer/contact areas.
- Use HIPAA/confidential language carefully and professionally.
- Any statistics/testimonials must be placeholders unless real data is supplied.

## Accessibility
- WCAG-conscious contrast.
- Buttons must have visible focus states.
- All images need alt text.
- Mobile-first responsive design.
- No tiny text under 14px.

## Developer Instructions
Build this in Next.js with TypeScript, Tailwind CSS, and clean reusable components. Use hardcoded content for now. Keep all section content in a structured data object where possible so edits are easy.

The final result must be production-quality, responsive, and visually consistent with the generated section mockups.
