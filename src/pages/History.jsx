import { FaAmbulance, FaHandsHelping, FaSeedling, FaUsers } from 'react-icons/fa';
import { PageHero, DonateBanner } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { SERVICES, SITE, galleryImages } from '../data/site';

const timeline = [
  { icon: FaAmbulance, title: `${SITE.founded}: a tragedy`, text: 'A young villager, Fareed Prince, was severely injured in an accident. With no ambulance in the area, his medical care was dangerously delayed. The incident deeply affected his brother Saeed Khan and their close associates, who resolved to act.' },
  { icon: FaHandsHelping, title: '40 days of effort', text: 'Saeed Khan and his comrades spent the next 40 days mobilizing the village through community meetings and awareness campaigns, with contributions from villagers at home and abroad. They raised enough to buy the village\'s first ambulance, the humble start of our trust.' },
  { icon: FaSeedling, title: 'Expanding our horizons', text: 'Inspired by the impact, the society broadened its work to cover many facets of community welfare: from ambulances and sanitation to water, education, food and dignity for families.' },
  { icon: FaUsers, title: 'Our flourishing team', text: 'From a modest group of resolute individuals, we have grown into an organization of dedicated volunteers and professionals united by one aim: to uplift our community and serve those in need.' },
];

export default function History() {
  usePageMeta('Our History', 'How an avoidable tragedy in 2019 led villagers to found Shinka Welfare Society and its first ambulance.');

  return (
    <>
      <PageHero title="Our Evolution" subtitle="From one ambulance to a village-wide welfare network." image={galleryImages.officeAward} crumbs={[{ name: 'Our History' }]} />

      <section className="container-x py-20">
        <ol className="relative mx-auto max-w-3xl border-l-2 border-brand-200 pl-8">
          {timeline.map(({ icon: Icon, title, text }) => (
            <li key={title} className="relative mb-12 last:mb-0">
              <span className="absolute -left-[3.15rem] grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-white ring-4 ring-slate-50"><Icon aria-hidden /></span>
              <h2 className="text-xl">{title}</h2>
              <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <h2 className="mb-10 text-center text-3xl font-extrabold">What the trust grew into</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.slug} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.accent} text-white`}><Icon aria-hidden /></span>
                  <div><h3 className="text-base">{s.en.title}</h3><p className="mt-1 text-sm text-slate-600">{s.short}</p></div>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center leading-relaxed text-slate-600">
            What began as a response to a heartrending incident has become a comprehensive trust serving the needs of our village. Anchored by our mission and spurred by the memory of Fareed Prince, we remain steadfast in our commitment to a brighter future for all.
          </p>
        </div>
      </section>

      <div className="py-20"><DonateBanner /></div>
    </>
  );
}
