import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaArrowRight, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import CountUp from '../components/CountUp';
import { SectionHeading, DonateBanner } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { SERVICES, IMPACT, SITE, homeGallery, galleryImages } from '../data/site';

const values = [
  '100% of donations go to programs',
  'Run by volunteers, no salaries',
  'Non-political and non-profit',
  'Monthly accounts published online',
];

export default function Home() {
  usePageMeta('', 'Shinka Welfare Society: free ambulances, filtered water, education, food, burial and marriage support for village Shinka. 100% donation policy.');

  return (
    <>
      <HeroSlider />

      {/* emergency strip */}
      <section className="container-x relative z-10 -mt-10">
        <div className="card flex flex-col items-center justify-between gap-5 p-6 md:flex-row md:p-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl">Need help? Reach us any time.</h2>
            <p className="text-sm text-slate-600">Our emergency lines are open 24 hours a day.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${SITE.phones[0].tel}`} className="btn-green"><FaPhoneAlt aria-hidden /> {SITE.phones[0].display}</a>
            <a href={`https://wa.me/${SITE.phones[1].whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white shadow-soft hover:-translate-y-0.5 hover:brightness-95"><FaWhatsapp aria-hidden /> WhatsApp {SITE.phones[1].display}</a>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className="relative">
          <img src={galleryImages.groupEvent} alt="Members and elders of Shinka gathered at a society event" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" loading="lazy" />
          <img src={galleryImages.awardOne} alt="Society members presenting a commemorative shield" className="absolute -bottom-8 -right-3 hidden w-44 rounded-2xl border-4 border-slate-50 object-cover shadow-soft sm:block lg:-right-8 lg:w-56" loading="lazy" />
          <div className="absolute left-3 top-6 rounded-2xl bg-gold-500 px-5 py-3 text-brand-950 shadow-soft">
            <div className="text-3xl font-extrabold">{new Date().getFullYear() - SITE.founded}+</div>
            <div className="text-xs font-semibold uppercase tracking-wider">years of service</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">About our trust</span>
          <h2 className="text-3xl font-extrabold sm:text-4xl">A village that decided to look after its own</h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            <strong className="text-slate-900">Shinka Welfare Society</strong> is a non-profit charity registered in {SITE.founded}. It began with a few kind-hearted villagers who wanted a proper ambulance for Shinka, and has grown into healthcare, clean water, sanitation, education, food and dignity programs for the whole community.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our mission is to protect the people of Shinka from disaster, violence and hardship, and to make sure the less fortunate have access to basic amenities.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-2.5 text-sm font-medium text-slate-700"><FaCheckCircle className="mt-0.5 shrink-0 text-brand-600" aria-hidden />{v}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="btn-green">Read our story <FaArrowRight aria-hidden /></Link>
            <Link to="/history" className="btn-outline">Our history</Link>
          </div>
        </div>
      </section>

      {/* impact */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-16 text-white">
        <div className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {IMPACT.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-gold-400 sm:text-5xl"><CountUp value={s.value} suffix={s.suffix} /></div>
              <div className="mt-2 text-sm font-medium text-brand-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* services */}
      <section className="container-x py-20">
        <SectionHeading eyebrow="What we do" title="Our services" text="From emergencies to everyday needs, every program is funded by the community and published openly." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/service" className="btn-outline">See all {SERVICES.length} services <FaArrowRight aria-hidden /></Link>
        </div>
      </section>

      {/* gallery */}
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title="Moments from our work" text="Real volunteers, real streets, real change in Shinka." />
          <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4">
            {homeGallery.map((g) => (
              <figure key={g.alt} className={`group relative overflow-hidden rounded-2xl ${g.span || ''}`}>
                <img src={g.image} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white opacity-0 transition group-hover:opacity-100">{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* quote */}
      <section className="container-x py-20">
        <figure className="mx-auto max-w-3xl text-center">
          <FaQuoteLeft className="mx-auto text-4xl text-gold-500" aria-hidden />
          <blockquote className="mt-5 text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
            Our members are truthful, honest and dedicated, working voluntarily without any salary, so that charity is used effectively and the poor are helped in an organized manner.
          </blockquote>
          <figcaption className="mt-5 text-sm font-semibold text-brand-700">Shinka Welfare Society</figcaption>
        </figure>
      </section>

      <DonateBanner />
    </>
  );
}
