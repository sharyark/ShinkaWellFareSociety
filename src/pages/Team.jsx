import { PageHero, SectionHeading, DonateBanner } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { TEAM, galleryImages } from '../data/site';

export default function Team() {
  usePageMeta('Our Team', 'Meet the volunteers who lead Shinka Welfare Society.');

  return (
    <>
      <PageHero title="Shinka Welfare Team" subtitle="Dedicated volunteers working for the needy and deserving of village Shinka." image={galleryImages.awardTwo} crumbs={[{ name: 'Our Team' }]} />

      <section className="container-x py-20">
        <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center leading-relaxed text-slate-600">
          <p>Shinka Welfare is a team of dedicated and passionate people working voluntarily for the welfare of needy and deserving people in village Shinka. Through their struggle, hard work and commitment, the society's services have been recognized and appreciated by community members, donors and those in need.</p>
          <p>The society is recognized for its transparent process of helping the deserving without any ulterior motive, only with the fervor of serving humanity.</p>
        </div>

        <SectionHeading eyebrow="Leadership" title="Meet our team" />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {TEAM.map((m) => (
            <li key={m.name} className="card group overflow-hidden text-center transition hover:-translate-y-1.5 hover:shadow-xl">
              <div className="aspect-[4/5] overflow-hidden bg-brand-100">
                <img src={m.img} alt={`Portrait of ${m.name}`} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-base sm:text-lg">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{m.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <DonateBanner />
    </>
  );
}
