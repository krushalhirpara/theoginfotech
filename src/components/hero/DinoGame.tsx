"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Play, RotateCcw, Volume2, VolumeX, Trophy, Sparkles, Gamepad2 } from "lucide-react";

interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  type: "cactus_small" | "cactus_double" | "cactus_triple" | "cactus_tall" | "pterodactyl";
  frame?: number;
}

interface Cloud {
  x: number;
  y: number;
  speed: number;
  scale: number;
}

export const DinoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [hasStartedOnce, setHasStartedOnce] = useState<boolean>(false);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Sound generator
  const playSound = useCallback((type: "jump" | "score" | "hit") => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "jump") {
        osc.type = "square";
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(620, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === "score") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.08); // A5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === "hit") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(60, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch {
      // Audio not supported or blocked
    }
  }, [soundEnabled]);

  // Load High Score from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("og_dino_high_score");
      if (saved) {
        setHighScore(parseInt(saved, 10) || 0);
      }
    }
  }, []);

  // Game Engine State in ref to avoid re-renders during 60fps loop
  const gameStateRef = useRef({
    dino: {
      x: 50,
      y: 135,
      width: 44,
      height: 47,
      vy: 0,
      isGrounded: true,
      isDucking: false,
      legFrame: 0,
    },
    groundY: 175,
    speed: 6.5,
    obstacles: [] as Obstacle[],
    clouds: [
      { x: 120, y: 35, speed: 0.6, scale: 0.8 },
      { x: 380, y: 25, speed: 0.4, scale: 1.1 },
      { x: 650, y: 45, speed: 0.5, scale: 0.9 },
    ] as Cloud[],
    groundBumps: [
      { x: 60, width: 30 },
      { x: 190, width: 45 },
      { x: 340, width: 25 },
      { x: 510, width: 60 },
      { x: 680, width: 35 },
    ],
    score: 0,
    distanceSinceLastObstacle: 0,
    minDistanceBetweenObstacles: 220,
    isPlaying: false,
    isGameOver: false,
    animId: 0,
    tick: 0,
  });

  const jump = useCallback(() => {
    const s = gameStateRef.current;
    if (s.isGameOver) {
      resetGame();
      return;
    }
    if (!s.isPlaying) {
      startGame();
      return;
    }
    if (s.dino.isGrounded) {
      s.dino.vy = -12.2;
      s.dino.isGrounded = false;
      playSound("jump");
    }
  }, [playSound]);

  const startGame = useCallback(() => {
    const s = gameStateRef.current;
    s.isPlaying = true;
    s.isGameOver = false;
    setIsPlaying(true);
    setIsGameOver(false);
    setHasStartedOnce(true);
    if (s.dino.isGrounded) {
      s.dino.vy = -12.2;
      s.dino.isGrounded = false;
      playSound("jump");
    }
  }, [playSound]);

  const resetGame = useCallback(() => {
    const s = gameStateRef.current;
    s.dino.y = 135;
    s.dino.vy = 0;
    s.dino.isGrounded = true;
    s.dino.isDucking = false;
    s.speed = 6.5;
    s.obstacles = [];
    s.score = 0;
    s.distanceSinceLastObstacle = 0;
    s.isPlaying = true;
    s.isGameOver = false;
    setScore(0);
    setIsPlaying(true);
    setIsGameOver(false);
    playSound("jump");
  }, [playSound]);

  // Keyboard handler with strict scroll prevention
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in a form field
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      const isJumpKey =
        e.code === "Space" ||
        e.key === " " ||
        e.key === "Spacebar" ||
        e.keyCode === 32 ||
        e.code === "ArrowUp" ||
        e.key === "ArrowUp" ||
        e.keyCode === 38 ||
        e.code === "KeyW" ||
        e.key === "w" ||
        e.key === "W";

      const isDuckKey =
        e.code === "ArrowDown" ||
        e.key === "ArrowDown" ||
        e.keyCode === 40 ||
        e.code === "KeyS" ||
        e.key === "s" ||
        e.key === "S";

      if (isJumpKey) {
        // Stop browser from scrolling the page
        e.preventDefault();
        e.stopPropagation();
        jump();
      } else if (isDuckKey) {
        // Stop browser from scrolling down
        e.preventDefault();
        e.stopPropagation();
        gameStateRef.current.dino.isDucking = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const isDuckKey =
        e.code === "ArrowDown" ||
        e.key === "ArrowDown" ||
        e.keyCode === 40 ||
        e.code === "KeyS" ||
        e.key === "s" ||
        e.key === "S";

      if (isDuckKey) {
        e.preventDefault();
        e.stopPropagation();
        gameStateRef.current.dino.isDucking = false;
      }
    };

    // Use capturing phase and passive: false to intercept before default browser scroll
    window.addEventListener("keydown", handleKeyDown, { capture: true, passive: false });
    window.addEventListener("keyup", handleKeyUp, { capture: true, passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      window.removeEventListener("keyup", handleKeyUp, { capture: true });
    };
  }, [jump]);

  // Main 60 FPS Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const s = gameStateRef.current;
      const dt = Math.min((currentTime - lastTime) / 16.66, 2.0);
      lastTime = currentTime;

      s.tick++;

      // UPDATE LOGIC (Only when playing)
      if (s.isPlaying && !s.isGameOver) {
        // Gravity & Jump Physics
        s.dino.vy += 0.65 * dt;
        s.dino.y += s.dino.vy * dt;

        // Ground collision
        const baseGroundDinoY = s.groundY - (s.dino.isDucking ? 30 : 47);
        if (s.dino.y >= baseGroundDinoY) {
          s.dino.y = baseGroundDinoY;
          s.dino.vy = 0;
          s.dino.isGrounded = true;
        }

        // Running leg animation
        if (s.tick % 6 === 0) {
          s.dino.legFrame = (s.dino.legFrame + 1) % 2;
        }

        // Score increment
        s.score += 0.15 * dt;
        const currentIntScore = Math.floor(s.score);
        if (currentIntScore > 0 && currentIntScore % 100 === 0 && currentIntScore !== Math.floor(s.score - 0.15 * dt)) {
          playSound("score");
        }
        setScore(currentIntScore);

        // Gradually increase speed
        if (s.speed < 13.5) {
          s.speed += 0.0012 * dt;
        }

        // Move Ground bumps
        s.groundBumps.forEach((bump) => {
          bump.x -= s.speed * dt;
          if (bump.x < -bump.width) {
            bump.x = 800 + Math.random() * 50;
          }
        });

        // Move Clouds
        s.clouds.forEach((cloud) => {
          cloud.x -= cloud.speed * dt;
          if (cloud.x < -100) {
            cloud.x = 850 + Math.random() * 100;
            cloud.y = 20 + Math.random() * 35;
          }
        });

        // Obstacle Spawning
        s.distanceSinceLastObstacle += s.speed * dt;
        if (s.distanceSinceLastObstacle > s.minDistanceBetweenObstacles) {
          if (Math.random() < 0.045) {
            // Pick obstacle type
            const r = Math.random();
            let newObstacle: Obstacle;

            // Spawn Pterodactyl after score > 150
            if (s.score > 150 && Math.random() < 0.32) {
              const flyHeights = [s.groundY - 65, s.groundY - 45, s.groundY - 25];
              const flyY = flyHeights[Math.floor(Math.random() * flyHeights.length)];
              newObstacle = {
                x: 820,
                y: flyY,
                width: 42,
                height: 30,
                type: "pterodactyl",
                frame: 0,
              };
            } else if (r < 0.35) {
              newObstacle = {
                x: 820,
                y: s.groundY - 36,
                width: 18,
                height: 36,
                type: "cactus_small",
              };
            } else if (r < 0.65) {
              newObstacle = {
                x: 820,
                y: s.groundY - 36,
                width: 34,
                height: 36,
                type: "cactus_double",
              };
            } else if (r < 0.85) {
              newObstacle = {
                x: 820,
                y: s.groundY - 48,
                width: 24,
                height: 48,
                type: "cactus_tall",
              };
            } else {
              newObstacle = {
                x: 820,
                y: s.groundY - 36,
                width: 50,
                height: 36,
                type: "cactus_triple",
              };
            }

            s.obstacles.push(newObstacle);
            s.distanceSinceLastObstacle = 0;
            s.minDistanceBetweenObstacles = 200 + Math.random() * 160;
          }
        }

        // Move Obstacles & Check Collisions
        const dinoHitBox = {
          x: s.dino.x + 8,
          y: s.dino.y + 6,
          width: s.dino.isDucking ? 52 : 30,
          height: s.dino.isDucking ? 24 : 38,
        };

        for (let i = s.obstacles.length - 1; i >= 0; i--) {
          const obs = s.obstacles[i];
          obs.x -= s.speed * dt;

          if (obs.type === "pterodactyl" && s.tick % 8 === 0) {
            obs.frame = (obs.frame! + 1) % 2;
          }

          // AABB Collision Detection
          const obsHitBox = {
            x: obs.x + 4,
            y: obs.y + 4,
            width: obs.width - 8,
            height: obs.height - 8,
          };

          if (
            dinoHitBox.x < obsHitBox.x + obsHitBox.width &&
            dinoHitBox.x + dinoHitBox.width > obsHitBox.x &&
            dinoHitBox.y < obsHitBox.y + obsHitBox.height &&
            dinoHitBox.y + dinoHitBox.height > obsHitBox.y
          ) {
            // GAME OVER!
            s.isGameOver = true;
            s.isPlaying = false;
            setIsGameOver(true);
            setIsPlaying(false);
            playSound("hit");

            // Update High Score
            const finalScore = Math.floor(s.score);
            if (finalScore > highScore) {
              setHighScore(finalScore);
              if (typeof window !== "undefined") {
                localStorage.setItem("og_dino_high_score", finalScore.toString());
              }
            }
            break;
          }

          // Remove offscreen
          if (obs.x < -60) {
            s.obstacles.splice(i, 1);
          }
        }
      }

      // RENDER CANVAS
      ctx.clearRect(0, 0, 800, 200);

      // 1. Draw Clouds
      ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
      s.clouds.forEach((cloud) => {
        drawPixelCloud(ctx, cloud.x, cloud.y, cloud.scale);
      });

      // 2. Draw Ground Track
      ctx.strokeStyle = "#521D0E";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, s.groundY);
      ctx.lineTo(800, s.groundY);
      ctx.stroke();

      // Ground bumps/gravel
      ctx.fillStyle = "#8C4328";
      s.groundBumps.forEach((bump) => {
        ctx.fillRect(bump.x, s.groundY + 3, bump.width, 2);
        ctx.fillRect(bump.x + 8, s.groundY + 7, 5, 2);
        ctx.fillRect(bump.x + 22, s.groundY + 11, 8, 2);
      });

      // 3. Draw Obstacles
      s.obstacles.forEach((obs) => {
        if (obs.type === "pterodactyl") {
          drawPterodactyl(ctx, obs.x, obs.y, obs.frame || 0);
        } else {
          drawCactus(ctx, obs.x, obs.y, obs.type);
        }
      });

      // 4. Draw Dino
      drawDino(
        ctx,
        s.dino.x,
        s.dino.y,
        s.dino.isGrounded,
        s.dino.isDucking,
        s.dino.legFrame,
        s.isGameOver
      );

      // Continue loop
      s.animId = requestAnimationFrame(loop);
    };

    gameStateRef.current.animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(gameStateRef.current.animId);
    };
  }, [highScore, playSound]);

  // Helper Drawing Functions
  function drawPixelCloud(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.arc(20, 20, 14, 0, Math.PI * 2);
    ctx.arc(36, 14, 18, 0, Math.PI * 2);
    ctx.arc(54, 20, 14, 0, Math.PI * 2);
    ctx.arc(68, 24, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawCactus(ctx: CanvasRenderingContext2D, x: number, y: number, type: string) {
    ctx.fillStyle = "#FE3912";
    if (type === "cactus_small") {
      // Main trunk
      ctx.fillRect(x + 6, y, 6, 36);
      // Left arm
      ctx.fillRect(x, y + 10, 6, 14);
      ctx.fillRect(x, y + 8, 6, 4);
      ctx.fillRect(x + 2, y + 14, 6, 4);
      // Right arm
      ctx.fillRect(x + 12, y + 14, 6, 12);
      ctx.fillRect(x + 12, y + 12, 6, 4);
    } else if (type === "cactus_double") {
      drawCactus(ctx, x, y, "cactus_small");
      drawCactus(ctx, x + 16, y + 4, "cactus_small");
    } else if (type === "cactus_triple") {
      drawCactus(ctx, x, y, "cactus_small");
      drawCactus(ctx, x + 16, y + 4, "cactus_small");
      drawCactus(ctx, x + 32, y, "cactus_small");
    } else if (type === "cactus_tall") {
      ctx.fillRect(x + 8, y, 8, 48);
      // Left high arm
      ctx.fillRect(x, y + 12, 8, 18);
      ctx.fillRect(x, y + 8, 8, 6);
      // Right low arm
      ctx.fillRect(x + 16, y + 18, 8, 18);
      ctx.fillRect(x + 16, y + 14, 8, 6);
    }
  }

  function drawPterodactyl(ctx: CanvasRenderingContext2D, x: number, y: number, frame: number) {
    ctx.fillStyle = "#E02E09";
    // Body & Beak
    ctx.fillRect(x + 10, y + 12, 22, 6);
    ctx.fillRect(x + 2, y + 14, 10, 4); // Beak
    ctx.fillRect(x + 30, y + 10, 6, 4); // Tail
    // Eye
    ctx.fillStyle = "#FFF";
    ctx.fillRect(x + 8, y + 12, 2, 2);

    // Flapping Wings
    ctx.fillStyle = "#E02E09";
    if (frame === 0) {
      // Wing UP
      ctx.beginPath();
      ctx.moveTo(x + 16, y + 12);
      ctx.lineTo(x + 24, y);
      ctx.lineTo(x + 28, y + 12);
      ctx.fill();
    } else {
      // Wing DOWN
      ctx.beginPath();
      ctx.moveTo(x + 16, y + 14);
      ctx.lineTo(x + 24, y + 26);
      ctx.lineTo(x + 28, y + 14);
      ctx.fill();
    }
  }

  function drawDino(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    isGrounded: boolean,
    isDucking: boolean,
    legFrame: number,
    isDead: boolean
  ) {
    ctx.fillStyle = "#521D0E";

    if (isDucking && isGrounded) {
      // Ducking Dino Sprite
      ctx.fillRect(x, y + 12, 50, 18); // Long body
      ctx.fillRect(x + 44, y + 6, 15, 16); // Head lowered
      // Eye
      ctx.fillStyle = isDead ? "#EA3412" : "#FFF";
      ctx.fillRect(x + 52, y + 8, 3, 3);

      // Ducking Legs
      ctx.fillStyle = "#521D0E";
      if (legFrame === 0) {
        ctx.fillRect(x + 12, y + 30, 6, 6);
      } else {
        ctx.fillRect(x + 32, y + 30, 6, 6);
      }
      return;
    }

    // Classic Standing / Running Dino Pixel Construction
    // Head & Snout
    ctx.fillRect(x + 22, y, 22, 14);
    ctx.fillRect(x + 32, y + 10, 12, 4); // Mouth upper
    ctx.fillRect(x + 26, y + 14, 18, 4); // Mouth open/lower

    // Eye
    ctx.fillStyle = isDead ? "#EA3412" : "#FFF";
    if (isDead) {
      // X Eye
      ctx.fillRect(x + 26, y + 3, 2, 2);
      ctx.fillRect(x + 28, y + 5, 2, 2);
      ctx.fillRect(x + 26, y + 7, 2, 2);
    } else {
      ctx.fillRect(x + 26, y + 3, 4, 4);
    }

    // Neck & Body
    ctx.fillStyle = "#521D0E";
    ctx.fillRect(x + 18, y + 14, 12, 12);
    ctx.fillRect(x + 10, y + 22, 22, 16);

    // Tiny T-Rex Arms
    ctx.fillRect(x + 32, y + 24, 6, 3);
    ctx.fillRect(x + 36, y + 27, 2, 4);

    // Tail
    ctx.fillRect(x, y + 24, 10, 8);
    ctx.fillRect(x + 2, y + 20, 6, 6);

    // Legs
    if (!isGrounded) {
      // Jumping: legs together
      ctx.fillRect(x + 14, y + 38, 4, 7);
      ctx.fillRect(x + 22, y + 38, 4, 7);
      ctx.fillRect(x + 14, y + 45, 7, 2);
      ctx.fillRect(x + 22, y + 45, 7, 2);
    } else if (legFrame === 0) {
      // Leg 1 down, Leg 2 back
      ctx.fillRect(x + 14, y + 38, 4, 9);
      ctx.fillRect(x + 14, y + 45, 7, 2); // Foot
      ctx.fillRect(x + 24, y + 38, 4, 5); // Raised knee
    } else {
      // Leg 1 back, Leg 2 down
      ctx.fillRect(x + 14, y + 38, 4, 5); // Raised knee
      ctx.fillRect(x + 24, y + 38, 4, 9);
      ctx.fillRect(x + 24, y + 45, 7, 2); // Foot
    }
  }

  return (
    <div className="w-full relative">
      {/* Arcade Housing Console */}
      <div className="relative rounded-3xl bg-[#3B1408]/95 backdrop-blur-2xl border-2 border-white/25 shadow-[0_20px_50px_rgba(59,20,8,0.4)] p-4 sm:p-6 lg:p-7 text-white overflow-hidden">
        
        {/* Subtle Ambient Light Glow inside the console */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-[#FE3912]/20 to-transparent blur-3xl rounded-full" 
        />

        {/* Console Header Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/15">
          
          {/* Title & Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FE3912] to-[#B32607] flex items-center justify-center shadow-md border border-white/30 text-lg">
              🦖
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight">
                  T-Rex Game — Google Dino Run
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Interactive Easter Egg
                </span>
              </div>
              <p className="text-xs text-orange-200/80 font-medium">
                Take a quick break while our architects prepare your project quote!
              </p>
            </div>
          </div>

          {/* Score Counter & Sound Controls */}
          <div className="flex items-center gap-3">
            {/* High Score Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-orange-200/70 font-semibold">HI:</span>
              <span className="font-extrabold text-amber-300">
                {highScore.toString().padStart(5, "0")}
              </span>
            </div>

            {/* Current Score */}
            <div className="px-3.5 py-1.5 rounded-xl bg-[#FE3912]/25 border border-[#FE3912]/40 text-xs font-mono font-bold tracking-wider text-white">
              SCORE: <span className="text-amber-300">{score.toString().padStart(5, "0")}</span>
            </div>

            {/* Audio Toggle Button */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-orange-200 hover:text-white transition-all"
              title={soundEnabled ? "Mute Game Audio" : "Enable Game Audio"}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-green-300" />
              ) : (
                <VolumeX className="w-4 h-4 text-white/50" />
              )}
            </button>
          </div>
        </div>

        {/* Canvas Display Screen */}
        <div 
          onClick={jump}
          className="relative mt-4 rounded-2xl bg-gradient-to-b from-[#FCE8DB] via-[#FBDBC6] to-[#F9D0B4] border-2 border-white/30 shadow-inner overflow-hidden cursor-pointer select-none touch-none"
        >
          <canvas
            ref={canvasRef}
            width={800}
            height={200}
            tabIndex={0}
            className="w-full h-auto block aspect-[4/1] min-h-[170px] max-h-[220px] outline-none touch-none select-none"
          />

          {/* IDLE OVERLAY: Click to start prompt */}
          {!isPlaying && !isGameOver && (
            <div 
              onClick={(e) => {
                e.stopPropagation();
                startGame();
              }}
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 transition-opacity"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  (e.currentTarget as HTMLElement).blur();
                  startGame();
                }}
                className="w-14 h-14 rounded-2xl bg-[#FE3912] hover:bg-[#E02E09] text-white flex items-center justify-center shadow-xl border-2 border-white/40 transform hover:scale-110 active:scale-95 transition-all outline-none"
                aria-label="Start Game"
              >
                <Play className="w-7 h-7 ml-1 fill-white" />
              </button>
              <div className="text-center">
                <p className="text-sm sm:text-base font-extrabold text-[#521D0E] uppercase tracking-wider drop-shadow-xs">
                  Press SPACE or Tap Anywhere to Run
                </p>
                <p className="text-xs text-[#521D0E]/80 font-medium">
                  Jump over cacti & avoid flying pterodactyls!
                </p>
              </div>
            </div>
          )}

          {/* GAME OVER OVERLAY */}
          {isGameOver && (
            <div 
              onClick={(e) => {
                e.stopPropagation();
                resetGame();
              }}
              className="absolute inset-0 bg-[#3B1408]/75 backdrop-blur-xs flex flex-col items-center justify-center gap-3 animate-fade-in"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-widest uppercase font-mono drop-shadow-md">
                G A M E &nbsp; O V E R
              </span>
              <p className="text-xs sm:text-sm text-orange-200 font-semibold font-mono">
                FINAL SCORE: <span className="text-amber-300 font-bold">{score}</span>
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  (e.currentTarget as HTMLElement).blur();
                  resetGame();
                }}
                className="mt-1 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FE3912] to-[#B32607] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all outline-none"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>
            </div>
          )}
        </div>

        {/* Console Footer & Keyboard Controls Guide */}
        <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-orange-200/90 font-medium pt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-amber-300" />
            <span>
              <strong>Controls:</strong> Press <kbd className="px-1.5 py-0.5 rounded bg-white/15 border border-white/20 font-mono text-[10px]">SPACE</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-white/15 border border-white/20 font-mono text-[10px]">↑</kbd> to Jump &bull; <kbd className="px-1.5 py-0.5 rounded bg-white/15 border border-white/20 font-mono text-[10px]">↓</kbd> to Duck &bull; Tap on Mobile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-[11px] font-mono">
              60 FPS HTML5 Engine &bull; Zero Server Lag
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
