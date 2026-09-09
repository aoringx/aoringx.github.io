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
  {
    title:
      "Precision As You Need: A Stochastic-Computing Mixture-of-Precision Neural Network Accelerator",
    conference: "HPCA 2027 (Preprint)",
    authors:
      "Haoran Jin, Barry Lyu, Kangqi Zhang, Jirong Yang, Soren Walther, Jonathan Postelnik, Rachel Ding, Justin Shin, Cheng Chiu, Aaron Xiong, Nathan Bleier",
    links: [{ label: "Paper", url: "" }],
  },
];

const HIGHLIGHTED_AUTHOR = "Aaron Xiong";

function renderAuthors(authors: string) {
  return authors.split(", ").map((author, index) => (
    <React.Fragment key={author}>
      {index > 0 && ", "}
      {author === HIGHLIGHTED_AUTHOR ? (
        <strong className="research-author-highlight">{author}</strong>
      ) : (
        author
      )}
    </React.Fragment>
  ));
}

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
              {renderAuthors(row.authors)}
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
