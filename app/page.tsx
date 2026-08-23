'use client';

import * as React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

type Perspective = 'leadership' | 'engineering';

const leadershipPrinciples = [
  {
    title: 'High-Trust Autonomy',
    body: 'Setting clear context and guardrails, then getting out of the way.',
  },
  {
    title: 'Velocity via Quality',
    body: 'Release automation and reliable CI/CD as the foundation for fast shipping.',
  },
  {
    title: 'Scalable Team Topology',
    body: 'Aligning team ownership directly with core platform architecture.',
  },
];

const engineeringHighlights = [
  {
    title: 'Infrastructure & Delivery',
    body: 'Scaled automated deployment systems and CI/CD for 100+ microservices.',
  },
  {
    title: 'Platform Reliability',
    body: 'Data ingestion pipelines, distributed systems, and access management.',
  },
  {
    title: 'Compliance as Code',
    body: 'Automated compliance tooling bridging security architecture and regulatory audits.',
  },
];

const experience = [
  {
    company: 'CrowdStrike',
    role: 'Engineering Manager',
    dates: 'Feb 2024 – Present',
    scope: 'Leading platform teams building core infrastructure and high-velocity tooling.',
  },
  {
    company: 'HubSpot',
    role: 'Senior Software Engineer',
    dates: 'May 2019 – Feb 2024',
    scope: 'Led cross-team delivery infrastructure and high-scale automated release systems.',
  },
  {
    company: 'VSware',
    role: 'Software Engineer',
    dates: 'Jan 2018 – May 2019',
    scope: 'Built multi-tenant core SaaS features, administrative workflows, and access controls.',
  },
  {
    company: 'VigiTrust',
    role: 'Application Developer',
    dates: 'Aug 2016 – Oct 2017',
    scope: 'Engineered automated compliance frameworks for GDPR, PCI DSS, and HIPAA.',
  },
];

const currently = [
  {
    label: 'Reading',
    body: "Bulgakov's The Master and Margarita (trying to make sense of the talking cat).",
  },
  {
    label: 'Off the Clock',
    body: 'Playing football 3x/week, occasional padel, and daily chess puzzles that refuse to improve my rating.',
  },
  {
    label: 'Gear',
    body: 'Over-tweaking a Keychron K3 low-profile mechanical keyboard.',
  },
];

const links = [
  { label: 'LinkedIn', value: '/in/eointraynor', href: 'https://www.linkedin.com/in/eointraynor' },
  { label: 'GitHub', value: 'github.com/EoinTraynor', href: 'https://github.com/EoinTraynor' },
  { label: 'Email', value: 'eointraynor1@gmail.com', href: 'mailto:eointraynor1@gmail.com' },
];

export default function Home() {
  const [perspective, setPerspective] = React.useState<Perspective>('leadership');

  const principles =
    perspective === 'leadership' ? leadershipPrinciples : engineeringHighlights;

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
        {/* Theme toggle */}
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-2xl font-semibold tracking-tight">Eoin Traynor</h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-zinc-600 dark:text-zinc-400">
              Engineering Manager at CrowdStrike
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Berlin, Germany
            </span>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
            Engineering leader focused on team velocity, resilient cloud
            infrastructure, and enterprise platforms. Ex-HubSpot, currently
            leading platform teams at CrowdStrike.
          </p>
        </header>

        {/* Divider */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800" />

        {/* Perspective toggle */}
        <section className="mt-10">
          <div className="inline-flex rounded-full border border-zinc-200 p-1 dark:border-zinc-800">
            {(['leadership', 'engineering'] as const).map((key) => {
              const active = perspective === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPerspective(key)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {key === 'leadership' ? 'Leadership' : 'Engineering Roots'}
                </button>
              );
            })}
          </div>

          <div key={perspective} className="tab-fade mt-7 space-y-5">
            {principles.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800" />

        {/* Experience timeline */}
        <section className="mt-10">
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Experience
          </h2>
          <div className="mt-6 space-y-7">
            {experience.map((job) => (
              <div key={job.company} className="group">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100">
                    {job.company}{' '}
                    <span className="font-normal text-zinc-500 dark:text-zinc-400">
                      — {job.role}
                    </span>
                  </h3>
                  <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
                    {job.dates}
                  </span>
                </div>
                <p className="mt-1 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {job.scope}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800" />

        {/* Currently ledger */}
        <section className="mt-10">
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Currently
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 sm:grid-cols-2">
            {currently.map((item) => (
              <div
                key={item.label}
                className="bg-white p-5 dark:bg-zinc-950"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {item.label}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800" />

        {/* Footer links */}
        <footer className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </footer>

        <p className="mt-10 text-xs text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Eoin Traynor
        </p>
      </div>
    </main>
  );
}
