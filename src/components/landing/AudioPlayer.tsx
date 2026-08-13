"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, ShieldCheck, Flame, Calendar } from "lucide-react";

interface AudioTrack {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: typeof Flame;
  duration: string;
  src: string;
}

const tracks: AudioTrack[] = [
  {
    id: "emergency",
    title: "Emergency Dispatch: Burst Pipe at 2 AM",
    subtitle: "Triages water shutoff instruction & dispatches night technician",
    badge: "Emergency Triage",
    badgeColor: "border-red-200 bg-red-50 text-red-600",
    icon: Flame,
    duration: "0:05",
    // Working public audio sample
    src: "https://cdn.freesound.org/previews/512/512471_10921008-lq.mp3",
  },
  {
    id: "booking",
    title: "Routine Scheduling: HVAC Tune-Up",
    subtitle: "Captures job details and schedules directly on Google Calendar",
    badge: "Calendar Booking",
    badgeColor: "border-blue-200 bg-blue-50 text-blue-600",
    icon: Calendar,
    duration: "0:05",
    // Working public audio sample
    src: "https://cdn.freesound.org/previews/554/554841_11861866-lq.mp3",
  },
];

export function AudioPlayer() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const togglePlay = (id: string) => {
    // Pause any other playing audio track
    Object.keys(audioRefs.current).forEach((key) => {
      if (key !== id && audioRefs.current[key]) {
        audioRefs.current[key]?.pause();
      }
    });

    const activeAudio = audioRefs.current[id];
    if (!activeAudio) return;

    if (playingId === id) {
      activeAudio.pause();
      setPlayingId(null);
    } else {
      activeAudio.currentTime = 0;
      activeAudio
        .play()
        .then(() => {
          setPlayingId(id);
        })
        .catch((err) => {
          console.warn("Playback prevented by browser:", err);
          setPlayingId(null);
        });
    }
  };

  return (
    <section className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue">
            <Volume2 size={14} />
            <span>Interactive Audio Samples</span>
          </div>

          <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Listen to AnswerKeeper in Action
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted sm:text-lg">
            Hear how natural, clear, and professional your callers will experience every interaction—from emergency calls to standard bookings.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tracks.map((track) => {
            const isPlaying = playingId === track.id;
            const Icon = track.icon;

            return (
              <div
                key={track.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 ${
                  isPlaying
                    ? "border-blue bg-white shadow-xl shadow-blue/5 ring-1 ring-blue/20"
                    : "border-border bg-white hover:border-blue-mid hover:shadow-md"
                }`}
              >
                {/* Embedded HTML5 Audio Tag per Track */}
                <audio
                  ref={(el) => {
                    audioRefs.current[track.id] = el;
                  }}
                  src={track.src}
                  preload="auto"
                  onEnded={() => setPlayingId(null)}
                  className="hidden"
                />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${track.badgeColor}`}
                    >
                      <Icon size={12} />
                      {track.badge}
                    </span>
                    <span className="text-xs font-mono text-navy-soft">
                      {track.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                    {track.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-navy-muted">
                    {track.subtitle}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <button
                    type="button"
                    onClick={() => togglePlay(track.id)}
                    className={`inline-flex items-center gap-3 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                      isPlaying
                        ? "bg-navy text-white shadow-md"
                        : "bg-blue text-white shadow-md shadow-blue/20 hover:bg-blue-dark"
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause size={16} fill="currentColor" />
                        <span>Pause Sample</span>
                      </>
                    ) : (
                      <>
                        <Play size={16} fill="currentColor" />
                        <span>Play Call Sample</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-1 text-xs font-medium text-navy-soft">
                    <ShieldCheck size={14} className="text-blue" />
                    <span>Live Dispatch Audio</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}