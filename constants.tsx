
import { ArchitectureLayer } from './types';

export const ARCHITECTURE_DATA: ArchitectureLayer[] = [
  {
    id: 'layer-1',
    title: 'Client Side',
    gradient: 'from-indigo-500 to-blue-600',
    components: [
      {
        id: 'c1',
        name: 'Web Browser',
        sub: 'User Interface Runtime',
        description: 'The modern canvas where AI interactions come to life using WebGPU and V8.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
        icon: '🌐'
      },
      {
        id: 'c2',
        name: 'Next.js Frontend',
        sub: 'React Framework',
        description: 'Powerful React framework for building performant, SEO-friendly user interfaces.',
        url: 'https://nextjs.org',
        icon: '⚛️',
        badges: [{ label: 'Tailwind CSS' }, { label: 'Shadcn UI' }]
      },
      {
        id: 'c3',
        name: 'Real-time Streaming',
        sub: 'Live AI Response Handling',
        description: 'Handling chunked HTTP responses for low-latency chat experiences.',
        url: 'https://vercel.com/blog/ai-sdk-streaming-react',
        icon: '✨'
      }
    ]
  },
  {
    id: 'layer-2',
    title: 'Server Side',
    gradient: 'from-pink-500 to-rose-600',
    components: [
      {
        id: 's1',
        name: 'Next.js App Router',
        sub: 'Routing & SSR',
        description: 'The standard for modern full-stack React applications with server components.',
        url: 'https://nextjs.org/docs/app',
        icon: '⚡'
      },
      {
        id: 's2',
        name: 'Server Actions',
        sub: 'Direct RPC Calls',
        description: 'Eliminate API boilerplate with end-to-end type-safe server functions.',
        url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations',
        icon: '🔧'
      },
      {
        id: 's3',
        name: 'Custom Middleware',
        sub: 'Request Pipeline',
        description: 'Edge-ready functions for auth, redirection, and dynamic headers.',
        url: 'https://nextjs.org/docs/app/building-your-application/routing/middleware',
        icon: '🔄'
      }
    ]
  },
  {
    id: 'layer-3',
    title: 'Identity & Access',
    gradient: 'from-sky-400 to-blue-500',
    components: [
      {
        id: 'a1',
        name: 'Better Auth',
        sub: 'Session Management',
        description: 'Modern authentication solution optimized for TypeScript and the edge.',
        url: 'https://better-auth.com',
        icon: '🔐'
      },
      {
        id: 'a2',
        name: 'Clerk Service',
        sub: 'User Management',
        description: 'Complete user management system with pre-built components and OAuth.',
        url: 'https://clerk.com',
        icon: '👤',
        badges: [{ label: 'OAuth' }, { label: 'RBAC' }]
      }
    ]
  },
  {
    id: 'layer-4',
    title: 'Data Layer',
    gradient: 'from-emerald-400 to-teal-500',
    components: [
      {
        id: 'd1',
        name: 'MongoDB Database',
        sub: 'Document Storage',
        description: 'The leading NoSQL database for flexible data modeling in modern apps.',
        url: 'https://www.mongodb.com',
        icon: '🗄️'
      },
      {
        id: 'd2',
        name: 'Supabase',
        sub: 'BaaS & Real-time',
        description: 'Open source Firebase alternative providing Postgres and real-time features.',
        url: 'https://supabase.com',
        icon: '⚡'
      },
      {
        id: 'd3',
        name: 'MongoDB Atlas Vector',
        sub: 'Semantic Search',
        description: 'Integrated vector search for building RAG applications on your existing data.',
        url: 'https://www.mongodb.com/products/platform/atlas-vector-search',
        icon: '🔍',
        badges: [{ label: 'Similarity Search' }]
      }
    ]
  },
  {
    id: 'layer-5',
    title: 'AI & Vectors',
    gradient: 'from-orange-400 to-yellow-500',
    components: [
      {
        id: 'v1',
        name: 'LangChain',
        sub: 'Workflow Orchestrator',
        description: 'The standard library for chaining LLM calls and complex AI workflows.',
        url: 'https://www.langchain.com',
        icon: '🔗'
      },
      {
        id: 'v2',
        name: 'Cohere LLM',
        sub: 'Language Intelligence',
        description: 'Enterprise-grade LLMs specialized for RAG and search accuracy.',
        url: 'https://cohere.com',
        icon: '🤖',
        badges: [{ label: 'Embeddings' }, { label: 'Rerank' }]
      },
      {
        id: 'v3',
        name: 'RAG Pipeline',
        sub: 'The Brain',
        description: 'The core architecture connecting your proprietary data to the LLM.',
        url: 'https://aws.amazon.com/what-is/retrieval-augmented-generation/',
        icon: '📝'
      }
    ]
  }
];
