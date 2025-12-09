import React from "react";

const sectionAccents = [
  "from-cyan-500/20 via-blue-500/10 to-transparent",
  "from-violet-500/20 via-purple-500/10 to-transparent",
  "from-emerald-500/20 via-teal-500/10 to-transparent",
  "from-amber-500/20 via-orange-500/10 to-transparent",
  "from-rose-500/20 via-pink-500/10 to-transparent",
  "from-indigo-500/20 via-blue-500/10 to-transparent",
];

// Check if item is a bullet point
function isBulletPoint(item) {
  if (typeof item !== "string") return false;
  const trimmed = item.trim();
  return /^[●⬆⬇⬅➡✅❌🎯💡🚀📊💰📈📉🔥⭐✨🎙👥🛍💬💄🌱💻🤝🤖💡💰💻🤝]/u.test(trimmed) ||
         /^[•\-\*]\s/.test(trimmed);
}

// Check if item is a numbered list item
function isNumberedItem(item) {
  if (typeof item !== "string") return false;
  const trimmed = item.trim();
  return /^\d+[\.\)]\s/.test(trimmed) || /^[1-9]️⃣/.test(trimmed);
}

// Check if content looks like a table
function isTable(content) {
  if (!Array.isArray(content)) return false;
  // Check if it's an object with table structure
  if (typeof content === "object" && !Array.isArray(content) && content.headers) return true;
  // Check if array items contain pipe separators (table format)
  return content.some(item => typeof item === "string" && item.includes("|"));
}

// Render table from string format (e.g., "Header1 | Header2 | Header3")
function renderTableFromString(content) {
  const lines = content.filter(item => typeof item === "string" && item.includes("|"));
  if (lines.length === 0) return null;

  const rows = lines.map(line => line.split("|").map(cell => cell.trim()).filter(Boolean));
  if (rows.length === 0) return null;

  const headers = rows[0];
  const dataRows = rows.slice(1);

  return (
    <div className="overflow-x-auto my-8 -mx-2 px-2">
      <div className="min-w-full inline-block align-middle">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-[#5A2AFF] via-[#7c3aed] to-[#ff6b39]">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-left text-sm font-bold text-white first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`transition-colors ${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
                } hover:bg-[#f0f4ff]`}
              >
                {headers.map((_, colIdx) => (
                  <td
                    key={colIdx}
                    className="px-6 py-4 text-sm text-[#374151] border-b border-[#e5e7eb] last:border-b-0"
                  >
                    {row[colIdx] || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Render structured content with smart detection
function renderContent(content) {
  if (React.isValidElement(content)) return content;
  
  if (typeof content === "object" && !Array.isArray(content)) {
    // Handle new structure: {content: [], type: "list" | "paragraph" | "numbered"}
    if (content.content && Array.isArray(content.content)) {
      const filtered = content.content.filter(item => item !== "" && item !== null && item !== undefined);
      if (filtered.length === 0) return null;

      if (content.type === "list") {
        return (
          <ul className="space-y-3 mb-6 list-none pl-0">
            {filtered.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 group">
                <span className="text-[#5A2AFF] mt-1.5 flex-shrink-0 text-lg font-bold group-hover:scale-110 transition-transform">●</span>
                <span className="flex-1 text-[#374151] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (content.type === "numbered") {
        return (
          <ol className="space-y-3 mb-6 list-decimal pl-8 marker:text-[#5A2AFF] marker:font-semibold">
            {filtered.map((item, idx) => (
              <li key={idx} className="leading-relaxed text-[#374151] pl-2">
                {item}
              </li>
            ))}
          </ol>
        );
      }

      if (content.type === "paragraph") {
        return (
          <div className="space-y-4 mb-6">
            {filtered.map((para, idx) => (
              <p key={idx} className="leading-relaxed text-[#374151] text-[15px]">
                {para}
              </p>
            ))}
          </div>
        );
      }

      // Fallback: if type not specified, auto-detect
      return renderContent(filtered);
    }

    // Handle table object format
    if (content.headers && content.rows) {
      return (
        <div className="overflow-x-auto my-8 -mx-2 px-2">
          <div className="min-w-full inline-block align-middle">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-[#5A2AFF] via-[#7c3aed] to-[#ff6b39]">
                  {content.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className="px-6 py-4 text-left text-sm font-bold text-white first:rounded-tl-xl last:rounded-tr-xl"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={`transition-colors ${
                      rowIdx % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
                    } hover:bg-[#f0f4ff]`}
                  >
                    {content.headers.map((_, colIdx) => (
                      <td
                        key={colIdx}
                        className="px-6 py-4 text-sm text-[#374151] border-b border-[#e5e7eb] last:border-b-0"
                      >
                        {row[colIdx] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (Array.isArray(content)) {
    // Filter out empty strings
    const filtered = content.filter(item => item !== "" && item !== null && item !== undefined);
    if (filtered.length === 0) return null;

    // Check if array contains a table object
    const tableObj = filtered.find(item => typeof item === "object" && !Array.isArray(item) && item.headers);
    if (tableObj) {
      const otherItems = filtered.filter(item => item !== tableObj);
      const otherContent = otherItems.length > 0 ? renderContent(otherItems) : null;
      return (
        <div className="space-y-4">
          {otherContent}
          {renderContent(tableObj)}
        </div>
      );
    }

    // Check for table format (string-based)
    if (isTable(filtered)) {
      const tableElement = renderTableFromString(filtered);
      if (tableElement) return tableElement;
    }

    // Group content into paragraphs and lists
    const elements = [];
    let currentList = [];
    let currentListType = null; // 'bullet' or 'numbered'
    let currentParagraphs = [];

    function flushParagraphs() {
      if (currentParagraphs.length > 0) {
        elements.push(
          <div key={`para-${elements.length}`} className="space-y-4 mb-6">
            {currentParagraphs.map((para, idx) => (
              <p key={idx} className="leading-relaxed text-[#374151] text-[15px]">
                {para}
              </p>
            ))}
          </div>
        );
        currentParagraphs = [];
      }
    }

    function flushList() {
      if (currentList.length > 0) {
        if (currentListType === "bullet") {
          elements.push(
            <ul key={`list-${elements.length}`} className="space-y-3 mb-6 list-none pl-0">
              {currentList.map((item, idx) => {
                const cleanItem = item.replace(/^[●⬆⬇⬅➡✅❌🎯💡🚀📊💰📈📉🔥⭐✨🎙👥🛍💬💄🌱💻🤝🤖💡💰💻🤝•\-\*]\s*/, "").trim();
                return (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-[#5A2AFF] mt-1.5 flex-shrink-0 text-lg font-bold group-hover:scale-110 transition-transform">●</span>
                    <span className="flex-1 text-[#374151] leading-relaxed">{cleanItem || item}</span>
                  </li>
                );
              })}
            </ul>
          );
        } else if (currentListType === "numbered") {
          elements.push(
            <ol key={`list-${elements.length}`} className="space-y-3 mb-6 list-decimal pl-8 marker:text-[#5A2AFF] marker:font-semibold">
              {currentList.map((item, idx) => {
                const cleanItem = item.replace(/^\d+[\.\)]\s*/, "").replace(/^[1-9]️⃣\s*/, "").trim();
                return (
                  <li key={idx} className="leading-relaxed text-[#374151] pl-2">
                    {cleanItem || item}
                  </li>
                );
              })}
            </ol>
          );
        }
        currentList = [];
        currentListType = null;
      }
    }

    filtered.forEach((item) => {
      if (typeof item === "object" && !Array.isArray(item)) {
        flushList();
        flushParagraphs();
        // Handle nested content objects
        if (item.content && item.type) {
          elements.push(
            <div key={`nested-${elements.length}`}>
              {renderContent(item)}
            </div>
          );
        } else {
          elements.push(<div key={`custom-${elements.length}`}>{item}</div>);
        }
        return;
      }

      if (typeof item !== "string") {
        flushList();
        flushParagraphs();
        elements.push(<div key={`custom-${elements.length}`}>{item}</div>);
        return;
      }

      const trimmed = item.trim();
      if (!trimmed) {
        flushList();
        flushParagraphs();
        return;
      }

      if (isBulletPoint(trimmed)) {
        if (currentListType !== "bullet") {
          flushList();
          flushParagraphs();
          currentListType = "bullet";
        }
        currentList.push(trimmed);
      } else if (isNumberedItem(trimmed)) {
        if (currentListType !== "numbered") {
          flushList();
          flushParagraphs();
          currentListType = "numbered";
        }
        currentList.push(trimmed);
      } else {
        flushList();
        currentParagraphs.push(trimmed);
      }
    });

    flushList();
    flushParagraphs();

    return elements.length > 0 ? <div className="space-y-4">{elements}</div> : null;
  }

  if (typeof content === "string") {
    return (
      <div className="space-y-4 mb-6">
        {content
          .split(/\n{2,}/)
          .filter(Boolean)
          .map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed text-[#374151] text-[15px]">
              {paragraph}
            </p>
          ))}
      </div>
    );
  }

  return null;
}

export default function CaseStudy({ title, data = {} }) {
  const entries = Object.entries(data);

  return (
    <section className="w-full mt-12 mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {title && (
        <header className="mb-16 text-center md:text-left">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#5A2AFF]/10 to-[#ff6b39]/10 border border-[#5A2AFF]/20">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5A2AFF]">
                Case Study
              </span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0c2233] mb-6 leading-tight">
            {title}
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#ff6b39] via-[#5A2AFF] to-[#ff6b39] rounded-full mx-auto md:mx-0" />
        </header>
      )}

      <div className="space-y-8 sm:space-y-10">
        {entries
          .filter(([heading, content]) => {
            // Skip empty sections
            if (!content) return false;
            if (Array.isArray(content) && content.length === 0) return false;
            if (typeof content === "string" && content.trim() === "") return false;
            if (typeof content === "object" && !Array.isArray(content) && content.content && Array.isArray(content.content) && content.content.length === 0) return false;
            return true;
          })
          .map(([heading, content], idx) => {
            const accent =
              sectionAccents[idx % sectionAccents.length] ??
              "from-white/10 to-transparent";

            return (
              <article
                key={heading}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-[#e5e7eb] p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent} opacity-100`}
                />
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-[#5A2AFF] via-transparent to-[#ff6b39] pointer-events-none" />
                
                <div className="relative space-y-6">
                  {/* Section header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#e5e7eb]/50">
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#5A2AFF] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#5A2AFF]/20">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0c2233] leading-tight">
                        {heading}
                      </h2>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-6 text-[#374151]">
                    {renderContent(content)}
                  </div>
                </div>
              </article>
            );
          })}

        {entries.length === 0 && (
          <div className="rounded-2xl border-2 border-dashed border-[#d1d5db] p-12 text-center bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
            <p className="text-[#6b7280] text-lg font-medium">
              Add section data to bring this case study to life.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
