export async function fetchCards() {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/cards`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (response.ok) {
      return await response.json();
    }

    throw new Error("API local failed");
  } catch (error) {
    console.error("Failed to fetch from local API:", error);
  }
}
