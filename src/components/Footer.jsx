import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import { SITE, SERVICES, DEVELOPER } from '../data/site';

const quick = [
  { name: 'About Us', to: '/about' },
  { name: 'Our Mission', to: '/mission' },
  { name: 'Our History', to: '/history' },
  { name: 'Our Team', to: '/team' },
  { name: 'Financial Transparency', to: '/financial' },
  { name: 'Join Us', to: '/joinus' },
];

const colTitle = 'mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400';
const linkCls = 'text-sm text-brand-100/80 transition hover:text-white';

export default function Footer() {
  return (
    <footer className="mt-12 bg-brand-950 text-brand-100">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="text-lg font-extrabold text-white">Shinka Welfare Society</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-brand-100/80">
            A non-political, non-profit charity with a 100% donation policy, serving the people of Shinka since {SITE.founded}.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-brand-950"><FaFacebookF /></a>
            <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-brand-950"><FaYoutube /></a>
            <a href={`https://wa.me/${SITE.phones[1].whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-brand-950"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <h3 className={colTitle}>Quick links</h3>
          <ul className="space-y-2">
            {quick.map((l) => <li key={l.to}><Link to={l.to} className={linkCls}>{l.name}</Link></li>)}
          </ul>
        </div>

        <div>
          <h3 className={colTitle}>Our services</h3>
          <ul className="space-y-2">
            {SERVICES.slice(0, 6).map((s) => <li key={s.slug}><Link to={`/${s.slug}`} className={linkCls}>{s.en.title}</Link></li>)}
            <li><Link to="/service" className="text-sm font-semibold text-gold-400 hover:text-gold-500">All services →</Link></li>
          </ul>
        </div>

        <div>
          <h3 className={colTitle}>Contact</h3>
          <ul className="space-y-3 text-sm text-brand-100/80">
            {SITE.phones.map((p) => (
              <li key={p.tel}><a href={`tel:${p.tel}`} className="inline-flex items-center gap-3 hover:text-white"><FaPhoneAlt className="text-gold-400" aria-hidden />{p.display}</a></li>
            ))}
            <li><a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 break-all hover:text-white"><FaEnvelope className="text-gold-400" aria-hidden />{SITE.email}</a></li>
            <li className="inline-flex items-center gap-3"><FaMapMarkerAlt className="text-gold-400" aria-hidden />{SITE.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-xs text-brand-100/60">
        <div className="container-x flex flex-col items-center justify-between gap-2 sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>
            Website by <strong className="font-semibold text-brand-100">{DEVELOPER.name}</strong>
            {' · '}
            <a href={`tel:${DEVELOPER.tel}`} className="hover:text-gold-400">{DEVELOPER.display}</a>
            {' · '}
            <a href={`https://wa.me/${DEVELOPER.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">WhatsApp</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
