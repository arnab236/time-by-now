function timeAgo(date) {
  if (!(date instanceof Date)) date = new Date(date);

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (let key in intervals) {
    const value = Math.floor(seconds / intervals[key]);
    if (value >= 1) {
      return `${value} ${key}${value > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

function timeUntil(date) {
  if (!(date instanceof Date)) date = new Date(date);

  const seconds = Math.floor((date.getTime() - Date.now()) / 1000);

  if (seconds <= 0) return "already passed";

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (let key in intervals) {
    const value = Math.floor(seconds / intervals[key]);
    if (value >= 1) {
      return `in ${value} ${key}${value > 1 ? "s" : ""}`;
    }
  }
  return "any moment now";
}

module.exports = { timeAgo, timeUntil };