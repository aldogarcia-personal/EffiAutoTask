const apiUrl = import.meta.env.REACT_APP_API_URL || "http://localhost:27017";

export const login = async (identified: string, password: string) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identified, password }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};
