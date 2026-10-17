import { FaFileInvoiceDollar, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { PageHero, SectionHeading, DonateBanner } from '../components/ui';
import usePageMeta from '../hooks/usePageMeta';
import { LEDGERS, SITE, galleryImages } from '../data/site';

export default function Financial() {
  usePageMeta('Financial Transparency', 'Monthly income and expenditure books of Shinka Welfare Society, open to every donor.');

  const years = [...new Set(LEDGERS.map((l) => l.year))].sort((a, b) => b - a);

  return (
    <>
      <PageHero title="Financial Transparency" subtitle="Every donation accounted for. Our monthly books are open to everyone." image={galleryImages.awardOne} crumbs={[{ name: 'Transparency' }]} />

      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Monthly books"
          title="Income & expenditure reports"
          text="Each month's book-keeping is published as a photo on our Facebook page. Tap a month to open it in a new tab."
        />

        {years.map((year) => (
          <div key={year} className="mb-12">
            <h3 className="mb-5 flex items-center gap-3 text-xl"><FaCalendarAlt className="text-brand-600" aria-hidden /> {year}</h3>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {LEDGERS.filter((l) => l.year === year).map((l) => (
                <li key={l.month}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex h-full flex-col items-center p-6 text-center transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-xl text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white"><FaFileInvoiceDollar aria-hidden /></span>
                    <span className="font-semibold text-slate-900">{l.month} {l.year}</span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-brand-700">View report <FaExternalLinkAlt className="text-[10px]" aria-hidden /></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-center text-sm text-slate-500">
          Looking for a newer month? Visit our <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline">Facebook page</a>.
        </p>
      </section>

      <DonateBanner />
    </>
  );
}
