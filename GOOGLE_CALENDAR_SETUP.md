# Google Calendar Appointment Scheduling Setup

## Step 1: Create Appointment Schedule

1. Go to **Google Calendar** (calendar.google.com)
2. Click the **gear icon** (Settings) in top right
3. Select **Settings** from dropdown
4. In left sidebar, click **Appointment schedules**
5. Click **+ Create** button
6. Configure your appointment schedule:
   - **Schedule name**: "Portfolio Consultation" (or whatever you prefer)
   - **Duration**: 30 minutes (or your preference)
   - **Location**: Google Meet / Phone / In-person
   - **Availability**: Set your available hours
   - **Booking window**: How far in advance people can book
   - **Buffer time**: Time between meetings (optional)

## Step 2: Get Your Booking Page URL

After creating the schedule:
1. Click on the appointment schedule you just created
2. Click **Get booking page**
3. Copy the URL (looks like: `https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID`)

## Step 3: Update Your Portfolio

Replace the placeholder in `src/pages/ContactPage.tsx`:

**Find this line:**
```typescript
src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID"
```

**Replace with your actual URL:**
```typescript
src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1234..." // Your actual schedule ID
```

## Step 4: Test It

1. Save the file
2. Commit and push to GitHub
3. Vercel will auto-deploy
4. Visit your contact page and test the booking flow

## Tips

- **Make it public**: Ensure your appointment schedule is set to "Anyone with the link can book"
- **Email notifications**: You'll get emails when someone books
- **Calendar sync**: Appointments automatically add to your Google Calendar
- **Customize**: You can have multiple appointment types (15 min call, 1 hour consultation, etc.)

## Troubleshooting

If the iframe doesn't load:
1. Check that the URL is correct
2. Verify the appointment schedule is active (not paused)
3. Clear browser cache
4. Make sure you're not in "Preview" mode - must be published

---

**Current Status:** Code updated, ready for your Google Calendar URL.
