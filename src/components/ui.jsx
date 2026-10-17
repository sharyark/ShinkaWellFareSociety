import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaHandsHelping, FaChevronRight } from 'react-icons/fa';

export function PageHero({ title, subtitle, image, crumbs = [], children }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      {image && <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950/90 via-brand-900/80 to-brand-700/60" />
      <div className="container-x py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-brand-100/80">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <React.Fragment key={c.name}>
              <FaChevronRight className="text-[8px]" aria-hidden />
              {c.to ? <Link to={c.to} className="hover:text-white">{c.name}</Link> : <span className="text-white">{c.name}</span>}
            </React.Fragment>
          ))}
        </nav>
        <h1 className="max-w-3xl animate-fade-up text-3xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-brand-100">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-gold-500 ${center ? 'mx-auto' : ''}`} />
      {text && <p className="mt-4 text-slate-600">{text}</p>}
    </div>
  );
}

export function DonateBanner({ title = 'Your donation reaches the people who need it', text = 'We follow a 100% donation policy: every rupee goes straight to our programs.' }) {
  return (
    <section className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-800 to-brand-600 px-6 py-12 text-center text-white shadow-soft sm:px-12">
        <FaHeart className="absolute -right-6 -top-6 text-[10rem] text-white/5" aria-hidden />
        <h2 className="relative text-2xl font-extrabold !text-white sm:text-3xl">{title}</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-brand-100">{text}</p>
        <div className="relative mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/donate" className="btn-primary"><FaHeart aria-hidden /> Donate now</Link>
          <Link to="/joinus" className="btn-ghost"><FaHandsHelping aria-hidden /> Volunteer with us</Link>
        </div>
      </div>
    </section>
  );
}

export function LangToggle({ lang, setLang }) {
  return (
    <div className="inline-flex rounded-full bg-slate-200 p-1 text-sm font-semibold" role="group" aria-label="Language">
      {[['en', 'English'], ['ur', 'اردو']].map(([k, label]) => (
        <button
          key={k}
          onClick={() => setLang(k)}
          aria-pressed={lang === k}
          className={`rounded-full px-4 py-1.5 transition ${lang === k ? 'bg-white text-brand-800 shadow' : 'text-slate-600'}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
