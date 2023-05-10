function solution(D) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const output = {};

  // Step 1: Initialize the output dictionary with keys for each day
  for (const day of days) {
    output[day] = 0;
  }

  // Step 2: Iterate over the input dictionary and accumulate the values for each day
  for (const key in D) {
    const value = D[key];
    const date = new Date(key);
    const dayIndex = date.getDay();
    const day = days[dayIndex];
    output[day] += value;
  }

  // Step 3: Handle missing days by taking the mean of the previous and next day's value
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (!(day in D)) {
      const prevDay = days[i === 0 ? days.length - 1 : i - 1];
      const nextDay = days[i === days.length - 1 ? 0 : i + 1];
      output[day] = Math.round((output[prevDay] + output[nextDay]) / 2);
    }
  }

  return output;
}
