# spec.md — StayOnTop Marketing Website

## Objective
Build a **simple marketing website** for **StayOnTop** at `stayontop.app`.

This spec is for the **website only**.  
It is **not** a spec for the StayOnTop application itself.

The website’s job is to:
1. explain what StayOnTop is,
2. show who it is for,
3. communicate trust and privacy clearly,
4. collect beta interest,
5. provide a contact path.

The website should feel credible, calm, and clear.

---

## What StayOnTop is
StayOnTop is a tool for busy families and households that helps surface important tasks hidden in email — such as bills, school forms, renewals, registrations, and reminders — and organizes them into a simple review-and-action workflow.

The website should present StayOnTop as:
- a focused household task assistant,
- helpful but controlled,
- built around review before action,
- privacy-conscious,
- designed to reduce missed deadlines and stress.

Do **not** position it as a generic “AI productivity” product.

---

## Audience
### Primary audience
- Busy families
- Dual-income households
- Parents managing school, bills, kids activities, and renewals
- People who feel important responsibilities get buried in inbox clutter

### Secondary audience
- Early beta testers
- Potential partners
- Advisors
- Interested visitors

---

## Website goals
The website should help a first-time visitor understand the product in under 30 seconds.

By the end of the page, the visitor should know:
- what problem StayOnTop solves,
- how it works at a high level,
- why it is useful,
- why they should trust it,
- how to join the beta,
- how to contact the founder.

---

## Primary CTA
Use **Join the beta** as the main CTA across the site.

Secondary CTAs may include:
- **See how it works**
- **Contact**
- **Read privacy details**

---

## Scope
### Build these pages
1. `/` — homepage
2. `/privacy` — privacy details / privacy policy
3. `/terms` — terms of use

### Do not build in v1
- login
- dashboard
- pricing page
- blog
- feature comparison pages
- product onboarding flow
- inbox connection UI
- account management UI
- complex animation-heavy experiences

This is a **simple marketing site**, not a full SaaS frontend.

---

# Homepage structure

Build the homepage as a single-page marketing site with anchored sections in this order:

1. Header / Navigation
2. Hero
3. Trust strip
4. Problem
5. Solution
6. How it works
7. Benefits
8. Product preview
9. Privacy / trust
10. FAQ
11. Founder note
12. Beta signup
13. Contact
14. Footer

---

## 1. Header / Navigation

### Requirements
- Left side: StayOnTop wordmark or simple logo
- Right side: navigation links and CTA button
- Keep navigation minimal
- Sticky header is acceptable
- Mobile menu should be simple and functional

### Nav links
- How it works
- FAQ
- Privacy
- Contact

### CTA
- Join beta

---

## 2. Hero

### Purpose
Explain the value proposition immediately.

### Layout
Desktop:
- left column: copy + CTAs
- right column: product mockup / simplified app preview

Mobile:
- stacked layout
- CTA visible without scrolling too far

### Required copy
**Eyebrow**  
For busy families and households

**Headline**  
Never miss the important stuff buried in email.

**Subheadline**  
StayOnTop helps you catch bills, school forms, renewals, registrations, and other important tasks hiding in your inbox — then turns them into a simple review-and-action list.

**Primary CTA**  
Join the beta

**Secondary CTA**  
See how it works

**Microcopy**  
Built to reduce missed deadlines, last-minute stress, and household inbox overload.

### Hero visual direction
The hero mockup should visually suggest:
- a “New for review” area,
- a “Do now” area,
- clear task cards,
- due dates or urgency labels,
- calm organization.

Use mockups or illustrative UI cards if real product screenshots are not available.

---

## 3. Trust strip

### Purpose
Quickly reinforce the value and reduce uncertainty.

### Required items
- Catch important deadlines sooner
- Stay in control with review first
- Reduce inbox scanning and mental load
- Built for busy families

This can be a thin horizontal strip or a row of short cards.

---

## 4. Problem section

### Required title
Email is where important life admin gets lost.

### Required body copy
Bills, insurance notices, school forms, activity registrations, appointment requests, and renewal reminders all land in the same inbox as promotions, newsletters, and noise. That is how important responsibilities get buried until they become urgent.

### Required problem blocks
1. **Missed deadlines**  
A form, payment, or renewal gets buried and only shows up when it is almost too late.

2. **Last-minute stress**  
You remember something important only after a reminder, penalty, or scramble.

3. **Too much inbox scanning**  
You keep re-checking email just to make sure nothing critical was missed.

4. **Split household responsibility**  
Important items live across different inboxes, senders, and routines.

---

## 5. Solution section

### Required title
StayOnTop turns buried emails into clear next actions.

### Required body copy
Instead of forcing you to search your inbox over and over, StayOnTop scans connected email accounts for likely action items and brings them into one focused workflow. You review what matters, dismiss what does not, and keep moving.

### Required bullets
- Detect likely bills, deadlines, forms, renewals, and registrations
- Surface new items in a review queue
- Approve or dismiss before anything becomes active
- Keep a clean list of what needs action now and what is coming up
- Receive a simple daily summary so nothing important fades into the background

### Required callout
**Helpful, not reckless.** StayOnTop is designed to assist your judgment — not make silent decisions on your behalf.

---

## 6. How it works

### Required title
How it works

### Required steps
1. **Connect your inboxes**  
Securely connect the email accounts you want monitored.

2. **Review what matters**  
StayOnTop flags likely household tasks such as bills, forms, renewals, and registrations.

3. **Approve or dismiss**  
You decide what should become an active task and what should be ignored.

4. **Stay ahead**  
See what needs action now, what is due soon, and what is already handled.

### Optional closer
Over time, the experience can become more useful as the system learns which senders and message types matter most to your household.

---

## 7. Benefits

### Required title
What you get

### Required cards
1. **Fewer expensive misses**  
Catch the kinds of emails that can lead to late fees, missed renewals, or registration problems.

2. **Less mental load**  
Spend less energy re-reading inboxes and trying to remember what still needs action.

3. **One clearer view**  
Bring scattered household responsibilities into one place.

4. **More peace of mind**  
Know that important tasks are less likely to disappear into email clutter.

---

## 8. Product preview

### Required title
Designed for fast review and confident action

### Required intro copy
StayOnTop is built around a simple rhythm: review new items, confirm what matters, and act before deadlines pile up.

### Required preview items
1. **New for review**  
A focused list of newly detected items that may need your attention.

2. **Do now**  
Your most urgent approved tasks, surfaced clearly.

3. **Task details**  
See the due date, category, source, and original email context.

4. **Daily summary**  
A lightweight check-in to help you stay ahead.

### Required note
If using mockups instead of real UI, include:  
*Early product preview. Screens shown for illustration.*

---

## 9. Privacy / trust

### Required title
Built with privacy and trust in mind

### Required body copy
If a product touches your email, trust is not optional. StayOnTop is being built to help you identify important household tasks while keeping you in control of what gets surfaced and acted on.

### Required bullets
- You choose which accounts to connect
- You review suggested tasks before they become active
- The goal is to process only what is needed to identify useful action items
- Your data is not sold
- You can disconnect accounts and request data deletion

### Required CTA
Read privacy details

### Important rule
Do not make any fake or overly specific privacy/security claims.  
Do not mention certifications, encryption specifics, compliance frameworks, or guarantees unless they are actually true.

---

## 10. FAQ

### Required title
Frequently asked questions

### Required FAQ items

#### What does StayOnTop do?
StayOnTop helps identify important household tasks hidden in email — such as bills, forms, renewals, registrations, and reminders — and organizes them into a review-and-action workflow.

#### Does it automatically do things for me?
No. StayOnTop is designed to help you review and manage important items, while keeping you in control of what becomes an active task.

#### What kinds of emails can it detect?
It is intended to surface high-signal messages such as billing notices, insurance renewals, school or kids-related forms, payment reminders, appointment-related requests, and registration deadlines.

#### Can I connect more than one inbox?
That is part of the product vision. StayOnTop is designed around the reality that important responsibilities may be spread across multiple accounts.

#### Is this a replacement for my email app?
No. StayOnTop works alongside your inbox by helping you notice and manage what deserves attention.

#### Who is this for?
StayOnTop is built primarily for busy households, especially families juggling responsibilities across work, school, kids activities, bills, and home life.

#### Is my data private?
Protecting user trust is central to the product. The site should clearly explain what data is accessed, how it is used, and what control users have over deletion and account access.

#### How do I join the beta?
Use the signup form on this page to request early access.

---

## 11. Founder note

### Required title
Why I’m building this

### Required copy
Important family responsibilities too often arrive through email and then disappear into noise. Missing just one insurance renewal, registration form, or payment can create unnecessary cost and stress. I’m building StayOnTop to make those responsibilities easier to catch, review, and manage before they become urgent.

### Required supporting line
Built by a product and technology leader who has spent years designing software that helps people manage complexity more clearly.

### CTA
Questions? Get in touch

### Optional
Add a founder headshot if it improves credibility.

---

## 12. Beta signup

### Purpose
This is the main conversion section.

### Required title
Get early access

### Required copy
Be one of the first to try StayOnTop and help shape the product.

### Required fields
- First name
- Email
- What best describes you?
  - Busy parent
  - Household organizer
  - Beta tester / early adopter
  - Other
- Biggest challenge you want StayOnTop to solve

### Required button
Join the beta

### Required success message
Thanks — you’re on the list.

### Required note
No spam. Just product updates and beta access information.

### Priority
This section should be visually stronger and more prominent than the contact section.

---

## 13. Contact

### Required title
Contact

### Required copy
Interested in the product, partnerships, feedback, or early conversations? Send a message.

### Required fields
- Name
- Email
- Reason for reaching out
  - Beta interest
  - Feedback
  - Partnership
  - Press
  - General question
- Message

### Required button
Send message

### Required success message
Thanks — I’ll get back to you soon.

### Optional direct contact line
Prefer email? Reach out at **hello@stayontop.app**

---

## 14. Footer

### Required brand text
StayOnTop

### Required supporting line
Helping families stay ahead of important tasks hidden in email.

### Required links
- Home
- FAQ
- Privacy Policy
- Terms of Use
- Contact

### Required copyright
© StayOnTop. All rights reserved.

---

# Privacy page (`/privacy`)

Build a simple privacy page that includes:
- what user data is accessed,
- why it is accessed,
- what may be stored,
- what user controls exist,
- how users can disconnect accounts,
- how users can request deletion,
- how to contact for privacy questions.

This page can be simple, but it must exist.

---

# Terms page (`/terms`)

Build a simple terms page that includes:
- what the service is,
- user responsibilities,
- limitation / disclaimer language placeholder,
- contact information.

This page can be simple, but it must exist.

---

# Design direction

## Tone
The website should feel:
- calm
- clear
- trustworthy
- simple
- modern
- family-oriented without being cheesy

## Avoid
- generic AI branding
- flashy startup visual clichés
- overly technical illustrations
- cluttered pages
- aggressive marketing language
- too many sections or distractions

## Layout guidance
- mobile-first
- strong spacing
- high readability
- card-based content where helpful
- clear section hierarchy
- repeated CTA, but not too often

---

# Technical implementation

## Preferred stack
Use:
- Next.js
- Tailwind CSS

## Implementation requirements
- semantic HTML
- accessible forms and labels
- responsive layout
- good mobile experience
- lightweight dependencies
- clean section-based component structure

## Forms
Both forms must work.
Do not create dummy forms.

The beta form and contact form may submit through:
- Formspree,
- Supabase,
- a simple backend route,
- or another lightweight solution.

## Analytics
Track at least:
- hero CTA click
- beta form submit
- contact form submit
- privacy page view

Use a lightweight analytics solution.

---

# Content guidance for Claude Code

Claude Code should:
- implement the site as a clean marketing site,
- use the provided copy directly or with only minor polishing,
- optimize for trust and clarity,
- avoid inventing extra pages or product claims,
- avoid adding fake testimonials,
- avoid turning the site into a product dashboard shell.

---

# Acceptance criteria

The work is complete when:
1. The homepage includes all required sections in the required order.
2. The homepage clearly communicates the product and audience.
3. The site feels like a marketing website, not an app UI.
4. The primary CTA is Join the beta.
5. The beta signup form works.
6. The contact form works.
7. The privacy page exists.
8. The terms page exists.
9. The site is mobile responsive.
10. The site does not overclaim privacy or security features.
11. The site is clean, believable, and simple.

---

# Final instruction
Build a **simple, polished, trustworthy marketing website** for StayOnTop.

Do not overbuild it.  
Do not treat this as the app.  
Treat it as the public-facing website that explains the idea and captures early interest.
