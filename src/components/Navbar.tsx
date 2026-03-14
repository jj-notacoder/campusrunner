import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../i18n/I18nContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  const NAV_LINKS = [
    { href: '#about', label: t('nav.about') },
    { href: '#how-it-works', label: t('nav.how') },
    { href: '#services', label: t('nav.services') },
    { href: '#students', label: t('nav.community') },
    { href: '#vendors', label: t('nav.vendors') },
    { href: '#app', label: t('nav.app') }
  ];

  useEffect(() => {
    const IDS = ['home', 'about', 'how-it-works', 'services', 'app', 'students', 'waitlist'];
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let cur = '';
      IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) cur = id;
      });
      setActiveId(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav id="nav" className={scrolled ? 'sc' : ''}>
        <a href="#home" className="logo" style={{ cursor: 'none' }}>
          <div className="logo-ic">🏃</div>
          Campus Runner
        </a>
        <div className="nav-pill">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={activeId === l.href.slice(1) ? 'act' : ''}
            >
              {l.label}
            </a>
          ))}
          <button className="nlogin" onClick={() => setModalOpen(true)} style={{ border: 'none', cursor: 'none' }}>
            {t('nav.login')}
          </button>
          <LanguageSwitcher />
        </div>
      </nav>
      <LoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
