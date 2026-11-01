import { useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { Hero } from '@/components/sections/Hero';
import { Categories } from '@/components/sections/Categories';
import { Catalog } from '@/components/sections/Catalog';
import { About } from '@/components/sections/About';
import { Advantages } from '@/components/sections/Advantages';
import { Reviews } from '@/components/sections/Reviews';
import { Newsletter } from '@/components/sections/Newsletter';
import { ProductPage } from '@/components/pages/ProductPage';
import { Contacts } from '@/components/pages/Contacts';
import { NotFound } from '@/components/pages/NotFound';
import { useHashRoute } from '@/hooks/useHashRoute';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { products, formatPrice } from '@/data';

function SearchOverlay({
  open,
  query,
  onClose,
  onQuery,
  navigate,
  inputRef,
}: {
  open: boolean;
  query: string;
  onClose: () => void;
  onQuery: (v: string) => void;
  navigate: (path: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  if (!open) return null;

  const q = query.trim().toLowerCase();
  const results = q
    ? products
        .filter((p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q))
        .slice(0, 6)
    : [];

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-0 top-0 bg-cream shadow-lg animate-fade-in">
        <div className="container-wide py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Найти средство для ухода…"
                aria-label="Поиск"
                autoFocus
                className="w-full border-b border-line bg-transparent py-3 pl-8 pr-3 text-lg font-serif outline-none placeholder:text-ink/30 focus:border-ink"
              />
            </div>
            <button type="button" aria-label="Закрыть поиск" onClick={onClose} className="p-1 text-ink">
              <X className="h-5 w-5" />
            </button>
          </div>

          {q && (
            <div className="mt-4 pb-4">
              {results.length === 0 ? (
                <p className="py-6 text-sm text-ink/60">
                  Ничего не найдено по запросу «{query}». Попробуйте другое слово.
                </p>
              ) : (
                <ul className="divide-y divide-line">
                  {results.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onQuery('');
                          navigate(`/product/${p.slug}`);
                        }}
                        className="flex w-full items-center gap-4 py-3 text-left transition-colors hover:bg-sand/50"
                      >
                        <div className="h-14 w-12 flex-shrink-0 overflow-hidden bg-sand">
                          <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{p.name}</p>
                          <p className="text-xs text-ink/55">{p.shortDescription}</p>
                        </div>
                        <span className="text-sm">{formatPrice(p.price)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Routes() {
  const [route, navigate] = useHashRoute();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const routeName = route.name;

  // Re-run reveal whenever the route changes
  useScrollReveal([routeName]);

  const product = useMemo(() => {
    if (route.name !== 'product') return null;
    return products.find((p) => p.slug === route.slug) ?? null;
  }, [route]);

  // When opening search from header, focus its input
  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 50);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header navigate={navigate} route={routeName} onSearchClick={openSearch} />

      <main className="flex-1">
        {route.name === 'home' && (
          <>
            <Hero navigate={navigate} />
            <Categories navigate={navigate} />
            <Catalog navigate={navigate} />
            <About navigate={navigate} />
            <Advantages />
            <Reviews />
            <Newsletter />
          </>
        )}

        {route.name === 'catalog' && (
          <Catalog
            navigate={navigate}
            initialCategory={route.category}
            onSearchChange={() => {}}
          />
        )}

        {route.name === 'about' && (
          <>
            <About navigate={navigate} />
            <Advantages />
            <Newsletter />
          </>
        )}

        {route.name === 'contacts' && <Contacts navigate={navigate} />}

        {route.name === 'product' &&
          (product ? (
            <ProductPage product={product} navigate={navigate} />
          ) : (
            <NotFound navigate={navigate} />
          ))}

        {route.name === 'not-found' && <NotFound navigate={navigate} />}
      </main>

      <Footer navigate={navigate} />

      <CartDrawer navigate={navigate} />

      <SearchOverlay
        open={searchOpen}
        query={searchQuery}
        onClose={closeSearch}
        onQuery={setSearchQuery}
        navigate={navigate}
        inputRef={searchInputRef}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}
