# I love Hunt: Showdown.

I play *a lot* of [Hunt: Showdown](https://www.huntshowdown.com/) and they recently finished up their first [solo event](https://www.huntshowdown.com/news/solo-event-leaderboard-and-extra-rewards). When viewing the leaderboard, I noticed that the table was an image and not actually coded into the webpage. This felt like a missed opportunity to me for a few reasons:

- None of the contestants social media accounts were (or could be) linked
- I couldn't sort by username, missions played, or figure out stuff like who made the most bounty with the fewest missions played
- I felt like the data could have been presented in a more interesting, nuanced way

After applying to [Elastic](https://www.elastic.co/), I wanted to create a project based on [data visualization](https://www.elastic.co/blog/color-coded-visualizations-react) with clean, accessible UI & UX.

**[LIVE DEMO (still a work in progress!)](https://huntshowdown-soloevent-summary.netlify.com/)**

## Lessons learned so far

### 1. Fending off mutiny
I learned how to code using functional programming, so keeping my functions and variables immutable are things I obsess over. When copying the state, I use Object.assign(), and when referring to the array of player stats, I always make a copy, which might not be necessary, but doesn't hurt anything!

### 2. Getting comfortble with the Array sort() method
The .sort method is simple and powerful. In this project, I've done my best to use it appropriately and sparingly in the table that shows player data.
