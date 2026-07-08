# Terricon Hack — Library Companion App

A mobile app prototype built for **HackTheBookshelf**, a hackathon marking the 90th anniversary of the Gogol Library in Karaganda.

🥇 **1st place, 300,000 ₸ — "Mobile App Development" track**, out of 60+ teams from across Kazakhstan. Held September 6–8, 2024 at the Terricon Valley IT Hub.

The app lets library visitors register for events, get reminders to return borrowed books, and take part in gamified reading activities — built by the Balmuzdaq Studio team in three days.

## Features

- **Auth**: sign-in / sign-up flow.
- **Books**: browse and view individual book details.
- **Community**: event registration and community activity feed.
- **Home**: personalized landing screen.

## Tech Stack

- **React Native + Expo Router**
- **JavaScript**

## Run locally

```bash
git clone https://github.com/maksimkaprosuperhacker/Terricon_hack.git
cd Terricon_hack
npm install
npx expo start
```

## Key Files

- `app/(auth)/` — sign-in / sign-up.
- `app/(tabs)/books.jsx` — book catalog.
- `app/(tabs)/community.jsx` — events and community.
- `app/books/[book].jsx` — book detail view.

## Author

- [@maksimkaprosuperhacker](https://github.com/maksimkaprosuperhacker) — built with the Balmuzdaq Studio team
