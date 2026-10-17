import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { heroSlides } from '../data/site';

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-brand-950 text-white">
      {heroSlides.map((s, idx) => (
        <img
          key={s.caption}
          src={s.image}
          alt=""
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/75 to-brand-900/30" />
      <div className="container-x flex min-h-[560px] flex-col justify-center py-20 lg:min-h-[640px]">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 ring-1 ring-white/20 backdrop-blur">
          <FaHeart aria-hidden /> 100% donation policy
        </span>
        <h1 className="max-w-3xl animate-fade-up text-4xl font-extrabold leading-tight !text-white sm:text-6xl">
          Empowering communities,<br /><span className="text-gold-400">enriching lives.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-brand-100">
          Free ambulances, clean water, education, food and dignity for every family in Shinka, run entirely by volunteers.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/donate" className="btn-primary"><FaHeart aria-hidden /> Donate now</Link>
          <Link to="/service" className="btn-ghost">Our services <FaArrowRight aria-hidden /></Link>
        </div>
      </div>
      <div className="absolute bottom-16 left-0 right-0">
        <div className="container-x flex items-center justify-between gap-4">
          <p className="hidden text-sm text-brand-100/90 sm:block" aria-live="polite">{heroSlides[i].caption}</p>
          <div className="flex gap-2">
            {heroSlides.map((s, idx) => (
              <button
                key={s.caption}
                onClick={() => setI(idx)}
                aria-label={`Show slide ${idx + 1}`}
                aria-current={idx === i}
                className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-gold-400' : 'w-2 bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
