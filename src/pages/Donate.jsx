import { FaPhoneAlt, FaWhatsapp, FaHeart, FaShieldAlt, FaEye, FaHandHoldingHeart } from 'react-icons/fa';
import { PageHero, SectionHeading } from '../components/ui';
import ServiceCard from '../components/ServiceCard';
import usePageMeta from '../hooks/usePageMeta';
import { SITE, SERVICES, DONATION_ACCOUNTS, galleryImages } from '../data/site';

const promises = [
  { icon: FaHandHoldingHeart, title: '100% to programs', text: 'Administrative costs are covered by the society\'s own assets, not your donation.' },
  { icon: FaEye, title: 'Open books', text: 'Monthly income and expenditure reports are published for every donor.' },
  { icon: FaShieldAlt, title: 'Volunteer-run', text: 'No salaries. Every member serves the village voluntarily.' },
];

export default function Donate() {
  usePageMeta('Donate', 'Donate to Shinka Welfare Society. 100% of your donation goes to ambulances, water, education, food and more.');

  return (
    <>
      <PageHero title="Make a Donation" subtitle="Give once and help a family in Shinka today." image={galleryImages.groupEvent} crumbs={[{ name: 'Donate' }]} />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {promises.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-7 text-center">
              <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-xl text-brand-700"><Icon aria-hidden /></span>
              <h2 className="text-lg">{title}</h2>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="How to give" title="Donate to the society" text="Contact us to donate, or to arrange a pickup or a transfer. A member will confirm your donation personally." />

          {DONATION_ACCOUNTS.length > 0 && (
            <div className="mb-10 grid gap-5 sm:grid-cols-2">
              {DONATION_ACCOUNTS.map((a) => (
                <div key={a.method + a.number} className="card p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gold-600">{a.method}</div>
                  <div className="mt-2 font-bold text-slate-900">{a.title}</div>
                  <div className="mt-1 break-all font-mono text-lg text-brand-800">{a.number}</div>
                  {a.note && <div className="mt-1 text-sm text-slate-500">{a.note}</div>}
                </div>
              ))}
            </div>
          )}

          <div className="card bg-gradient-to-br from-brand-50 to-white p-8 text-center sm:p-10">
            <FaHeart className="mx-auto mb-4 text-3xl text-gold-500" aria-hidden />
            <p className="mx-auto max-w-xl text-slate-600">Call or message one of our two lines to donate. We reply to every message.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="btn-green"><FaPhoneAlt aria-hidden /> {p.display}</a>
              ))}
              <a href={`https://wa.me/${SITE.phones[1].whatsapp}?text=${encodeURIComponent('Assalam o Alaikum, I would like to donate to Shinka Welfare Society.')}`} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white shadow-soft hover:brightness-95"><FaWhatsapp aria-hidden /> WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading eyebrow="Where it goes" title="Choose a cause close to your heart" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
    </>
  );
}
