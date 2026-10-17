import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { PageHero } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { SITE, galleryImages } from '../data/site';

export default function Contact() {
  usePageMeta('Contact Us', 'Call, WhatsApp or email Shinka Welfare Society for emergencies, donations or volunteering.');

  const tile = 'card flex flex-col items-center p-8 text-center';
  const iconCls = 'mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-xl text-white shadow-lg';

  return (
    <>
      <PageHero title="Contact Us" subtitle="We are one call away, day or night." image={galleryImages.officeVisit} crumbs={[{ name: 'Contact' }]} />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className={tile}>
            <span className={iconCls}><FaPhoneAlt aria-hidden /></span>
            <h2 className="text-xl">Call us</h2>
            <div className="mt-3 space-y-2">
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="block text-lg font-semibold text-brand-700 hover:underline">
                  {p.display}<span className="block text-xs font-normal text-slate-500">{p.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={tile}>
            <span className={iconCls}><FaEnvelope aria-hidden /></span>
            <h2 className="text-xl">Email</h2>
            <a href={`mailto:${SITE.email}`} className="mt-3 break-all text-lg font-semibold text-brand-700 hover:underline">{SITE.email}</a>
            <p className="mt-2 text-sm text-slate-500">General inquiries and support</p>
          </div>

          <div className={tile}>
            <span className={iconCls}><FaMapMarkerAlt aria-hidden /></span>
            <h2 className="text-xl">Visit</h2>
            <p className="mt-3 text-lg font-semibold text-slate-800">{SITE.location}</p>
            <p className="mt-2 text-sm text-slate-500">Society office, Shinka</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="mb-6 text-2xl">Follow & message us</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`https://wa.me/${SITE.phones[1].whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white shadow-soft hover:brightness-95"><FaWhatsapp aria-hidden /> WhatsApp</a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn bg-[#1877F2] text-white shadow-soft hover:brightness-95"><FaFacebookF aria-hidden /> Facebook</a>
            <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="btn bg-[#FF0000] text-white shadow-soft hover:brightness-95"><FaYoutube aria-hidden /> YouTube</a>
          </div>
        </div>
      </section>
    </>
  );
}
