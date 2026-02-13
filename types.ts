
export interface TechBadge {
  label: string;
}

export interface TechComponent {
  id: string;
  name: string;
  description: string;
  sub: string;
  url: string;
  badges?: TechBadge[];
  icon: string;
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  gradient: string;
  components: TechComponent[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
