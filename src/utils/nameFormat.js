export const nameFormat = (e) => {
  const fullName = e.split(" ");
  return fullName.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
};
