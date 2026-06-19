import React from "react";
import "../assets/styles/Research.scss";

type ResearchItem = {
  title: string;
  conference: string;
  authors: string;
  links?: { label: string; url: string }[];
};

const RESEARCH_ROWS: ResearchItem[] = [
  {
    title:
      "LiveOIBench: Can Large Language Models Outperform Human Contestants in Informatics Olympiads?",
    conference: "ICML 2026",
    authors:
      "Kaijian Zou, Aaron Xiong, Yunxiang Zhang, Xinliang Frederick Zhang, Yueqi Ren, Jirong Yang, Ayoung Lee, Shitanshu Bhushan, Lu Wang",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2510.09595" },
      { label: "Website", url: "https://liveoibench.github.io" },
    ],
  },
];

function Research() {
  return (
    <section id="research" className="research-container">
      <h1>Research</h1>
      <div className="research-list">
        {RESEARCH_ROWS.map((row, idx) => (
          <article key={idx} className="research-row">
            <div className="research-row-line research-title">{row.title}</div>
            <div className="research-row-line research-conference">
              {row.conference}
            </div>
            <div className="research-row-line research-authors">
              {row.authors}
            </div>
            <div className="research-row-line research-links">
              {row.links && row.links.length > 0 ? (
                row.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="research-link"
                  >
                    {l.label}
                  </a>
                ))
              ) : (
                <span className="no-links">No links available</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Research;
