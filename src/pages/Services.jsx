import { PageHero, DonateBanner } from '../components/ui';
import ServiceCard from '../components/ServiceCard';
import usePageMeta from '../hooks/usePageMeta';
import { SERVICES, galleryImages } from '../data/site';

export default function Services() {
  usePageMeta('Our Services', 'Ambulance, filtered water, cleanliness, food, education, burial, security, Eid-ul-Adha and marriage support in Shinka.');

  return (
    <>
      <PageHero title="Our Services" subtitle="Nine programs, one purpose: looking after every family in Shinka." image={galleryImages.sweepShutters} crumbs={[{ name: 'Services' }]} />
      <section className="container-x py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <DonateBanner />
    </>
  );
}
