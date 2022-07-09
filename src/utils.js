// Text Format

export const textFormat = (e) => e.charAt(0).toUpperCase() + e.slice(1);

export const nameFormat = (e) => {
  const fullName = e.split(" ");
  return fullName.map(textFormat).join(" ");
};

// Greetings

export function greetings(hours) {
  let greetings = "";
  if (hours < 12) {
    greetings = "Good Morning";
  } else if (hours >= 12 && hours < 16) {
    greetings = "Good Afternoon";
  } else if (hours >= 16 && hours < 20) {
    greetings = "Good Evening";
  } else if (hours >= 21) greetings = "Good Night";
  return greetings;
}
