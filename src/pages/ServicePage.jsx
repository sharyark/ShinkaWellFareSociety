import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { PageHero, LangToggle, DonateBanner } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { getService, SERVICES } from '../data/site';

export default function ServicePage({ slug }) {
  const service = getService(slug);
  const [lang, setLang] = useState('en');
  const hasUrdu = Boolean(service.ur);
  const active = hasUrdu && lang === 'ur' ? 'ur' : 'en';
  const content = service[active];
  const isUr = active === 'ur';
  const Icon = service.icon;

  usePageMeta(service.en.title, service.short);

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero title={service.en.title} subtitle={service.short} image={service.image} crumbs={[{ name: 'Services', to: '/service' }, { name: service.en.title }]} />

      <section className="container-x py-16">
        {hasUrdu && <div className="mb-8 flex justify-end"><LangToggle lang={lang} setLang={setLang} /></div>}

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3" dir={isUr ? 'rtl' : 'ltr'}>
            {isUr && <h2 className="urdu mb-6 text-3xl font-bold">{content.title}</h2>}
            {content.sections.map((sec, idx) => (
              <div key={sec.heading || idx} className={idx ? 'mt-10' : ''}>
                {sec.heading && <h2 className={`mb-4 text-2xl ${isUr ? 'urdu' : ''}`}>{sec.heading}</h2>}
                <div className="space-y-4">
                  {sec.paragraphs.map((p) => (
                    <p key={p} className={isUr ? 'urdu text-lg text-slate-700' : 'text-lg leading-relaxed text-slate-600'}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6 lg:col-span-2">
            {service.image ? (
              <img src={service.image} alt={service.en.title} className="w-full rounded-3xl object-cover shadow-soft" />
            ) : (
              <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br ${service.accent} text-white shadow-soft`} role="img" aria-label={service.en.title}>
                <Icon className="absolute -bottom-8 -right-8 text-[14rem] text-white/10" aria-hidden />
                <Icon className="text-7xl drop-shadow-lg" aria-hidden />
              </div>
            )}
            {service.gallery?.map((g) => (
              <img key={g} src={g} alt={`${service.en.title} in Shinka`} loading="lazy" className="w-full rounded-3xl object-cover shadow-soft" />
            ))}
          </aside>
        </div>

        <div className={`mt-14 grid gap-5 ${service.stats.length > 2 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {service.stats.map((s) => (
            <div key={s.value + s.label} className="card border-t-4 border-gold-500 p-6 text-center" dir={isUr ? 'rtl' : 'ltr'}>
              <div className="text-3xl font-extrabold text-brand-700 sm:text-4xl">{s.value}</div>
              <div className={`mt-1 text-sm text-slate-600 ${isUr ? 'font-urdu' : ''}`}>{isUr ? s.labelUr || s.label : s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl">More of our work</h2>
            <Link to="/service" className="hidden items-center gap-2 text-sm font-semibold text-brand-700 sm:inline-flex">All services <FaArrowRight aria-hidden /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((s) => {
              const OIcon = s.icon;
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="group flex items-center gap-4 rounded-2xl bg-slate-50 p-5 transition hover:bg-brand-50">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.accent} text-white`}><OIcon aria-hidden /></span>
                  <span className="font-semibold text-slate-800">{s.en.title}</span>
                  <FaArrowRight className="ml-auto text-brand-600 transition group-hover:translate-x-1" aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="py-16"><DonateBanner /></div>
    </>
  );
}
