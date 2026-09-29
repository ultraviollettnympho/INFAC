import { createFileRoute } from "@tanstack/react-router";
import { LostRoom } from "@/components/lost-room";

export const Route = createFileRoute("/$")({
  component: LostRoom,
});
