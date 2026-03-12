import { useState, useCallback } from "react";
import {
  FolderOpen, Search, GitBranch, LayoutGrid, Settings,
  ChevronDown, ChevronRight, FileText, X, Menu
} from "lucide-react";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Articles from "@/pages/Articles";

type PageKey = "Home.md" | "Work.md" | "About.md" | "Contact.md" | "Articles.md";

const ALL_FILES: PageKey[] = ["Home.md", "Work.md", "About.md", "Contact.md", "Articles.md"];

function getBaseName(f: PageKey) {
  return f.replace(".md", "");
}

function renderPage(page: PageKey, navigate: (p: PageKey) => void) {
  switch (page) {
    case "Home.md": return <Home navigate={navigate} />;
    case "Work.md": return <Work />;
    case "About.md": return <About />;
    case "Contact.md": return <Contact />;
    case "Articles.md": return <Articles />;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>("Home.md");
  const [openTabs, setOpenTabs] = useState<PageKey[]>(["Home.md"]);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navigate = useCallback((page: PageKey) => {
    setCurrentPage(page);
    setOpenTabs(prev => prev.includes(page) ? prev : [...prev, page]);
    setMobileDrawerOpen(false);
  }, []);

  const closeTab = useCallback((e: React.MouseEvent, tab: PageKey) => {
    e.stopPropagation();
    if (tab === "Home.md") return;
    setOpenTabs(prev => {
      const next = prev.filter(t => t !== tab);
      if (currentPage === tab) {
        const idx = prev.indexOf(tab);
        const fallback = next[Math.max(0, idx - 1)] ?? "Home.md";
        setCurrentPage(fallback);
      }
      return next;
    });
  }, [currentPage]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isTablet = typeof window !== "undefined" && window.innerWidth >= 768 && window.innerWidth < 1280;

  const FileTree = (
    <div className="file-tree">
      <div className="file-tree-logo">&lt;salano /&gt;</div>
      <div className="file-tree-header">
        <ChevronDown size={10} />
        <span>Project</span>
      </div>
      <div className="file-tree-body">
        <div className="tree-folder-row">
          <ChevronDown size={12} color="var(--text-muted)" />
          <FolderOpen size={14} color="var(--text-muted)" />
          <span>stephen-salano</span>
        </div>
        {ALL_FILES.map(file => (
          <div
            key={file}
            className={`tree-file-row${currentPage === file ? " active" : ""}`}
            onClick={() => navigate(file)}
          >
            <FileText size={14} color="var(--text-muted)" />
            <span>
              <span className="tree-fname">{getBaseName(file)}</span><span className="tree-ext">.md</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="ide-root">
      <div className="ide-main">
        {/* Activity Bar */}
        <div className="activity-bar">
          <div className="activity-icon active" title="Files">
            <FolderOpen size={18} />
          </div>
          <div className="activity-icon" title="Search">
            <Search size={18} />
          </div>
          <div className="activity-icon" title="Git">
            <GitBranch size={18} />
          </div>
          <div className="activity-icon" title="Extensions">
            <LayoutGrid size={18} />
          </div>
          <div className="activity-icon activity-spacer" title="Settings">
            <Settings size={18} />
          </div>
        </div>

        {/* File Tree (desktop) */}
        {FileTree}

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <>
            <div className="drawer-overlay" onClick={() => setMobileDrawerOpen(false)} />
            <div className={`mobile-drawer open`}>
              {FileTree}
            </div>
          </>
        )}

        {/* Right Panel */}
        <div className="right-panel">
          {/* Tab Bar (desktop/tablet) */}
          <div className="tab-bar">
            <button
              className="tablet-menu-btn"
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open file tree"
            >
              <Menu size={20} />
            </button>

            {openTabs.map(tab => (
              <div
                key={tab}
                className={`tab-item${currentPage === tab ? " active" : ""}`}
                onClick={() => navigate(tab)}
              >
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                  {getBaseName(tab)}<span style={{ color: "var(--syntax-string)" }}>.md</span>
                </span>
                {tab !== "Home.md" && (
                  <span className="tab-close" onClick={(e) => closeTab(e, tab)}>
                    <X size={10} />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Pill Nav */}
          <div className="mobile-pill-nav">
            {ALL_FILES.map(f => (
              <button
                key={f}
                className={`mobile-pill${currentPage === f ? " active" : ""}`}
                onClick={() => navigate(f)}
              >
                {getBaseName(f)}
              </button>
            ))}
          </div>

          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <span>stephen-salano</span>
            <ChevronRight size={10} />
            <span>{getBaseName(currentPage)}<span style={{ color: "var(--syntax-string)" }}>.md</span></span>
          </div>

          {/* Content Area */}
          <div className="content-area">
            {renderPage(currentPage, navigate)}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-left">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        <div className="status-right">
          <span>UTF-8&nbsp;&nbsp;LF&nbsp;&nbsp;stephen-salano/</span>
        </div>
      </div>
    </div>
  );
}
