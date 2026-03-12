export const runConsoleEasterEgg = () => {
  const green = 'color: #22c55e; font-family: monospace; font-size: 11px;';
  const muted = 'color: #6F737A; font-family: monospace; font-size: 11px;';
  const secondary = 'color: #A9B7C6; font-family: monospace; font-size: 11px;';

  // Stage 1 — Spring Boot ASCII banner
  console.log(
    '%c  .   ____          _            __ _ _\n' +
    " /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n" +
    '( ( )\\___ | \'_ | \'_| | \'_ \\/ _` | \\ \\ \\ \\\n' +
    ' \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n' +
    "  '  |____| .__|_| |_|_| |_\\__, | / / / /\n" +
    ' =========|_|==============|___/=/_/_/_/',
    green
  );

  // Stage 2 — Application name
  console.log('%c\n :: Stephen Salano Portfolio  :: (v1.0.0)\n', secondary);

  // Stage 3 — Fake startup logs
  const logs = [
    '[main] INFO  io.salano.portfolio.App      - Starting application...',
    '[main] INFO  io.salano.portfolio.App      - JVM running for 0.842s',
    '[main] INFO  io.salano.portfolio.Security - JWT filter chain initialised',
    '[main] INFO  io.salano.portfolio.Config   - Multi-tenant context loaded',
    '[main] INFO  io.salano.portfolio.Router   - Page routes registered: 5',
    '',
    '✓ Application started in 1.337s',
  ];
  logs.forEach(line => console.log('%c' + line, muted));

  // Stage 4 — Personal comment block
  const message = [
    '',
    "// hey. you actually looked in here.",
    "// most people don't.",
    '//',
    "// if you're reading this, you're probably the kind of",
    "// engineer I'd want to work with.",
    '//',
    '// contact@stephensalano.dev',
    '// github.com/Stephen-Salano',
    '',
  ];
  message.forEach(line => console.log('%c' + line, green));
};
