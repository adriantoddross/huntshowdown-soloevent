# I love Hunt: Showdown.

**[LIVE DEMO (still a work in progress!)](https://huntshowdown-soloevent-summary.netlify.com/)**

I play *a lot* of [Hunt: Showdown](https://www.huntshowdown.com/) and they recently finished up their first [solo event](https://www.huntshowdown.com/news/solo-event-leaderboard-and-extra-rewards). When viewing the leaderboard, I noticed that the table was an image and not actually coded into the webpage. This felt like a missed opportunity to me for a few reasons:

- None of the contestants social media accounts were (or could be) linked
- I couldn't sort by username, missions played, or figure out stuff like who made the most bounty with the fewest missions played
- I felt like the data could have been presented in a more interesting, nuanced way

After applying to [Elastic](https://www.elastic.co/), I wanted to create a project based on [data visualization](https://www.elastic.co/blog/color-coded-visualizations-react) with clean, accessible UI & UX.

## Lessons learned so far

### 1. Fending off mutiny
I learned how to code using functional programming, so keeping my functions and variables immutable is something I obsess over. When referring to the state or player stats, I use Object.assign() I always make a copy, not a reference.

### 2. Reinforcing my understanding of array methods
The .sort method is simple and powerful. In this project, all columns in the table can be sorted and one of tidbits displayed in the Overview component uses the sort method too! I also finally had a real opportunity to use array .reduce:

``` js
 // Let's use a helper function to get the sum of whatever key/value pair we're looking for using .reduce.
  const sum = (key, array) => array.reduce(function (acc, obj) { return acc + parseInt(obj[key], 10); }, 0);

  const sumOfBounties = sum('bounty', stats); // we use our helper function for the sum
```
