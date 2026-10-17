import { Link } from 'react-router-dom';
import { FaMedkit, FaAmbulance, FaBroom, FaBus, FaFaucet, FaPrayingHands, FaGraduationCap, FaUtensils, FaRing, FaHandHoldingHeart, FaHandsHelping, FaTint, FaCheckCircle } from 'react-icons/fa';
import { PageHero, SectionHeading, DonateBanner } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { SITE, galleryImages } from '../data/site';

const programs = [
  { icon: FaMedkit, title: 'Medical Fund', text: 'Medical assistance to needy and deserving patients.' },
  { icon: FaAmbulance, title: 'Ambulance Services', text: 'Starting with one ambulance, we now operate multiple vehicles for prompt emergency transport.' },
  { icon: FaBroom, title: 'Cleanliness Drives', text: 'Volunteers regularly clean public spaces, promoting hygiene and reducing health hazards.' },
  { icon: FaBus, title: 'School Bus Services', text: 'Safe, reliable transport for children, increasing attendance and reducing dropouts.' },
  { icon: FaFaucet, title: 'Filtered Water Supply', text: 'Water filtration systems providing clean drinking water and reducing waterborne disease.' },
  { icon: FaPrayingHands, title: 'Burial Funds', text: 'Support with burial expenses, ensuring a dignified farewell.' },
  { icon: FaGraduationCap, title: 'Educational Funds', text: 'Scholarships and school supplies so no student is held back by money.' },
  { icon: FaUtensils, title: 'Ramadan Food Distribution', text: 'Food drives so every family has enough to eat, fostering sharing and caring.' },
  { icon: FaRing, title: 'Wedding Fund', text: 'Weddings for deserving girls, including essential items and monetary support.' },
  { icon: FaPrayingHands, title: 'Kafan & Funeral Fund', text: 'Funeral expenses for poor and deserving individuals.' },
  { icon: FaHandHoldingHeart, title: 'Financial Assistance', text: 'Cash assistance to the poor and modest people of the village.' },
  { icon: FaHandsHelping, title: 'Employment Provision', text: 'Helping deserving individuals find employment opportunities.' },
  { icon: FaTint, title: 'Water Bore Fund', text: 'Water bores for households that lack water facilities.' },
];

export default function About() {
  usePageMeta('About Us', 'Who we are, how Shinka Welfare Society began, and the services we provide to the people of Shinka.');

  return (
    <>
      <PageHero title="About Us" subtitle="A non-profit built by villagers, for villagers." image={galleryImages.groupEvent} crumbs={[{ name: 'About Us' }]} />

      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Who we are</span>
          <h2 className="text-3xl font-extrabold">Uplifting our community since {SITE.founded}</h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Shinka Welfare Society is a non-profit charitable organization dedicated to uplifting our community. Registered since {SITE.founded}, we conduct emergency relief operations during natural or man-made disasters. We also focus on long-term healthcare programs, community support, and education and poverty alleviation initiatives.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our journey began with a few kind-hearted individuals in our village, determined to help the less fortunate, particularly by providing an effective ambulance service.
          </p>
        </div>
        <img src={galleryImages.officeVisit} alt="Society members at an office meeting" className="w-full rounded-3xl object-cover shadow-soft" loading="lazy" />
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <img src={galleryImages.awardTwo} alt="Members receiving a commemorative plaque in front of the society's banner" className="order-last w-full rounded-3xl object-cover shadow-soft lg:order-first" loading="lazy" />
          <div>
            <span className="eyebrow">Our genesis</span>
            <h2 className="text-3xl font-extrabold">Born from one avoidable tragedy</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              In 2019, our village experienced a tragic incident when Fareed Prince was involved in a severe accident. Due to the lack of an ambulance, there was a significant delay in getting him to the hospital. This deeply affected Fareed's brother, Saeed Khan, and his friends.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Motivated to prevent such tragedies in the future, they took action. With the consent and support of the local people, Shinka Welfare Society was established. Through community meetings, awareness campaigns, and generous contributions from villagers, including those living abroad, we raised funds and launched our first ambulance service.
            </p>
            <Link to="/history" className="btn-green mt-6">Read the full history</Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Mission & services"
          title="100% donation policy"
          text="We are non-political and non-profit. Our assets cover administrative expenses, so every donation goes directly to programs for the poor, the less fortunate and the deserving."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card flex gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-xl text-brand-700"><Icon aria-hidden /></span>
              <div>
                <h3 className="text-base">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="card mx-auto max-w-4xl p-8 text-center sm:p-12">
          <span className="eyebrow">Our commitment</span>
          <p className="leading-relaxed text-slate-600">
            Shinka Welfare Society is committed to serving the people of Shinka and surrounding areas. What began as a small group of dedicated individuals has grown into a robust organization with a clear mission to support and uplift our community. Our members are truthful, honest, and dedicated, working voluntarily without any salary. We aim to guide people to use their charity and donations effectively, helping the poor in an organized manner.
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 font-semibold text-brand-800"><FaCheckCircle aria-hidden /> Together, we can create a better future for all. Thank you for your support.</p>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
