import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="container-x py-32 text-center">
      <div className="text-8xl font-extrabold text-brand-200">404</div>
      <h1 className="mt-4 text-3xl">This page could not be found</h1>
      <p className="mt-3 text-slate-600">The link may be old or mistyped.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn-green">Back to home</Link>
        <Link to="/service" className="btn-outline">Our services</Link>
      </div>
    </section>
  );
}
