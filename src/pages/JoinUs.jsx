import { Link } from 'react-router-dom';
import { FaHandsHelping, FaPhoneAlt, FaFacebookF, FaYoutube, FaHeart, FaUsers } from 'react-icons/fa';
import { PageHero } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { SITE, galleryImages } from '../data/site';

const ways = [
  { icon: FaHandsHelping, title: 'Volunteer', text: 'Give your time to cleanliness drives, food distribution and community events.' },
  { icon: FaHeart, title: 'Donate', text: 'Fund an ambulance trip, a student\'s education or a family\'s Ramadan package.' },
  { icon: FaUsers, title: 'Become a member', text: 'Join the volunteers who steer our programs and keep our books open.' },
];

export default function JoinUs() {
  usePageMeta('Join Us', 'Volunteer, donate or become a member of Shinka Welfare Society.');

  return (
    <>
      <PageHero title="Join Us" subtitle="We are always looking for passionate people to join our mission." image={galleryImages.sweepAlley} crumbs={[{ name: 'Join Us' }]} />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {ways.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-8 text-center">
              <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-2xl text-white shadow-lg"><Icon aria-hidden /></span>
              <h2 className="text-xl">{title}</h2>
              <p className="mt-3 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="card mx-auto mt-14 max-w-3xl p-8 text-center sm:p-12">
          <h2 className="text-2xl">Get in touch</h2>
          <p className="mt-3 text-slate-600">Whether you want to volunteer, donate or become a member, your contribution makes a real difference. Call us:</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {SITE.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="btn-green"><FaPhoneAlt aria-hidden /> {p.display}</a>
            ))}
          </div>
          <p className="mb-4 mt-8 text-slate-600">Stay updated with our latest activities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="btn bg-[#1877F2] text-white hover:brightness-95"><FaFacebookF aria-hidden /> Facebook</a>
            <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="btn bg-[#FF0000] text-white hover:brightness-95"><FaYoutube aria-hidden /> YouTube</a>
          </div>
          <Link to="/" className="mt-8 inline-block text-sm font-semibold text-brand-700 hover:underline">← Back to home</Link>
        </div>
      </section>
    </>
  );
}
