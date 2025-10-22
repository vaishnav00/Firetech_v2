import React, { useEffect } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  urlPath?: string;
};

const DEFAULT_TITLE = 'Firetech Trading Contracting W.L.L';
const DEFAULT_DESCRIPTION = 'Qatar\'s trusted provider of fire protection, safety, and building material solutions.';
const DEFAULT_IMAGE = 'https://www.dropbox.com/scl/fi/jgm7lrwakzy7u2hs25tpe/hero-3.jpg?rlkey=nepf43cvc61cfrula3w4twpsa&raw=1';

const Seo: React.FC<SeoProps> = ({ title, description, image, urlPath }) => {
  useEffect(() => {
    const docTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    document.title = docTitle;

    const ensureTag = (selector: string, create: () => HTMLElement): HTMLElement => {
      let el = document.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    const setMeta = (name: string, content: string) => {
      const meta = ensureTag(`meta[name="${name}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('name', name);
        return m;
      }) as HTMLMetaElement;
      meta.setAttribute('content', content);
    };

    const setOg = (property: string, content: string) => {
      const meta = ensureTag(`meta[property="${property}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('property', property);
        return m;
      }) as HTMLMetaElement;
      meta.setAttribute('content', content);
    };

    const desc = description || DEFAULT_DESCRIPTION;
    const img = image || DEFAULT_IMAGE;
    const canonicalPath = urlPath || (window.location && window.location.pathname) || '/';

    setMeta('description', desc);
    setOg('og:title', docTitle);
    setOg('og:description', desc);
    setOg('og:image', img);
    setOg('og:type', 'website');
    setOg('og:url', canonicalPath);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', docTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', img);

    const linkCanonical = ensureTag('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }) as HTMLLinkElement;
    linkCanonical.setAttribute('href', canonicalPath);
  }, [title, description, image, urlPath]);

  return null;
};

export default Seo;


