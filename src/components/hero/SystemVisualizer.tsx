"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Activity,
  ShieldCheck,
  Server,
  Cpu,
  Wifi,
  CheckCircle2,
  Lock,
  Layers,
  ArrowUpRight,
} from "lucide-react";

type ActiveTab = "orchestrator" | "telemetry" | "security";

export const SystemVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("orchestrator");
  const [latency, setLatency] = useState(12);
  const [throughput, setThroughput] = useState(14820);
  const [activeNode, setActiveNode] = useState(0);

  // Dynamic telemetry simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => Math.max(8, Math.min(18, prev + (Math.random() > 0.5 ? 1 : -1))));
      setThroughput((prev) => Math.round(prev + (Math.random() - 0.5) * 120));
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: "us-east-1", label: "Virginia Core", load: 38, status: "Optimal" },
    { id: "eu-central-1", label: "Frankfurt Edge", load: 52, status: "Optimal" },
    { id: "ap-southeast-1", label: "Singapore Mesh", load: 44, status: "Optimal" },
    { id: "sa-east-1", label: "São Paulo Relay", load: 29, status: "Optimal" },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-glass-lg overflow-hidden group">
      {/* Specular Top Reflection */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" 
      />

      {/* Terminal Title Bar */}
      <header className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50/80">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5" aria-label="Terminal window controls">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
          </div>
          <span className="h-3 w-[1px] bg-slate-300 mx-1" />
          <span className="font-mono text-xs text-slate-600 font-medium tracking-wide flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-accent-cyan" />
            mesh-cluster-v4.og-infra.net
          </span>
        </div>

        {/* Tab Switcher */}
        <nav className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-lg border border-slate-300/50" aria-label="Visualizer view options">
          <button
            onClick={() => setActiveTab("orchestrator")}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === "orchestrator"
                ? "bg-white text-accent-cyan font-semibold shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            API
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === "telemetry"
                ? "bg-white text-accent-cyan font-semibold shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Nodes
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
              activeTab === "security"
                ? "bg-white text-accent-cyan font-semibold shadow-xs border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Security
          </button>
        </nav>
      </header>

      {/* Main Interactive Screen */}
      <div className="p-5 font-mono text-xs min-h-[340px] flex flex-col justify-between bg-white">
        {activeTab === "orchestrator" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-slate-700 border-b border-slate-100 pb-2">
              <span className="flex items-center gap-2 text-accent-cyan font-semibold">
                <Terminal className="w-4 h-4 text-accent-cyan" />
                POST /api/v2/autonomous/deploy
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                200 OK — {latency}ms
              </span>
            </div>

            {/* Enterprise High-Contrast Code Panel */}
            <div className="space-y-1 text-slate-200 bg-[#0B0F17] p-4 rounded-xl border border-slate-800 shadow-inner overflow-x-auto">
              <p className="text-slate-400">// Zero-Trust Autonomous Deployment Payload</p>
              <p>
                <span className="text-indigo-400">const</span> orchestrator ={" "}
                <span className="text-cyan-400">new</span> OGCloudMesh({`{`}
              </p>
              <p className="pl-4">
                region: <span className="text-amber-300">&quot;global-multi-tier&quot;</span>,
              </p>
              <p className="pl-4">
                failoverPolicy: <span className="text-emerald-400">&quot;instant-sub-10ms&quot;</span>,
              </p>
              <p className="pl-4">
                encryption: <span className="text-emerald-400">&quot;AES-256-GCM + mTLS&quot;</span>,
              </p>
              <p className="pl-4">
                edgeReplicas: <span className="text-cyan-400">64</span>,
              </p>
              <p className="pl-4">
                autonomousHealing: <span className="text-cyan-400">true</span>
              </p>
              <p>{`}`});</p>
              <p className="pt-2 text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Sync verified across 18 edge datacenters (Zero packet drop)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Dynamic Throughput</span>
                <span className="text-slate-900 font-bold">{throughput.toLocaleString()} req/s</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Consensus State</span>
                <span className="text-accent-cyan font-bold">100% Synced</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "telemetry" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-slate-700 border-b border-slate-100 pb-2">
              <span className="flex items-center gap-1.5 text-accent-cyan font-semibold">
                <Activity className="w-4 h-4" />
                Distributed Node Telemetry
              </span>
              <span className="text-[11px] text-slate-500">Live Heartbeat: 2.4s</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {nodes.map((node, index) => {
                const isSelected = activeNode === index;
                return (
                  <div
                    key={node.id}
                    className={`p-3 rounded-xl border transition-all ${
                      isSelected
                        ? "bg-sky-50/80 border-sky-300 shadow-xs"
                        : "bg-slate-50/70 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">{node.label}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                        {node.status}
                      </span>
                    </div>
                    <div className="mt-2.5 space-y-1">
                      <div className="flex justify-between text-[11px] text-slate-500">
                        <span>Cluster Compute</span>
                        <span className="text-slate-800 font-semibold">{node.load}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-accent-cyan to-accent-azure h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${node.load}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                <Cpu className="w-3.5 h-3.5 text-accent-cyan" /> Total Allocated VCPU
              </span>
              <span className="font-bold text-slate-900">1,024 Cores / 4.2 TB RAM</span>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-slate-700 border-b border-slate-100 pb-2">
              <span className="flex items-center gap-1.5 text-accent-cyan font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Zero-Trust Mesh & Latency Radar
              </span>
              <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[11px] flex items-center gap-1 font-semibold">
                <Lock className="w-3 h-3" /> Shield Active
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-accent-cyan" />
                  <div>
                    <p className="text-slate-900 text-xs font-semibold">Frankfurt IX (Edge 01)</p>
                    <p className="text-slate-500 text-[10px]">WireGuard Layer 3 Tunnel</p>
                  </div>
                </div>
                <span className="text-emerald-700 font-bold">{latency} ms</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-accent-cyan" />
                  <div>
                    <p className="text-slate-900 text-xs font-semibold">Virginia Core (Edge 02)</p>
                    <p className="text-slate-500 text-[10px]">Direct BGP Anycast</p>
                  </div>
                </div>
                <span className="text-emerald-700 font-bold">{latency - 2} ms</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent-violet" />
                  <div>
                    <p className="text-slate-900 text-xs font-semibold">DDoS Mitigator & WAF</p>
                    <p className="text-slate-500 text-[10px]">L7 Anomaly Filtering</p>
                  </div>
                </div>
                <span className="text-accent-cyan font-bold">0 Drop rate</span>
              </div>
            </div>
          </div>
        )}

        {/* Live Footer Status Bar */}
        <footer className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-800 font-semibold">Global Ingress: Online</span>
          </div>
          <span className="text-slate-600 flex items-center gap-1 font-mono">
            TLS 1.3 | Quantum-Resistant Spec
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </span>
        </footer>
      </div>
    </div>
  );
};
