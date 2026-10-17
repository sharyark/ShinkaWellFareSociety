import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Link
      to={`/${service.slug}`}
      className="card group relative flex flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <span className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-2xl text-white shadow-lg transition group-hover:scale-110`}>
        <Icon aria-hidden />
      </span>
      <h3 className="text-xl">{service.en.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
        Learn more <FaArrowRight className="transition group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
