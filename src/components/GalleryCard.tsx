import React, { useEffect, useState } from 'react';

interface GalleryCardProps {
  image: string;
  title: string;
  emoji?: string;
  overlayBackground?: string;
}

export default function GalleryCard({
  image,
  title,
  emoji = '📷',
  overlayBackground = 'rgba(31, 41, 55, 0.7)'
}: GalleryCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
      <div
        className="gallery-card"
      role="button"
      tabIndex={0}
      onClick={() => setOpen(true)}
      onKeyDown={(e) => { if (e.key === 'Enter') setOpen(true); }}
      style={{
        overflow: 'hidden',
        aspectRatio: '16/9',
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = 'translateY(-4px)';
        target.style.boxShadow = '0 12px 16px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = 'translateY(0)';
        target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
        }}
      />
      <div
        className="gallery-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: overlayBackground,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '600',
          textAlign: 'center',
          padding: '1rem',
          transition: 'opacity 0.25s ease',
          opacity: 0,
          backdropFilter: 'blur(4px)'
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          (e.currentTarget as HTMLDivElement).style.opacity = '1';
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          (e.currentTarget as HTMLDivElement).style.opacity = '0';
        }}
      >
        <div>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{emoji}</div>
          <div style={{ fontSize: '1rem' }}>{title}</div>
        </div>
      </div>

      {open && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-label={title}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              maxWidth: '95%',
              maxHeight: '95%',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              background: '#111'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close image"
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '1rem',
                zIndex: 10000,
                background: 'rgba(0,0,0,0.5)',
                border: 'none',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#000' }}
            />
            <div style={{ padding: '0.75rem 1rem', color: 'white', background: 'linear-gradient(180deg, rgba(0,0,0,0.35), transparent)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{title}</div>
            </div>
          </div>
        </div>
      )}
      </div>
      <div className="gallery-caption" style={{textAlign: 'center', fontSize: '0.95rem', color: 'var(--color-text)', fontWeight: 600}}>{title}</div>
    </div>
  );
}
