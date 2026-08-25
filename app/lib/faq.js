export const faqs = [
  {
    question: 'Does NFSFU234FormValidation work without a build step?',
    answer:
      'Yes. Drop in the CDN script and stylesheet tags and it works in plain HTML with no bundler required. It also works identically in React, Next.js, and Expo web via npm.'
  },
  {
    question: 'Does it validate file and image uploads?',
    answer:
      'Yes, as of v3. validateFile() and validateAllFile() handle required/min/max file counts, MIME or extension allowlists, max size, and image dimension limits.'
  },
  {
    question: 'Is it safe to use in a Next.js Server Component?',
    answer:
      'The library reads and manipulates the DOM directly, so it must run client-side. Call it inside a useEffect() in a Client Component ("use client") rather than during server render.'
  },
  {
    question: 'What happened to the password hashing functions?',
    answer:
      'hashPassword(), verifyPassword(), and passwordMatch() were removed in v3. Client-side password hashing never protected a password in transit — that responsibility belongs to your backend.'
  },
  {
    question: 'Does it have any runtime dependencies?',
    answer:
      'None. package.json\'s dependencies field is genuinely empty as of v3 — nothing to audit, nothing to update.'
  },
  {
    question: 'Is v2 still supported?',
    answer:
      'v2 docs remain available for reference, but new features and fixes land in v3 going forward. See the Migration Guide for upgrading.'
  }
]