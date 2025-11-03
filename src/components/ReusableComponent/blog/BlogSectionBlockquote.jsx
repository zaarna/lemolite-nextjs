'use client';
import React, { useEffect } from 'react';

const BlogSectionBlockquote = React.forwardRef(
  (
    {
      content,
      author,
      source,
      heading,
      design = '1',
      brandColor = '#BFD633',
      style,
    },
    ref
  ) => {
    // Safe style injection for client-side only
    useEffect(() => {
      if (design === '3' && typeof window !== 'undefined') {
        const styleEl = document.createElement('style');
        styleEl.textContent = `
          @keyframes clockwise {
            0% { transform: rotate(0); }
            100% { transform: rotate(360deg); }
          }

          @keyframes counter {
            0% { transform: rotate(0); }
            100% { transform: rotate(-360deg); }
          }

          .animated-border-quote {
            display: inline-block;
            width: 100%;
            overflow: hidden;
          }

          .animated-border-quote blockquote {
            background-color: #fff;
            border: solid 2px ${brandColor};
            display: inline-block;
            margin: 0;
            padding: 1em;
            position: relative;
            width: 100%;
          }

          .animated-border-quote blockquote::before {
            animation: clockwise 30s infinite linear;
            content: "";
            position: absolute;
            inset: 10%;
            opacity: 0.5;
          }

          .animated-border-quote blockquote::after {
            animation: counter 30s infinite linear;
            content: "";
            position: absolute;
            inset: 10%;
            opacity: 0.5;
          }
        `;
        document.head.appendChild(styleEl);
        return () => {
          document.head.removeChild(styleEl);
        };
      }
    }, [design, brandColor]);

    // --- Design Variants ---
    const designs = {
      '1': {
        container: {
          margin: 0,
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderLeft: `5px solid ${brandColor}`,
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          borderRadius: '15px',
          position: 'relative',
          fontStyle: 'italic',
          fontSize: '20px',
          lineHeight: '1.6',
          color: '#333',
        },
        quoteMark: {
          position: 'absolute',
          top: '0.75rem',
          left: '1rem',
          fontSize: '2.5rem',
          color: brandColor,
          fontFamily: 'serif',
          lineHeight: 1,
        },
        content: {
          paddingLeft: '2rem',
        },
        attribution: {
          marginTop: '1rem',
          paddingLeft: '2rem',
          fontSize: '16px',
          color: '#666',
          fontWeight: 500,
        },
      },
      '2': {
        container: {
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          position: 'relative',
          fontSize: '20px',
          textAlign: 'center',
          lineHeight: '1.6',
          color: '#333',
        },
        content: { fontStyle: 'italic' },
        attribution: {
          marginTop: '1rem',
          fontSize: '16px',
          color: '#666',
          fontWeight: 500,
          fontStyle: 'italic',
        },
        cornerBrackets: {
          position: 'absolute',
          width: '40px',
          height: '20px',
          border: `2px solid ${brandColor}`,
        },
      },
      '3': {
        container: {
          padding: '1em',
          backgroundColor: '#fff',
          border: `solid 2px ${brandColor}`,
          fontSize: '20px',
          lineHeight: '1.6',
          color: '#333',
          position: 'relative',
        },
        content: { fontStyle: 'italic', position: 'relative', zIndex: 2 },
        attribution: {
          marginTop: '1rem',
          fontSize: '16px',
          color: '#666',
          textAlign: 'right',
          fontStyle: 'italic',
          position: 'relative',
          zIndex: 2,
        },
      },
      '4': {
        container: {
          padding: '2rem 4rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          color: '#333',
        },
        quoteMark: {
          fontSize: '4rem',
          color: brandColor,
          fontFamily: 'serif',
        },
        content: { fontStyle: 'italic', flex: 1 },
        attribution: {
          marginTop: '1rem',
          fontSize: '16px',
          color: brandColor,
          fontWeight: 600,
          textTransform: 'uppercase',
        },
      },
      '5': {
        container: {
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '12px',
          borderTop: `4px solid ${brandColor}`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          fontSize: '20px',
          color: '#333',
        },
        quoteMark: {
          position: 'absolute',
          top: '-10px',
          left: '2rem',
          fontSize: '3rem',
          color: brandColor,
          backgroundColor: '#fff',
          padding: '0 10px',
        },
        content: { fontStyle: 'italic' },
        attribution: {
          marginTop: '1.5rem',
          fontSize: '16px',
          color: '#666',
          textAlign: 'right',
          fontStyle: 'italic',
        },
      },
    };

    const currentDesign = designs[design] || designs['1'];

    return (
      <div ref={ref} style={{ margin: '0.5rem 0' }}>
        {heading && (
          <h2
            style={{
              marginBottom: '1rem',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#222',
            }}
          >
            {heading}
          </h2>
        )}

        {/* Design 2: corner brackets */}
        {design === '2' ? (
          <div style={{ ...currentDesign.container, ...style }}>
            <div
              style={{
                ...currentDesign.cornerBrackets,
                top: '10px',
                left: '10px',
                borderRight: 'none',
                borderBottom: 'none',
              }}
            />
            <div
              style={{
                ...currentDesign.cornerBrackets,
                top: '10px',
                right: '10px',
                borderLeft: 'none',
                borderBottom: 'none',
              }}
            />
            <div
              style={{
                ...currentDesign.cornerBrackets,
                bottom: '10px',
                left: '10px',
                borderRight: 'none',
                borderTop: 'none',
              }}
            />
            <div
              style={{
                ...currentDesign.cornerBrackets,
                bottom: '10px',
                right: '10px',
                borderLeft: 'none',
                borderTop: 'none',
              }}
            />

            <div
              style={currentDesign.content}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {(author || source) && (
              <div style={currentDesign.attribution}>
                {author && <span>— {author}</span>}
                {source && (
                  <span style={{ marginLeft: '0.5rem' }}>
                    {author ? ', ' : '— '}
                    <em>{source}</em>
                  </span>
                )}
              </div>
            )}
          </div>
        ) : design === '3' ? (
          <div className="animated-border-quote" style={{ ...style }}>
            <blockquote style={currentDesign.container}>
              <p
                style={currentDesign.content}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {(author || source) && (
                <cite style={currentDesign.attribution}>
                  {author && <span>— {author}</span>}
                  {source && (
                    <span style={{ marginLeft: '0.5rem' }}>
                      {author ? ', ' : '— '}
                      <em>{source}</em>
                    </span>
                  )}
                </cite>
              )}
            </blockquote>
          </div>
        ) : design === '4' ? (
          <div style={{ ...currentDesign.container, ...style }}>
            <div style={currentDesign.quoteMark}>"</div>
            <div style={{ flex: 1 }}>
              <div
                style={currentDesign.content}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {(author || source) && (
                <div style={currentDesign.attribution}>
                  {author && <span>{author}</span>}
                  {source && (
                    <span style={{ marginLeft: '0.5rem' }}>
                      {author ? ', ' : ''}
                      <em>{source}</em>
                    </span>
                  )}
                </div>
              )}
            </div>
            <div style={currentDesign.quoteMark}>"</div>
          </div>
        ) : (
          <blockquote style={{ ...currentDesign.container, ...style }}>
            {currentDesign.quoteMark && (
              <div style={currentDesign.quoteMark}>"</div>
            )}
            <div
              style={currentDesign.content}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {(author || source) && (
              <div style={currentDesign.attribution}>
                {author && <span>— {author}</span>}
                {source && (
                  <span style={{ marginLeft: '0.5rem' }}>
                    {author ? ', ' : '— '}
                    <em>{source}</em>
                  </span>
                )}
              </div>
            )}
          </blockquote>
        )}
      </div>
    );
  }
);

BlogSectionBlockquote.displayName = 'BlogSectionBlockquote';
export default BlogSectionBlockquote;
