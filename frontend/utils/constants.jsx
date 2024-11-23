// export const USER_API_ENDPOINT = "http://localhost:5000/api/v1/user";
// export const TWEET_API_ENDPOINT = "http://localhost:5000/api/v1/tweet";
// export const USER_API_ENDPOINT =
//   "https://connectus-eoiz.onrender.com/api/v1/user";
// export const TWEET_API_ENDPOINT =
//   "https://connectus-eoiz.onrender.com/api/v1/tweet";
export const USER_API_ENDPOINT = "https://connect-theta-lake.vercel.app/api/v1/user";
export const TWEET_API_ENDPOINT = "https://connect-theta-lake.vercel.app/v1/tweet";

export const timeSince = (timestamp) => {
  let time = Date.parse(timestamp);
  let now = Date.now();
  let secondsPast = (now - time) / 1000;
  let suffix = "ago";
  if (secondsPast < 1) return "0 second ago";

  let intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (let i in intervals) {
    let interval = intervals[i];
    if (secondsPast >= interval) {
      let count = Math.floor(secondsPast / interval);
      return `${count} ${i}${count > 1 ? "s" : ""} ${suffix}`;
    }
  }
}