export const revalidate = 10;
export const dynamic = 'force-static';

export default async function Home() {
  return (
    <main>
      <h1>undici</h1>
      <p>This page, set to revalidate every 10 seconds, was last rendered at {new Date().toString()}.</p>
    </main>
  );
}
