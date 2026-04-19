export const blogs = [
    {
        slug: 'modern-reactjs-tech-stack-2026',
        title: 'Modern ReactJS Tech Stack for Building Production Web Apps (2026)',
        excerpt:
            'React is just the beginning. Building a real production web app demands an ecosystem — state, routing, data, styling, testing, and tooling. Here is the stack I reach for in 2026.',
        categories: ['React', 'Frontend', 'Architecture'],
        date: '2026-02-11',
        readTime: '6 min read',
        cover: '/react-stack-2026.jpeg',
        content: [
            {
                type: 'paragraph',
                text: 'React is just the beginning. Shipping a real production web application requires a powerful ecosystem of tools around the view layer — and the choices you make early compound for years. This is the stack I reach for in 2026 when starting a serious ReactJS project, grouped by the problem each tool actually solves.',
            },
            {
                type: 'image',
                src: '/react-stack-2026.jpeg',
                alt: 'ReactJS production tech stack diagram: build tools, state management, routing, API, styling, testing, type safety, and tooling radiating around a central React logo.',
            },
            {
                type: 'heading',
                text: 'Build tools',
            },
            {
                type: 'paragraph',
                text: 'Vite is now the default for new React apps — cold starts in milliseconds, native ESM, and a plugin story that has mostly absorbed what we used to get from Webpack. Webpack is still around for legacy apps and bespoke build pipelines, and Babel keeps doing the quiet work of transforming syntax the runtime does not ship yet.',
            },
            {
                type: 'heading',
                text: 'State management',
            },
            {
                type: 'paragraph',
                text: 'I split state into two buckets. Server state — anything that lives in a database somewhere — belongs in React Query (TanStack Query), which handles caching, revalidation, and background updates so you stop hand-rolling useEffect + fetch spaghetti. Client state — UI flags, form drafts, ephemeral selections — goes in Zustand for small apps or Redux Toolkit when the team is larger and we need the discipline of reducers and devtools.',
            },
            {
                type: 'heading',
                text: 'Routing',
            },
            {
                type: 'paragraph',
                text: 'React Router remains the workhorse for client-rendered SPAs. For anything with SEO or mixed SSR needs, I reach for Next.js instead and let its file-system router do the work. Either way, thinking of routes as data — not just components — is what makes a codebase scale.',
            },
            {
                type: 'heading',
                text: 'API & data fetching',
            },
            {
                type: 'paragraph',
                text: 'Axios for HTTP when I want interceptors and cleaner error semantics; the native fetch when the app is simple. Both sit behind TanStack Query so components never call the network directly — they subscribe to query keys. That single rule removes a surprising amount of bugs.',
            },
            {
                type: 'heading',
                text: 'Styling',
            },
            {
                type: 'paragraph',
                text: 'Tailwind CSS is my default: utility classes keep visual decisions in the markup, design tokens live in one config file, and unused CSS is purged by default. Styled Components still earn their keep when a design system needs dynamic, prop-driven styles. Sass shows up on legacy projects or when a team already has a mature variable library.',
            },
            {
                type: 'heading',
                text: 'Testing',
            },
            {
                type: 'paragraph',
                text: 'Jest + React Testing Library for unit and component tests — assertions written from the user’s perspective, not the implementation’s. For the critical happy paths I add Playwright or Cypress on top. The rule of thumb: write tests that survive a refactor.',
            },
            {
                type: 'heading',
                text: 'Type safety',
            },
            {
                type: 'paragraph',
                text: 'TypeScript is non-negotiable for anything beyond a weekend project. The cost is a steeper first day; the payoff is every subsequent day. Pair it with Zod at the edges of your app (API responses, form input) and you get runtime validation that actually matches your static types.',
            },
            {
                type: 'heading',
                text: 'Code quality & package management',
            },
            {
                type: 'paragraph',
                text: 'ESLint catches the bugs, Prettier ends the formatting debates, and both should run on pre-commit so bad code never reaches review. For package management, pnpm is my preferred choice in 2026 — fast, disk-efficient, and strict about phantom dependencies. npm and Yarn remain fine defaults for smaller projects.',
            },
            {
                type: 'heading',
                text: 'Putting it together',
            },
            {
                type: 'paragraph',
                text: 'You do not need every tool on day one. Start with Vite + React + TypeScript + Tailwind + TanStack Query, and add the rest only when a real pain point demands it. Whether you are a junior developer learning the ecosystem or a senior engineer designing the next platform, knowing the shape of this stack — and why each piece exists — is what separates shipping a production app from wrestling with one.',
            },
        ],
    },
    {
        slug: 'angular-performance-mistakes-i-stopped-making',
        title: '10 Angular Performance Mistakes I Stopped Making (After 3 Years on a Microservices App)',
        excerpt:
            'Angular performance isn’t a feature — it’s a mindset. Three years into a microservices frontend, here are the ten habits that slowed us down most, and what I do instead now.',
        categories: ['Angular', 'Performance', 'Frontend'],
        date: '2026-03-22',
        readTime: '7 min read',
        cover: '/angular-performance-killers.jpeg',
        content: [
            {
                type: 'paragraph',
                text: 'For three years I worked on a large Angular application split across a handful of microservices — a dashboard stitched together from independently deployed frontends, each talking to its own backend. At that scale, small habits turn into big bills: an extra change-detection pass here, a leaked subscription there, and suddenly the whole product feels sluggish.',
            },
            {
                type: 'paragraph',
                text: 'I used to write code that "just worked" on my laptop. Production taught me the hard way — slow UI, memory leaks, bundle sizes that ballooned every sprint. Angular performance, I learned, isn’t a feature you bolt on before a release. It’s a mindset you bring to every file you touch. Here are the ten mistakes I stopped making, and what I do instead.',
            },
            {
                type: 'image',
                src: '/angular-performance-killers.jpeg',
                alt: '10 Angular performance killers and optimized fixes: OnPush, async pipe, signals, trackBy, lazy loading, CDK virtual scroll, and production builds.',
            },
            {
                type: 'heading',
                text: '1. Default change detection everywhere',
            },
            {
                type: 'paragraph',
                text: 'Out of the box Angular runs change detection on every component tree on every async tick. In a big tree, that’s wasteful — and on a microservices frontend with dozens of widgets mounted at once, it becomes the hot loop of the app. Switch to ChangeDetectionStrategy.OnPush by default and pair it with Signals or immutable inputs. Let Angular re-render only when data it owns has actually changed.',
            },
            {
                type: 'heading',
                text: '2. Manual subscriptions',
            },
            {
                type: 'paragraph',
                text: '.subscribe() in a component without unsubscribing is the single biggest source of memory leaks I’ve seen. Let the template do the work with the | async pipe, or use takeUntilDestroyed() (Angular 16+). If you absolutely need a manual subscription, pair every .subscribe() with a takeUntil(this.destroy$). Your long-lived dashboards will thank you after the fifth route change.',
            },
            {
                type: 'heading',
                text: '3. Functions in templates',
            },
            {
                type: 'paragraph',
                text: '{{ getTotal() }} looks innocent. With default change detection it runs every cycle — hundreds of times per interaction. Move that logic into a computed() signal, a pure pipe, or precompute it in the component and bind to a property. If you see a function call in a hot template, you’ve probably found the scroll jank.',
            },
            {
                type: 'heading',
                text: '4. No trackBy in *ngFor',
            },
            {
                type: 'paragraph',
                text: 'Without trackBy, Angular re-renders the entire list whenever the array reference changes. On a 1,000-row table, that’s a freeze. Provide a stable identity: trackBy: (_, item) => item.id. With the new @for block, trackBy is part of the syntax — there’s no excuse to skip it.',
            },
            {
                type: 'heading',
                text: '5. Eager loading modules',
            },
            {
                type: 'paragraph',
                text: 'Shipping the whole app on first load is the easiest way to blow your bundle budget. Lazy-load feature routes, lean on @defer blocks for below-the-fold views, and use a preloading strategy for routes users are likely to hit next. On our microservices frontend, this single change cut initial JS by nearly half.',
            },
            {
                type: 'heading',
                text: '6. Logic inside templates',
            },
            {
                type: 'paragraph',
                text: 'Templates should describe what to render, not how to compute it. Heavy ternaries, nested pipes, and inline arithmetic obscure intent and make change detection more expensive. Push logic into the component as a getter, a computed signal, or a dedicated service method — your reviewers and your CPU will both be happier.',
            },
            {
                type: 'heading',
                text: '7. Importing full libraries',
            },
            {
                type: 'paragraph',
                text: 'import _ from \'lodash\' pulls in ~70KB. import debounce from \'lodash-es/debounce\' pulls in what you need. Same story with Angular Material, RxJS, and date-fns — import the specific operators or modules you use, and let tree-shaking do its job. After every release, open source-map-explorer and make sure nothing sneaky slipped into the vendor bundle.',
            },
            {
                type: 'heading',
                text: '8. Rendering huge lists',
            },
            {
                type: 'paragraph',
                text: 'The DOM is not a database. 10,000 rows = 10,000 nodes = a frozen browser. Use cdk-virtual-scroll-viewport or pagination. Render only what the user can actually see. On one of our services, swapping a plain *ngFor for virtual scroll turned a 4-second freeze into a smooth 60fps scroll.',
            },
            {
                type: 'heading',
                text: '9. Misusing ngDoCheck',
            },
            {
                type: 'paragraph',
                text: 'ngDoCheck fires on every change detection run. Putting any non-trivial work there is the fastest way to tank performance. If you think you need ngDoCheck, you probably want an OnPush component backed by signals or a computed() — not a custom check running thousands of times per minute.',
            },
            {
                type: 'heading',
                text: '10. Using a dev build in production',
            },
            {
                type: 'paragraph',
                text: 'I’ve actually seen this ship. ng serve is not ng build --configuration production. Without AOT, tree-shaking, and minification, you ship megabytes of dead code and slow runtime checks. Automate your production build in CI, enforce bundle budgets in angular.json, and verify the output with a smoke test before it goes live.',
            },
            {
                type: 'heading',
                text: 'What improved',
            },
            {
                type: 'paragraph',
                text: 'After fixing the ten above, the app was noticeably faster, the code was cleaner, and the users noticed. But the real win was cultural: performance stopped being something we profiled twice a year and started being a habit we brought to every PR.',
            },
            {
                type: 'heading',
                text: 'The lesson',
            },
            {
                type: 'paragraph',
                text: 'Write optimized Angular from day one. Default to OnPush, default to the async pipe, default to trackBy, default to lazy loading. Don’t wait for a Monday-morning incident to teach you what you could have learned from the docs.',
            },
        ],
    },
    {
        slug: 'full-stack-react-native-lessons',
        title: 'Shipping Full-Stack React Native: What Owning the Whole App Taught Me',
        excerpt:
            'Full-stack isn’t a job title — it’s the habit of not handing the problem off when it gets hard. A React Native client project taught me what that really means when a user reports a crash at 10pm.',
        categories: ['React Native', 'Full-Stack', 'Mobile'],
        date: '2026-04-05',
        readTime: '6 min read',
        cover: { type: 'svg', name: 'react-native' },
        ogImage: '/headShot.jpg',
        content: [
            {
                type: 'paragraph',
                text: 'A client came to me with a web dashboard that already served their ops team well. What they needed next was a phone in every field technician’s pocket — same data, same accounts, same audit trail, but in an app the team could use one-handed while standing in a warehouse. The budget said one developer. The timeline said three months. That developer was me, end to end: React Native on the device, a Node/Express API in the middle, Postgres underneath, and every deploy in between.',
            },
            {
                type: 'paragraph',
                text: 'Full-stack, for me, isn’t a job title I put on a CV. It’s the discipline of not handing the problem off when it gets hard. When a field tech scans a barcode on Android 9 and the request silently times out, I don’t get to say "that’s a backend bug" or "that’s a device issue" — I have to follow the failure from the tap through the API to the row it was supposed to write. Here’s what shipping that React Native app taught me about doing that well.',
            },
            {
                type: 'heading',
                text: 'One language across the stack pays for itself',
            },
            {
                type: 'paragraph',
                text: 'TypeScript on the device, TypeScript on the server, a shared `@org/types` package between them. When an API field changed, the type error surfaced on both sides at compile time. That single choice probably saved a dozen runtime crashes over the life of the project — and more importantly, it let me stay in one mental model across the whole day. No context switch tax.',
            },
            {
                type: 'heading',
                text: 'Design the API like a contract, not a hotline',
            },
            {
                type: 'paragraph',
                text: 'The web client I can ship in a minute. The mobile client has to go through an app store, which means some fraction of users will stay on last month’s build for weeks. So every endpoint gets versioned. New fields are additive. Deletions wait a release. Old clients keep working. This discipline felt slow on day one and obvious on day thirty, when a user emailed a screenshot from a build two versions behind and everything still functioned.',
            },
            {
                type: 'heading',
                text: 'Offline is not an edge case',
            },
            {
                type: 'paragraph',
                text: 'A field technician in a warehouse has bars. The same technician one aisle over does not. If your app assumes connectivity, it will feel broken the moment it matters most. I designed write operations as a local queue from day one — SQLite on-device, optimistic UI, retry on reconnect, conflict resolution on the server. It took an extra week up front. It avoided every "the app froze" complaint that would have come later.',
            },
            {
                type: 'heading',
                text: 'Platform quirks are where the budget goes',
            },
            {
                type: 'paragraph',
                text: 'iOS safe areas, Android back-button behavior, push notification permissions that changed between OS versions, a keyboard that covers the submit button on certain phones. React Native gets you 90% of the way in one codebase — the last 10% is where the hours hide. I learned to budget generously for it, test on a matrix of real devices (not just the simulator), and accept that "it works on my iPhone" is not a release criterion.',
            },
            {
                type: 'heading',
                text: 'Observability across the seam',
            },
            {
                type: 'paragraph',
                text: 'The thing that made me dangerous on this project wasn’t any individual piece of code — it was being able to correlate a client-side crash in Sentry with the server request that preceded it, in under a minute. Attach a request ID on the client, log it on the server, surface it in crash reports. When the inevitable "something broke" message comes in at 10pm, you want one trace, not three dashboards.',
            },
            {
                type: 'heading',
                text: 'Own the deploy pipeline',
            },
            {
                type: 'paragraph',
                text: 'EAS Build for the native binaries, OTA updates for JS-only changes, GitHub Actions for the server, and a staging environment the client could tap through before every release. One developer, one pipeline, one green check before anything reached production. The full-stack multiplier isn’t writing backend and frontend — it’s knowing where the whole thing can break and instrumenting that on purpose.',
            },
            {
                type: 'heading',
                text: 'What "full-stack" actually means to me now',
            },
            {
                type: 'paragraph',
                text: 'Not "I can touch every layer." More like: "I can trace a single user action through every layer, and I know which layer I’d fix first if it broke." That mindset is what React Native — and owning this project from schema to screen — taught me. When a client hires me as a solo dev, that’s what they’re actually paying for. The app is just the artifact.',
            },
        ],
    },
    {
        slug: 'freelance-engineering-isnt-the-code',
        title: 'The Hardest Part of Freelance Engineering Isn’t the Code',
        excerpt:
            'Three years of freelance taught me that the bugs that lose you clients aren’t in the codebase — they’re in the scope doc. Here’s what I do differently now.',
        categories: ['Freelance', 'Consulting', 'Process'],
        date: '2026-04-15',
        readTime: '5 min read',
        cover: { type: 'svg', name: 'freelance' },
        ogImage: '/headShot.jpg',
        content: [
            {
                type: 'paragraph',
                text: 'When I started freelancing, I thought the hard part would be the code. Three years in, the hardest parts are the conversations that happen before any code is written — and the ones that happen when a client asks for "just one small change" in week six. The engineering is the easy bit. The engineering around the engineering is the job.',
            },
            {
                type: 'heading',
                text: 'A vague brief will cost you twice',
            },
            {
                type: 'paragraph',
                text: '"A simple e-commerce site" is not a brief. It’s a Rorschach test. I’ve learned to refuse to quote until I have, in writing, the list of pages, the payment provider, the shipping logic, the admin workflow, and the name of the human who owns each decision. It feels slow. It is slow. It is also the difference between a profitable project and a death march.',
            },
            {
                type: 'heading',
                text: 'Scope creep is a kindness problem',
            },
            {
                type: 'paragraph',
                text: 'Every freelancer I know who burned out did so not because clients were bad, but because they wanted to be helpful. "Sure, I can add that — no problem." Ten of those add up to a month of unpaid work. I still want to be helpful. I just do it by writing down what’s in scope, what’s out of scope, and what the change-order rate is, so everyone knows the rules before we start playing.',
            },
            {
                type: 'heading',
                text: 'Say no to the project that isn’t right',
            },
            {
                type: 'paragraph',
                text: 'The worst projects I took on were the ones where I knew, during the first call, that the client and I weren’t aligned on what "done" meant. I took them anyway because the money was nice. Every one of them cost more in stress and rework than the revenue was worth. Now I trust the first-call signal. Saying no early is cheaper than saying yes and regretting it.',
            },
            {
                type: 'heading',
                text: 'Ship weekly, even when it’s boring',
            },
            {
                type: 'paragraph',
                text: 'Clients hate silence. An unasked-for Friday update — a staging link, a screenshot, a two-line "here’s what moved this week" — is the single highest-leverage thing I do. It prevents the 2am "is everything okay with the project?" email. It makes the next invoice easier to send. It also forces me to keep the work ship-ready, which is its own discipline.',
            },
            {
                type: 'heading',
                text: 'Document handoffs like you’ll be hit by a bus',
            },
            {
                type: 'paragraph',
                text: 'When a client’s in-house team takes over, what they get from me is a README that actually runs, an environment variable checklist, a short Loom walking through the weird bits, and a list of the three things I would fix next. Not because I’m being generous — because it’s the reputation I want to leave behind, and because the next freelancer they hire will say "whoever built this knew what they were doing," which is how referrals happen.',
            },
            {
                type: 'heading',
                text: 'Price the value, not the hour',
            },
            {
                type: 'paragraph',
                text: 'Hourly rates punish me for being fast and experienced. A fixed price, tied to a clear scope, aligns my interests with the client’s — I get paid for shipping, they pay once for what they’re buying. It also forces the conversation I should be having anyway: what is this project actually worth to your business?',
            },
            {
                type: 'heading',
                text: 'The code is the easy part',
            },
            {
                type: 'paragraph',
                text: 'Every year I freelance, more of my time goes into scoping, communicating, and writing things down — and less into fighting frameworks. That trend has been the single biggest improvement in both my work and my life. The engineers who last in freelance aren’t the ones who write the cleverest code. They’re the ones who make the business around the code boring and predictable, for themselves and for their clients.',
            },
        ],
    },
]

export function getBlogBySlug(slug) {
    return blogs.find((b) => b.slug === slug)
}
