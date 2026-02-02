"use server";

export async function getInitkitVersion(): Promise<string> {
  try {
    const response = await fetch("https://registry.npmjs.org/initkit/latest", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch version");
    }

    const data = await response.json();
    return data.version || "1.2.5";
  } catch (error) {
    console.error("Error fetching npm version:", error);
    return "1.2.5"; // Fallback version
  }
}
