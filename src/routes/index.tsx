import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/birthday/LoadingScreen";
import { CursorGlow } from "@/components/birthday/CursorGlow";
import { Hero } from "@/components/birthday/Hero";
import { Message } from "@/components/birthday/Message";
import { Timeline } from "@/components/birthday/Timeline";
import { Special } from "@/components/birthday/Special";
import { Gallery } from "@/components/birthday/Gallery";
import { Wishes } from "@/components/birthday/Wishes";
import { OpenWhen } from "@/components/birthday/OpenWhen";
import { MusicPlayer } from "@/components/birthday/MusicPlayer";
import { Finale } from "@/components/birthday/Finale";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <LoadingScreen name="Beautiful" />
      <CursorGlow />
      <Hero />
      <Message />
      <Timeline />
      <Special />
      <Gallery />
      <Wishes />
      <OpenWhen />
      <Finale />
      <MusicPlayer />
    </main>
  );
}
