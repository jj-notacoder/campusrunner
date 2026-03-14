'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const curRRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = mx + 'px';
        curRef.current.style.top = my + 'px';
      }
      if (orbRef.current) {
        orbRef.current.style.left = mx + 'px';
        orbRef.current.style.top = my + 'px';
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (curRRef.current) {
        curRRef.current.style.left = rx + 'px';
        curRRef.current.style.top = ry + 'px';
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animate();

    const hoverEls = document.querySelectorAll('a,button,.bc,.step-row,.prob-card,.pcard,.vsc,.vb,.pf');
    const enter = () => { curRef.current?.classList.add('h'); curRRef.current?.classList.add('h'); };
    const leave = () => { curRef.current?.classList.remove('h'); curRRef.current?.classList.remove('h'); };

    hoverEls.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      hoverEls.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); });
    };
  }, []);

  return (
    <>
      <div className="cur" ref={curRef} />
      <div className="cur-r" ref={curRRef} />
      <div className="glow-orb" ref={orbRef} />
    </>
  );
}
