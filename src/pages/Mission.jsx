import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaHandsHelping, FaHeart } from 'react-icons/fa';
import { PageHero, DonateBanner } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { SITE, galleryImages } from '../data/site';

const pillars = [
  { icon: FaBullseye, title: 'Our mission', text: 'To protect the people of Shinka from disaster, violence and hardship, and to give the less fortunate and deserving access to basic life amenities.' },
  { icon: FaEye, title: 'Our vision', text: 'A safe, supportive and thriving community where no one suffers because help was not available in time.' },
  { icon: FaHeart, title: 'Our promise', text: 'A 100% donation policy: every contribution goes directly to programs and services, with accounts published openly.' },
];

export default function Mission() {
  usePageMeta('Our Mission', 'Shinka Welfare Society\'s mission: emergency relief, healthcare, education and poverty alleviation for the people of Shinka.');

  return (
    <>
      <PageHero title="Our Mission" subtitle="Serving the community through dedication, transparency and compassion." image={galleryImages.streetLight} crumbs={[{ name: 'Our Mission' }]} />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-8 text-center">
              <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 text-2xl text-white shadow-lg"><Icon aria-hidden /></span>
              <h2 className="text-xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-slate-600">
            <span className="eyebrow">Why we exist</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Help should never arrive too late</h2>
            <p>
              At Shinka Welfare Society, our mission is to uplift our community through dedicated service and support. Established in {SITE.founded}, we are a non-profit organization committed to emergency relief during natural or man-made disasters, and to long-term healthcare, community support, education and poverty alleviation.
            </p>
            <p>
              Our journey began with a tragic incident that showed the critical need for accessible emergency services in our village. Since then we have grown from a small group of kind-hearted individuals into an organization offering ambulance services, cleanliness drives, school bus services, filtered water, burial funds, educational support, Ramadan food distribution and more.
            </p>
            <p>
              We adhere to a 100% donation policy. Our goal is to provide essential amenities to the poor and less fortunate so they can lead healthier, more secure lives, building a brighter, more equitable future together.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/joinus" className="btn-green"><FaHandsHelping aria-hidden /> Join us</Link>
              <Link to="/service" className="btn-outline">See our services</Link>
            </div>
          </div>
          <img src={galleryImages.sweepAlley} alt="Society sanitation workers cleaning a village lane" className="w-full rounded-3xl object-cover shadow-soft" loading="lazy" />
        </div>
      </section>

      <div className="py-20"><DonateBanner /></div>
    </>
  );
}
