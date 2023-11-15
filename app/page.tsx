import CookieCard from "./_components/cookie-card";
import FollowPointer from "./_components/follow-pointer";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  gradient relative">
      <Hero />
      <CookieCard />
      <FollowPointer />
    </main>
  );
}
