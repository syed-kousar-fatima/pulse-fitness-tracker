import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const observed = new WeakSet();
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
    );
    const observeItems = (root) => {
      if (root.matches?.('[data-reveal]') && !observed.has(root)) {
        observed.add(root);
        observer.observe(root);
      }
      root.querySelectorAll?.('[data-reveal]').forEach((item) => {
        if (!observed.has(item)) {
          observed.add(item);
          observer.observe(item);
        }
      });
    };
    observeItems(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) observeItems(node);
      }));
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);
}
