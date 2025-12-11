"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import React, { forwardRef } from "react";
import Link from "next/link";
import { blogs } from "@/data/blog";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Breadcrumb from "@/components/ReusableComponent/Breadcrumb/Breadcrumb";
import BlogSectionBlockquote from "./BlogSectionBlockquote";

// Section sub-components
// Image Section
const BlogSectionImage = React.forwardRef((props, ref) => {
  const { src, alt, heading } = props;
  return (
    <div ref={ref} style={{ margin: "0.5rem 0" }}>
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={400}
        style={{ maxWidth: "100%", borderRadius: "12px", height: "auto" }}
      />
    </div>
  );
});

// Tag Section
const BlogSectionTag = React.forwardRef((props, ref) => {
  const { content } = props;
  return (
    <div ref={ref} style={{ margin: "1rem 0" }}>
      <span
        className="text-[#BFD633]"
        style={{
          padding: "8px",
          fontSize: "22px",
          fontWeight: "500",
        }}
      >
        {content}
      </span>
    </div>
  );
});

// Title Section
const BlogSectionTitle = React.forwardRef((props, ref) => {
  const { content } = props;
  return (
    <div ref={ref} style={{ margin: "1rem 0" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          lineHeight: "1.2",
          margin: "0",
        }}
      >
        {content}
      </h1>
    </div>
  );
});

// Author and Date Section
const BlogSectionAuthorDate = React.forwardRef((props, ref) => {
  const { author, date } = props;
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        fontSize: 18,
        fontWeight: 500,
        margin: "1rem 0",
      }}
    >
      <span style={{ color: "#222" }}>{author}</span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          color: "#666",
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        <Calendar className="w-4 h-4 mr-2 text-[#BFD633]" />
        {date}
      </span>
    </div>
  );
});

// Paragraph Section
const BlogSectionParagraph = React.forwardRef((props, ref) => {
  const { content, heading, subheading } = props;
  return (
    <div ref={ref} style={{ margin: "0.5rem 0" }}>
      {heading && (
        <h2
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          {heading}
        </h2>
      )}
      {subheading && (
        <h3
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#222222",
          }}
          dangerouslySetInnerHTML={{ __html: subheading }}
        />
      )}
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#696969",
          margin: "1rem 0",
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
});

// List Section
const BlogSectionList = React.forwardRef((props, ref) => {
  const {
    items,
    heading,
    content,
    bulletStyle = "default",
    brandColor = "#BFD633",
    bulletColor,
  } = props;

  const bulletOptions = {
    default: "•",
    arrow: "→",
    diamond: "◆",
    check: "✓",
    star: "★",
    circle: "●",
    square: "■",
    triangle: "▲",
  };

  const bulletSymbol = bulletOptions[bulletStyle] || bulletOptions.default;

  return (
    <div ref={ref} style={{ margin: "1rem 0" }}>
      {heading && (
        <h2
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          {heading}
        </h2>
      )}
      <p
        style={{ fontSize: "18px", lineHeight: "1.7", color: "#333" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <ul style={{ paddingLeft: 0, marginTop: "0.5rem" }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              marginBottom: "0.5rem",
              fontSize: 18,
              color: "#696969",
              fontWeight: 400,
              lineHeight: "1.7",
              listStyle: "none",
              paddingLeft: "12px",
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: bulletColor || brandColor,
                lineHeight: "30px",
                fontWeight: "bold",
              }}
            >
              {bulletSymbol}
            </span>
            <span
              style={{ flex: 1 }}
              dangerouslySetInnerHTML={{ __html: item }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
});

// ===================== CTA SECTION =====================
const BlogSectionCTA = React.forwardRef((props, ref) => {
  const {
    heading = "Ready to Transform Your Business?",
    buttonText = "Take the First Step Today",
    link = "/contact",
    backgroundColor = "#1A202C",
  } = props;

  return (
    <div ref={ref} className="my-10">
      <div
        className="rounded-2xl border-2 border-white text-center shadow-md p-4 sm:p-6"
        style={{ backgroundColor }}
      >
        <div className="border-2 border-white p-6 sm:p-10 rounded-2xl">
          <h2
            className="text-white font-medium mb-4 md:mb-6 text-lg md:text-2xl"
            style={{ lineHeight: "1.2" }}
          >
            {heading}
          </h2>
          <button
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
            className="bg-transparent hover:bg-white hover:text-black flex items-center justify-center mx-auto border-2 border-white rounded-full p-3 sm:px-6 sm:py-3 text-white text-base cursor-pointer inline-flex gap-2 transition-all duration-300 ease-in-out"
          >
            {buttonText}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

// ===================== Q&A SECTION =====================
const BlogSectionQA = React.forwardRef(({ heading, items = [] }, ref) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="my-8">
      {heading && (
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">{heading}</h2>
      )}

      <div className="space-y-4">
        {items.map((qa, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {qa.question}
                </h3>

                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#BFD633]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#BFD633]" />
                )}
              </button>

              {/* Answer */}

              {isOpen && (
                <div
                  className="p-4 pt-0 text-gray-700 text-base leading-relaxed animate-fadeIn"
                  dangerouslySetInnerHTML={{ __html: qa.answer }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

// ===================== TABLE SECTION =====================
const BlogSectionTable = React.forwardRef((props, ref) => {
  const {
    heading,
    description,
    columns = [],
    rows = [],
    design = "1",
    brandColor = "#BFD633",
    firstRowBackground = "",
    firstColumnBackground = "",
    title,
    advantages,
    advantagesTitle,
    challengesTitle,
    exampleTitle,
    challenges,
    example,
    caption,
    comparisonColumns = [],
  } = props;

  const designs = {
    1: {
      container: { margin: "2rem 0" },
      table: { width: "100%", borderCollapse: "collapse", minWidth: 400 },
      caption: {
        captionSide: "top",
        padding: "0 0 16px 0",
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#222",
        textAlign: "left",
        marginBottom: "0",
      },
      header: {
        border: "1px solid #ccc",
        padding: "12px 10px",
        background: "#bcbdbd",
        fontWeight: 700,
        fontSize: 16,
        textAlign: "left",
      },
      cell: {
        border: "1px solid #ccc",
        padding: "12px 10px",
        fontSize: 15,
        fontWeight: 400,
        background: "#fff",
      },
      firstRowCell: {
        border: "1px solid #ccc",
        padding: "12px 10px",
        fontSize: 15,
        fontWeight: 400,
        background: firstRowBackground || "#f8f9fa",
      },
      firstColumnCell: {
        border: "1px solid #ccc",
        padding: "12px 10px",
        fontSize: 15,
        fontWeight: 400,
        background: firstColumnBackground || "#f8f9fa",
      },
      firstRowFirstColumnCell: {
        border: "1px solid #ccc",
        padding: "12px 10px",
        fontSize: 15,
        fontWeight: 400,
        background: firstRowBackground || firstColumnBackground || "#f8f9fa",
      },
    },

    2: {
      container: { margin: "2rem 0" },
      wrapper: {
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderLeft: `5px solid ${brandColor}`,
        border: `1px solid ${brandColor}`,
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
        borderRadius: "15px",
        position: "relative",
        fontSize: "18px",
        lineHeight: "1.6",
        color: "#333",
      },
      title: {
        fontSize: "1.5rem",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "0.8rem",
        color: "#222",
        lineHeight: "1.2",
      },
      titleSeparator: {
        width: "100%",
        height: "2px",
        backgroundColor: brandColor,
        margin: "0 auto 0.5rem auto",
        borderRadius: "1px",
      },
      description: {
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#696969",
        marginBottom: "0.8rem",
        textAlign: "left",
      },
      sectionTitle: {
        fontSize: "1.2rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
        color: "#222",
      },
      listItem: {
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        marginBottom: "0.5rem",
        fontSize: "18px",
        color: "#696969",
        fontWeight: "400",
        lineHeight: "1.7",
        listStyle: "none",
        paddingLeft: "12px",
      },
      bullet: {
        fontSize: "18px",
        color: brandColor,
        lineHeight: "30px",
        fontWeight: "bold",
      },
    },

    3: {
      container: { margin: "2rem 0" },
      table: {
        width: "100%",
        borderCollapse: "collapse",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
      },
      column: {
        border: "1px solid #ccc",
        padding: "1.5rem",
        verticalAlign: "top",
        width: "33.33%",
      },
      header: {
        border: "1px solid #ccc",
        padding: "1.5rem",
        verticalAlign: "top",
        width: "33.33%",
        backgroundColor: "#f8f9fa",
        fontWeight: "700",
      },
      title: {
        fontSize: "1.3rem",
        fontWeight: "700",
        marginBottom: "1rem",
        color: "#222",
        textAlign: "center",
      },
      description: {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#333",
        marginBottom: "1.5rem",
      },
      benefitsTitle: {
        fontSize: "1.1rem",
        fontWeight: "700",
        marginBottom: "0.8rem",
        color: "#222",
      },
      benefitsList: {
        paddingLeft: "0",
        margin: "0 0 1.5rem 0",
        listStyle: "none",
      },
      benefitItem: {
        fontSize: "15px",
        lineHeight: "1.5",
        color: "#333",
        marginBottom: "0.5rem",
        paddingLeft: "1.2rem",
        position: "relative",
      },
      bullet: {
        position: "absolute",
        left: "0",
        top: "0",
        color: "#333",
        fontSize: "16px",
      },
      summary: {
        fontSize: "15px",
        lineHeight: "1.5",
        color: "#333",
        fontStyle: "italic",
      },
      caption: {
        captionSide: "top",
        padding: "0 0 16px 0",
        fontSize: "1.5rem",
        fontWeight: "600",
        color: "#222",
        textAlign: "left",
        marginBottom: "0",
      },
    },
  };

  const currentDesign = designs[design] || designs["1"];

  // ========== DESIGN 2 ==========
  if (design === "2") {
    return (
      <div ref={ref} style={currentDesign.container}>
        <div style={currentDesign.wrapper}>
          {title && <h2 style={currentDesign.title}>{title}</h2>}
          {title && <div style={currentDesign.titleSeparator}></div>}

          {description && (
            <p
              style={currentDesign.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {/* ✅ Dynamic Advantages Title */}
          {advantages?.length > 0 && (
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={currentDesign.sectionTitle}>
                {advantagesTitle || "Advantages"}:
              </h3>
              <ul>
                {advantages.map((a, i) => (
                  <li key={i} style={currentDesign.listItem}>
                    <span style={currentDesign.bullet}>◆</span>
                    <span dangerouslySetInnerHTML={{ __html: a }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ Dynamic Challenges Title */}
          {challenges?.length > 0 && (
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={currentDesign.sectionTitle}>
                {challengesTitle || "Challenges"}:
              </h3>
              <ul>
                {challenges.map((c, i) => (
                  <li key={i} style={currentDesign.listItem}>
                    <span style={currentDesign.bullet}>◆</span>
                    <span dangerouslySetInnerHTML={{ __html: c }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ✅ Dynamic Example Title */}
          {example && (
            <div>
              <h3 style={currentDesign.sectionTitle}>
                {exampleTitle || "Example"}:
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#696969",
                  margin: "0",
                }}
                dangerouslySetInnerHTML={{ __html: example }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // ========== DESIGN 3 ==========
  if (design === "3") {
    return (
      <div ref={ref} style={currentDesign.container}>
        {description && (
          <div style={{ marginBottom: "1rem", color: "#444" }}>
            {description}
          </div>
        )}
        <div style={{ overflowX: "auto" }}>
          <table style={currentDesign.table}>
            {heading && (
              <caption style={currentDesign.caption}>{heading}</caption>
            )}
            <thead>
              <tr>
                {comparisonColumns.map((col, i) => (
                  <th key={i} style={currentDesign.header}>
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {comparisonColumns.map((col, i) => (
                  <td key={i} style={currentDesign.column}>
                    {col.description && (
                      <p
                        style={currentDesign.description}
                        dangerouslySetInnerHTML={{ __html: col.description }}
                      />
                    )}
                    {col.benefits?.length > 0 && (
                      <div>
                        <h4 style={currentDesign.benefitsTitle}>Benefits:</h4>
                        <ul style={currentDesign.benefitsList}>
                          {col.benefits.map((b, j) => (
                            <li key={j} style={currentDesign.benefitItem}>
                              <span style={currentDesign.bullet}>•</span>
                              <span dangerouslySetInnerHTML={{ __html: b }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {col.summary && (
                      <p
                        style={currentDesign.summary}
                        dangerouslySetInnerHTML={{ __html: col.summary }}
                      />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // ========== DESIGN 1 (Default) ==========
  return (
    <div ref={ref} style={currentDesign.container}>
      <div style={{ overflowX: "auto" }}>
        <table style={currentDesign.table}>
          {caption && (
            <caption style={currentDesign.caption}>
              <div style={{ fontWeight: "bold", marginBottom: "0.25rem" }}>
                {caption}
              </div>
              {description && (
                <div
                  style={{
                    fontSize: "18px",
                    color: "rgb(105, 105, 105)",
                    margin: "0.5rem 0",
                    fontWeight: "400",
                  }}
                >
                  {description}
                </div>
              )}
            </caption>
          )}
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i} style={currentDesign.header}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => {
                  let style = currentDesign.cell;
                  if (r === 0 && c === 0)
                    style = currentDesign.firstRowFirstColumnCell;
                  else if (r === 0) style = currentDesign.firstRowCell;
                  else if (c === 0) style = currentDesign.firstColumnCell;

                  return (
                    <td key={c} style={style}>
                      <div dangerouslySetInnerHTML={{ __html: cell }} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

const BlogSectionNumberedList = React.forwardRef((props, ref) => {
  const { heading, description, items = [], subRefs } = props;

  return (
    <div ref={ref} style={{ margin: "2rem 0" }}>
      {heading && (
        <h2
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}
        >
          {heading}
        </h2>
      )}

      {description && (
        <div
          style={{ marginBottom: "1.5rem", color: "#444" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      <ol style={{ paddingLeft: 20, margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            ref={(el) => subRefs && (subRefs[i] = el)}
            style={{
              marginBottom: "0.5rem",
              fontSize: 18,
              color: "#222",
              fontWeight: 400,
              lineHeight: "1.7",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 1 }}>
              {i + 1}. <span dangerouslySetInnerHTML={{ __html: item.title }} />
            </div>
            <div
              style={{ color: "#696969" }}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
});

const BlogSectionBox = React.forwardRef((props, ref) => {
  const {
    content,
    heading,
    subheading,
    boxStyle,
    headingStyle,
    subheadingStyle,
    contentStyle,
  } = props;

  return (
    <div
      ref={ref}
      style={{
        margin: "0.5rem 0",
        padding: "1rem",
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        ...boxStyle,
      }}
    >
      {heading && (
        <h2
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#222",
            ...headingStyle,
          }}
        >
          {heading}
        </h2>
      )}

      {subheading && (
        <h3
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#222222",
            ...subheadingStyle,
          }}
        >
          {subheading}
        </h3>
      )}

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#696969",
          margin: 0,
          ...contentStyle,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
});

const BlogSectionCards = React.forwardRef((props, ref) => {
  const {
    heading,
    subheading,
    description,
    cards,
    columnsPerRow = "auto",
  } = props;

  const getGridColumns = React.useCallback(() => {
    if (columnsPerRow === "auto") {
      return "repeat(auto-fit, minmax(300px, 1fr))";
    }

    const numColumns = parseInt(columnsPerRow, 10);
    if (isNaN(numColumns) || numColumns < 1) {
      return "repeat(auto-fit, minmax(300px, 1fr))";
    }

    return `repeat(${numColumns}, 1fr)`;
  }, [columnsPerRow]);

  return (
    <div ref={ref} style={{ margin: "2rem 0" }}>
      {heading && (
        <h2
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#222222",
          }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      )}

      {subheading && (
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#696969",
            marginBottom: "1rem",
          }}
          dangerouslySetInnerHTML={{ __html: subheading }}
        />
      )}

      {description && (
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#696969",
          }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {cards && cards.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: getGridColumns(),
            gap: "1.2rem",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "12px",
                padding: "1rem",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              {card.heading && (
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "0.5rem",
                    lineHeight: "1.3",
                  }}
                >
                  {card.heading}
                </h3>
              )}

              {card.content && (
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.5",
                    color: "#696969",
                  }}
                  dangerouslySetInnerHTML={{ __html: card.content }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const BlogSectionImageWithText = React.forwardRef((props, ref) => {
  const {
    imageSrc,
    imageAlt,
    content,
    author,
    authorTitle,
    options = [],
    heading,
    subheading,
    layout = "left-image",
  } = props;

  return (
    <div ref={ref} style={{ margin: "2rem 0" }}>
      {heading && (
        <h2
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#222222",
          }}
        >
          {heading}
        </h2>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: layout === "right-image" ? "row-reverse" : "row",
          gap: "2rem",
          alignItems: "flex-start",
          backgroundColor: "#fff",
          borderRadius: "16px",
          padding: "1.5rem",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div style={{ flex: "0 0 40%", minWidth: "300px" }}>
          <img
            src={imageSrc}
            alt={imageAlt || "Blog image"}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {subheading && (
            <h3
              style={{
                marginBottom: "0.5rem",
                fontSize: "1.2rem",
                fontWeight: "500",
                color: "#222222",
              }}
            >
              {subheading}
            </h3>
          )}

          {content && (
            <div
              style={{
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#696969",
                marginBottom: "1rem",
              }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {options && options.length > 0 && (
            <div style={{ marginTop: "1.5rem" }}>
              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#222",
                  marginBottom: "1rem",
                }}
              >
                Options:
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {options.map((option, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "1rem",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      border: "1px solid #e9ecef",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#222",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {option.title || `Option ${index + 1}`}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#696969",
                        lineHeight: "1.5",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: option.description || option,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(author || authorTitle) && (
            <div
              style={{
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              {author && (
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "0.25rem",
                  }}
                >
                  {author}
                </div>
              )}
              {authorTitle && (
                <div
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  {authorTitle}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

const sectionMap = {
  image: BlogSectionImage,
  tag: BlogSectionTag,
  title: BlogSectionTitle,
  "author-date": BlogSectionAuthorDate,
  paragraph: BlogSectionParagraph,
  list: BlogSectionList,
  cta: BlogSectionCTA,
  qa: BlogSectionQA,
  table: BlogSectionTable,
  "numbered-list": BlogSectionNumberedList,
  box: BlogSectionBox,
  cards: BlogSectionCards,
  blockquote: BlogSectionBlockquote,
  "image-with-text": BlogSectionImageWithText,
};

const BlogDynamicPage = () => {
  const { blogId } = useParams();
  const blog = blogs.find((b) => b.id === blogId);
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);

  const numberedListSubRefs = useMemo(
    () =>
      blog?.sections.map((section) =>
        section.type === "numbered-list" && Array.isArray(section.items)
          ? Array(section.items.length)
              .fill()
              .map(() => React.createRef())
          : null
      ) || [],
    [blog]
  );

  const filteredBlogs = blogs.filter((b) => b.id !== blogId);
  const trendingBlogs =
    filteredBlogs.length >= 1 ? [filteredBlogs[filteredBlogs.length - 1]] : [];

  const tocSections = [];
  blog?.sections.forEach((section, idx) => {
    if (section.type === "cta") {
      return;
    }

    if (section.heading) {
      tocSections.push({ heading: section.heading, idx, isSub: false });
    }
  });

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = tocSections.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[tocSections[i].idx];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocSections[i].idx);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocSections]);

  const handleTocClick = (idx) => {
    if (sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: blog?.id?.replace(/-/g, " ") || "Blog Detail", current: true },
  ];

  if (!blog) return <div>Blog not found.</div>;

  return (
    <>
      <div
        className="container blog-dynamic-page top-bottom flex flex-col md:flex-row px-4 md:px-0"
        style={{ gap: 32, margin: "0 auto" }}
      >
        {/* Sidebar */}
        <aside style={{ minWidth: 400, flex: "0 0 400px" }}>
          {/* Trending Blogs */}
          <div className="mb-4 ">
            <h3
              style={{ marginBottom: 16, fontSize: "24px", fontWeight: "600" }}
            >
              Trending Blogs
            </h3>
            <div
              className=""
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {trendingBlogs.map((b) => {
                const firstImage = b.sections.find(
                  (s) => s.type === "image"
                )?.src;
                const firstParagraph = b.sections.find(
                  (s) => s.type === "paragraph"
                )?.content;
                return (
                  <Link key={b.id} href={`/blog/${b.id}`}>
                    <div key={b.id} style={{ background: "#fff" }}>
                      <div className="w-full h-auto border-custom">
                        <img
                          src={firstImage || "/assets/image/blog_image_1.png"}
                          alt={b.title}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      </div>
                      <h4 className="text-[14px] font-semibold text-black my-1">
                        {b.title}
                      </h4>
                      <div className="flex text-[12px] justify-between items-center text-[#888]">
                        <span style={{ textTransform: "capitalize" }}>
                          {b.author}
                        </span>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <Calendar className="w-4 h-4 mr-2 text-[#BFD633]" />
                          {b.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Table of Contents */}
          {tocSections.length > 0 && (
            <>
              <div style={{ position: "sticky", top: 82 }}>
                <div
                  style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}
                >
                  On this page
                </div>
                <div
                  style={{
                    borderRadius: "16px",
                    padding: "10px 12px",
                    marginBottom: 20,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    maxWidth: "100%",
                    zIndex: 2,
                    maxHeight: 550,
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#BFD633 #fff",
                    scrollbarPosition: "outside",
                  }}
                  className="border-custom"
                >
                  <ul style={{ paddingLeft: 0, margin: 0 }}>
                    {tocSections.map((s, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          margin: "5px 0",
                          fontSize: 16,
                          color: "#222",
                          fontWeight: 500,
                          lineHeight: "1.5",
                          wordBreak: "break-word",
                          listStyle: "none",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 24,
                            color: "#BFD633",
                            lineHeight: "24px",
                          }}
                        >
                          •
                        </span>
                        <button
                          onClick={() => handleTocClick(s.idx)}
                          style={{
                            background:
                              activeSection === s.idx ? "#f0f7d4" : "none",
                            border: "none",
                            color: "inherit",
                            font: "inherit",
                            cursor: "pointer",
                            padding: "4px 8px",
                            textAlign: "left",
                            width: "100%",
                            borderRadius: "8px",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {s.heading}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </aside>
        {/* Main Content */}
        <main style={{ flex: 1, minWidth: 0 }}>
          <Breadcrumb breadcrumbs={breadcrumbs} />
          {blog.sections.map((section, idx) => {
            const SectionComponent = sectionMap[section.type];
            if (!SectionComponent) return null;
            if (section.type === "numbered-list") {
              return (
                <SectionComponent
                  key={idx}
                  ref={(el) => (sectionRefs.current[idx] = el)}
                  subRefs={numberedListSubRefs[idx]}
                  {...section}
                />
              );
            }
            return (
              <SectionComponent
                key={idx}
                ref={(el) => (sectionRefs.current[idx] = el)}
                {...section}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};

export default BlogDynamicPage;
