"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GREEN = "#bfd633";
const BLUE = "#2ec4f3";

const accentFor = (index) => (index % 2 === 0 ? GREEN : BLUE);

const thumbBg = (accent) =>
  accent === GREEN
    ? "repeating-linear-gradient(135deg,#eef4d6 0 13px,#f8fbed 13px 26px)"
    : "repeating-linear-gradient(135deg,#dcf2fb 0 13px,#eefafd 13px 26px)";

export default function AllPortfolio({ projects = [] }) {
  const [industryFilter, setIndustryFilter] = useState([]);
  const [stackFilter, setStackFilter] = useState([]);
  const [openId, setOpenId] = useState(null);
  const closeBtnRef = useRef(null);

  const industries = useMemo(
    () => [...new Set(projects.map((p) => p.industry))],
    [projects],
  );
  const stacks = useMemo(
    () => [...new Set(projects.flatMap((p) => p.stacks))].sort(),
    [projects],
  );

  const accentById = useMemo(() => {
    const map = {};
    projects.forEach((p, i) => (map[p.id] = accentFor(i)));
    return map;
  }, [projects]);

  const toggle = (setter) => (name) =>
    setter((cur) =>
      cur.includes(name) ? cur.filter((x) => x !== name) : [...cur, name],
    );

  const filtered = projects.filter(
    (p) =>
      (industryFilter.length === 0 || industryFilter.includes(p.industry)) &&
      (stackFilter.length === 0 ||
        p.stacks.some((s) => stackFilter.includes(s))),
  );

  const chips = [
    ...industryFilter.map((name) => ({
      name,
      accent: GREEN,
      remove: () => toggle(setIndustryFilter)(name),
    })),
    ...stackFilter.map((name) => ({
      name,
      accent: BLUE,
      remove: () => toggle(setStackFilter)(name),
    })),
  ];
  const hasFilters = chips.length > 0;
  const clearFilters = () => {
    setIndustryFilter([]);
    setStackFilter([]);
  };

  const openProject = projects.find((p) => p.id === openId) || null;

  // Lock scroll + Escape to close + focus close button
  useEffect(() => {
    if (openId == null) return;
    const onKey = (e) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => closeBtnRef.current?.focus(), 40);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [openId]);

  const FilterPill = ({ active, accent, children, onClick }) => (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className="rounded-full px-4 py-2 text-[13.5px] leading-none font-medium transition-all duration-150 border cursor-pointer"
      style={
        active
          ? {
              background: accent,
              borderColor: accent,
              color: accent === GREEN ? "#2b3107" : "#053744",
              fontWeight: 600,
            }
          : { background: "#fff", borderColor: "#e3e7d9", color: "#5b6270" }
      }
    >
      {children}
    </button>
  );

  return (
    <section id="work" className="top-bottom bg-[#f1f1f1] scroll-mt-6">
      <div className="container mx-auto px-4">
        {/* Filter bar */}
        <div className="bg-white border border-[#ecefe4] rounded-2xl p-6 mb-9 shadow-sm">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#9aa275] min-w-[84px]">
              Industry
            </span>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((name) => (
                <FilterPill
                  key={name}
                  active={industryFilter.includes(name)}
                  accent={GREEN}
                  onClick={() => toggle(setIndustryFilter)(name)}
                >
                  {name}
                </FilterPill>
              ))}
            </div>
          </div>

          <div className="flex items-baseline gap-3 pt-3.5 border-t border-[#f1f3ea]">
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7ec3d8] min-w-[84px]">
              Tech stack
            </span>
            <div className="flex flex-wrap gap-2.5">
              {stacks.map((name) => (
                <FilterPill
                  key={name}
                  active={stackFilter.includes(name)}
                  accent={BLUE}
                  onClick={() => toggle(setStackFilter)(name)}
                >
                  {name}
                </FilterPill>
              ))}
            </div>
          </div>

          {hasFilters && (
            <div className="flex items-center flex-wrap gap-2 mt-4 pt-4 border-t border-[#f1f3ea]">
              <span className="text-[13px] text-gray-400 mr-0.5">Active:</span>
              {chips.map((chip) => (
                <button
                  key={chip.name}
                  type="button"
                  onClick={chip.remove}
                  aria-label={`Remove ${chip.name} filter`}
                  className="inline-flex items-center gap-1.5 rounded-full pl-3 pr-2 py-1.5 text-[13px] font-semibold cursor-pointer border"
                  style={{
                    background: `${chip.accent}1f`,
                    borderColor: `${chip.accent}66`,
                    color: chip.accent === GREEN ? "#586610" : "#0b6a82",
                  }}
                >
                  {chip.name}
                  <span
                    aria-hidden="true"
                    className="text-sm leading-none opacity-75"
                  >
                    ✕
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={clearFilters}
                className="ml-1 text-[13px] font-semibold text-gray-600 underline underline-offset-[3px] hover:text-gray-900 cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* No results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#d8ddca] rounded-2xl text-gray-500">
            <p className="mb-2 text-lg font-semibold text-gray-900">
              No projects match those filters
            </p>
            <p className="mb-4 text-[15px]">
              Try removing a filter to widen your search.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="bg-gray-900 text-white rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => {
              const accent = accentById[p.id];
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setOpenId(p.id)}
                  aria-label={`Open ${p.title} portfolio detail`}
                  className="group block w-full text-left border border-[#ecefe4] rounded-2xl overflow-hidden bg-white cursor-pointer shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-[#dde3d0] transition-all duration-200"
                >
                  <div
                    className="relative aspect-[2/1] flex items-center justify-center border-b border-[#eef0e7]"
                    style={
                      p.image
                        ? {
                            background: `#f2f4ea url("${p.image}") center/cover no-repeat`,
                          }
                        : { background: thumbBg(accent) }
                    }
                  >
                    {!p.image && (
                      <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-2 bg-white/85 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.04em] text-gray-900">
                        <span
                          className="w-[7px] h-[7px] rounded-full"
                          style={{ background: accent }}
                        />
                        {p.industry}
                      </span>
                    )}
                    {!p.image && (
                      <span className="font-mono text-[12px] text-[#8a9072] tracking-[0.02em]">
                        {p.thumbLabel}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold tracking-[-0.01em] text-gray-900">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 mb-4 text-sm text-[#5b6270] leading-snug min-h-[40px]">
                      {p.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stacks.map((tech) => (
                        <span
                          key={tech}
                          className="text-[12px] font-medium text-[#43607a] bg-[#eef6fb] border border-[#dcedf6] px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {openProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${openProject.title} portfolio detail`}
            onClick={() => setOpenId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#0c1006]/60 backdrop-blur-sm flex items-start justify-center p-5 sm:p-10 overflow-y-auto"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.2, 0.8, 0.25, 1] }}
              className="relative w-full max-w-[780px] bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Close portfolio detail"
                className="absolute top-4 right-4 z-[2] w-10 h-10 rounded-full bg-white/90 text-gray-900 text-lg flex items-center justify-center shadow-md hover:bg-white hover:rotate-90 transition-transform cursor-pointer"
              >
                ✕
              </button>

              {openProject.image ? (
                <div className="relative border-b border-[#eef0e7] ">
                  <img
                    src={openProject.image}
                    alt={`${openProject.title} banner`}
                    className="block w-full h-[360px] object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  className="relative h-[230px] flex items-center justify-center border-b border-[#eef0e7]"
                  style={{ background: thumbBg(accentById[openProject.id]) }}
                >
                  <span className="absolute left-7 bottom-6 inline-flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full text-[12px] font-semibold text-gray-900">
                    <span
                      className="w-[7px] h-[7px] rounded-full"
                      style={{ background: accentById[openProject.id] }}
                    />
                    {openProject.industry}
                  </span>
                  <span className="font-mono text-[13px] text-[#8a9072]">
                    {openProject.thumbLabel}
                  </span>
                </div>
              )}

              <div className="px-6 sm:px-8 pt-7 pb-10">
                <h2 className="text-[clamp(26px,4vw,34px)] font-bold tracking-[-0.02em] leading-[1.08] mb-1.5">
                  {openProject.title}
                </h2>
                <p className="text-base text-[#5b6270] leading-relaxed mb-2">
                  {openProject.tagline}
                </p>
                <p className="text-[13px] font-medium text-[#9aa275] tracking-[0.02em] mb-4">
                  Services — {openProject.services}
                </p>

                {openProject.url && (
                  <a
                    href={openProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-7 bg-gray-900 text-white no-underline px-4 py-2.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-transform"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: GREEN,
                        boxShadow: "0 0 0 4px rgba(191,214,51,.25)",
                      }}
                    />
                    Visit live site
                    <span className="opacity-55 font-normal">
                      {openProject.url
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[15px] leading-none"
                    >
                      ↗
                    </span>
                  </a>
                )}

                <div className="mb-7">
                  <h4 className="mb-3 text-[12px] font-bold tracking-[0.13em] uppercase text-[#9aa275]">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {openProject.stacks.map((tech) => (
                      <span
                        key={tech}
                        className="text-[13px] font-medium text-gray-900 bg-[#f5f8ec] border border-[#e4ecca] px-3 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <DetailBlock
                  bar={GREEN}
                  title="Problem"
                  text={openProject.problem}
                />
                <DetailBlock
                  bar={BLUE}
                  title="Solution"
                  text={openProject.solution}
                />
                <DetailBlock
                  gradient
                  title="Product Description"
                  text={openProject.description}
                />

                <div className="mt-7 pt-6 border-t border-[#eef0e7]">
                  <h4 className="mb-3.5 text-[12px] font-bold tracking-[0.13em] uppercase text-[#9aa275]">
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {openProject.results.map((r) => (
                      <div
                        key={r.label}
                        className="bg-[#f7faec] border border-[#eef0e7] rounded-2xl py-4.5 px-3 text-center"
                      >
                        <div className="text-[27px] font-bold tracking-[-0.01em] text-gray-900">
                          {r.value}
                        </div>
                        <div className="text-[12.5px] text-[#5b6270] mt-1 leading-tight">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DetailBlock({ bar, gradient, title, text }) {
  return (
    <div className="mb-6">
      <h4 className="mb-2.5 text-[15px] font-bold text-gray-900 flex items-center gap-2.5">
        <span
          className="w-[18px] h-[3px] rounded"
          style={{
            background: gradient
              ? `linear-gradient(90deg,${GREEN},${BLUE})`
              : bar,
          }}
        />
        {title}
      </h4>
      <p className="text-base leading-relaxed text-[#3a4150]">{text}</p>
    </div>
  );
}
