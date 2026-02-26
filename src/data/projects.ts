export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  content: string[];
};

export const projects: Project[] = [
  {
    slug: 'creek-journal',
    title: 'Creek Journal',
    category: 'Product Concept',
    year: '2026',
    description:
      'A concept for documenting field notes, maps, and seasonal observations in one calm interface.',
    content: [
      'Creek Journal started as a simple idea: give outdoor notes the same care and structure we give design work. The concept combines field entries, route references, and seasonal observations in one place.',
      'The interface direction focuses on legibility and calm pacing. Instead of heavy dashboards, the experience emphasizes a readable timeline, lightweight tagging, and map context that supports the note rather than dominating it.',
      'This project is still a concept, but it has become a useful container for exploring how narrative, data, and place can live together in a cleaner product system.'
    ]
  },
  {
    slug: 'studio-system',
    title: 'Studio System',
    category: 'Design System',
    year: '2026',
    description:
      'A modular design and content system for shipping pages quickly without losing visual character.',
    content: [
      'Studio System is an internal framework for building marketing pages, case studies, and lightweight content surfaces with a consistent visual language. The goal is speed without flattening everything into the same template.',
      'The system is organized around reusable layout primitives, type scales, and card patterns that can be recombined while preserving tone. It is less about strict components and more about a repeatable rhythm for shipping.',
      'A lot of the value comes from constraints: fewer one-off decisions, more attention on what the page is trying to say.'
    ]
  },
  {
    slug: 'signals-dashboard',
    title: 'Signals Dashboard',
    category: 'Analytics Concept',
    year: '2026',
    description:
      'An experiment in surfacing product and creative metrics with simple, narrative-first visualizations.',
    content: [
      'Signals Dashboard explores a more editorial approach to analytics. Instead of overwhelming the viewer with every metric, it highlights the handful of signals that matter most in the current moment.',
      'The concept pairs metrics with short narrative annotations so trends are immediately legible. This makes the dashboard useful for both makers and stakeholders who want context, not just charts.',
      'It is an ongoing experiment in balancing clarity, speed, and storytelling in data-heavy interfaces.'
    ]
  }
];
