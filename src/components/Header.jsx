import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaHeart, FaPhoneAlt } from 'react-icons/fa';
import Logo from './Logo';
import { NAV, SITE } from '../data/site';

const linkCls = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-brand-100 text-brand-800' : 'text-slate-700 hover:bg-slate-100'}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); setSub(null); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-900 text-xs text-brand-100 md:block">
        <div className="container-x flex items-center justify-between py-1.5">
          <span>{SITE.tagline}</span>
          <a href={`tel:${SITE.phones[0].tel}`} className="inline-flex items-center gap-2 hover:text-white">
            <FaPhoneAlt aria-hidden /> Emergency: {SITE.phones[0].display}
          </a>
        </div>
      </div>
      <nav className={`bg-white/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-md' : 'border-b border-slate-100'}`} aria-label="Main">
        <div className="container-x flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <Logo className="h-11 w-11 sm:h-12 sm:w-12" />
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-brand-900 sm:text-lg">Shinka Welfare Society</span>
              <span className="hidden text-[11px] font-medium uppercase tracking-widest text-gold-600 sm:block">Serving humanity</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.submenu ? (
                <div key={item.name} className="group relative">
                  <button className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                    {item.name} <FaChevronDown className="text-[10px] transition group-hover:rotate-180" aria-hidden />
                  </button>
                  <div className="invisible absolute left-0 top-full w-48 translate-y-1 rounded-xl bg-white p-2 opacity-0 shadow-xl ring-1 ring-slate-100 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.submenu.map((s) => (
                      <NavLink key={s.to} to={s.to} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-800">
                        {s.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>{item.name}</NavLink>
              )
            )}
            <Link to="/donate" className="btn-primary ml-3 !py-2.5"><FaHeart aria-hidden /> Donate</Link>
          </div>

          <button className="rounded-lg p-2 text-brand-900 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <div className="container-x space-y-1 py-4">
              {NAV.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-medium text-slate-800" onClick={() => setSub(sub === item.name ? null : item.name)}>
                      {item.name} <FaChevronDown className={`text-xs transition ${sub === item.name ? 'rotate-180' : ''}`} aria-hidden />
                    </button>
                    {sub === item.name && (
                      <div className="ml-3 border-l-2 border-brand-100 pl-3">
                        {item.submenu.map((s) => (
                          <Link key={s.to} to={s.to} className="block rounded-lg px-3 py-2 text-slate-600">{s.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.to} to={item.to} className="block rounded-lg px-3 py-2.5 font-medium text-slate-800">{item.name}</Link>
                )
              )}
              <Link to="/donate" className="btn-primary mt-3 w-full"><FaHeart aria-hidden /> Donate now</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
