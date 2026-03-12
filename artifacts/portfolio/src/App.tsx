import { useState, useCallback, useEffect } from "react";
import { runConsoleEasterEgg } from "@/utils/consoleEasterEgg";
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

function StarLogo({ gradientId }: { gradientId: string }) {
  return (
    <div className="logo-lockup">
      <svg
        width="20"
        height="20"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d="M150 0 Q150 150 300 150 Q150 150 150 300 Q150 150 0 150 Q150 150 150 0 Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
      <span className="logo-wordmark">salano</span>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>("Home.md");
  const [openTabs, setOpenTabs] = useState<PageKey[]>(["Home.md"]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    runConsoleEasterEgg();
  }, []);

  useEffect(() => {
    const pageName = getBaseName(currentPage);
    document.title = `${pageName} | Stephen Salano`;
  }, [currentPage]);

  const navigate = useCallback((page: PageKey) => {
    setCurrentPage(page);
    setOpenTabs(prev => prev.includes(page) ? prev : [...prev, page]);
    setDrawerOpen(false);
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

  const FileTreeRows = (
    <>
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
    </>
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

        {/* Desktop / tablet file tree panel */}
        <div className="file-tree">
          <StarLogo gradientId="salanoStarGradientPanel" />
          <div className="file-tree-header">
            <ChevronDown size={10} />
            <span>Project</span>
          </div>
          <div className="file-tree-body">
            {FileTreeRows}
          </div>
        </div>

        {/* Drawer (tablet hamburger + mobile header hamburger) */}
        {drawerOpen && (
          <>
            <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />
            <div className="mobile-drawer open">
              {/* Logo shown in drawer on tablet, hidden on mobile (CSS) */}
              <div className="drawer-logo">
                <StarLogo gradientId="salanoStarGradientDrawer" />
              </div>
              <div className="file-tree-header">
                <ChevronDown size={10} />
                <span>Project</span>
              </div>
              <div className="file-tree-body">
                {FileTreeRows}
              </div>
            </div>
          </>
        )}

        {/* Right panel */}
        <div className="right-panel">

          {/* Mobile header — logo left, hamburger right — CSS shows only on mobile */}
          <div className="mobile-header">
            <StarLogo gradientId="salanoStarGradientMobile" />
            <button
              className="mobile-menu-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Tab bar — shown on desktop/tablet */}
          <div className="tab-bar">
            {/* Tablet hamburger in tab bar */}
            <button
              className="tablet-menu-btn"
              onClick={() => setDrawerOpen(true)}
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
