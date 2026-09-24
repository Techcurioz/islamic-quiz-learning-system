export const categories = [
  {
    id: 'cat-quran',
    name: 'Qur’an',
    slug: 'quran',
    description: 'Questions about Qur’an recitation, themes, and guidance.'
  },
  {
    id: 'cat-hadith',
    name: 'Hadith',
    slug: 'hadith',
    description: 'Essentials from prophetic sayings and lessons.'
  },
  {
    id: 'cat-seerah',
    name: 'Seerah',
    slug: 'seerah',
    description: 'Life of the Prophet ﷺ and major historical events.'
  },
  {
    id: 'cat-fiqh',
    name: 'Fiqh',
    slug: 'fiqh',
    description: 'Islamic rulings in worship and daily life.'
  }
] as const;

export type DemoQuizQuestion = {
  id: string;
  prompt: string;
  explanation: string;
  source: string;
  options: { id: string; text: string; isCorrect: boolean }[];
};

export type DemoQuiz = {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questions: DemoQuizQuestion[];
  reviewCount: number;
  rating: number;
  attempts: number;
};

export const demoQuizzes: DemoQuiz[] = [
  {
    id: 'quiz-quran-basics',
    title: 'Qur’an Basics',
    description: 'A beginner-friendly assessment on core Qur’anic understanding and reflection.',
    category: 'Qur’an',
    difficulty: 'Beginner',
    reviewCount: 42,
    rating: 4.8,
    attempts: 128,
    questions: [
      {
        id: 'q1',
        prompt: 'What is the primary purpose of the Qur’an according to Islamic teaching?',
        explanation:
          'The Qur’an is a guidance for humanity and a source of moral, spiritual, and practical guidance. It directs believers toward righteousness and worship.',
        source: 'Surah Al-Baqarah 2:2',
        options: [
          { id: 'q1-a', text: 'To be a historical storybook only', isCorrect: false },
          { id: 'q1-b', text: 'To guide humanity to righteousness', isCorrect: true },
          { id: 'q1-c', text: 'To replace all other knowledge', isCorrect: false },
          { id: 'q1-d', text: 'To be memorized without reflection', isCorrect: false }
        ]
      },
      {
        id: 'q2',
        prompt: 'Which of the following is a recognized characteristic of the Qur’an?',
        explanation:
          'The Qur’an is the final revealed scripture in Islam and serves as the ultimate guidance for believers until the end of time.',
        source: 'Surah Al-Ma’idah 5:48',
        options: [
          { id: 'q2-a', text: 'It was revealed in stages over time', isCorrect: true },
          { id: 'q2-b', text: 'It is only for non-Muslims', isCorrect: false },
          { id: 'q2-c', text: 'It was lost and re-created', isCorrect: false },
          { id: 'q2-d', text: 'It was revealed only in Arabic for one generation', isCorrect: false }
        ]
      },
      {
        id: 'q3',
        prompt: 'What is the correct understanding of reflecting on the Qur’an?',
        explanation:
          'Recitation and reflection are both essential. The Qur’an should be studied, understood, and applied in daily life with sincerity.',
        source: 'Surah Sad 38:29',
        options: [
          { id: 'q3-a', text: 'Memorization alone is enough', isCorrect: false },
          { id: 'q3-b', text: 'Reflection and implementation are important', isCorrect: true },
          { id: 'q3-c', text: 'It is only for scholars', isCorrect: false },
          { id: 'q3-d', text: 'It only matters in prayer', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'quiz-hadith-essentials',
    title: 'Hadith Essentials',
    description: 'Test your understanding of authentic hadith foundations, Prophetic manners, and Islamic values.',
    category: 'Hadith',
    difficulty: 'Intermediate',
    reviewCount: 31,
    rating: 4.7,
    attempts: 201,
    questions: [
      {
        id: 'q4',
        prompt: 'The phrase “Actions are judged by intentions” teaches us that:',
        explanation:
          'This hadith emphasizes that intention is the basis of accountability and sincerity in worship and actions.',
        source: 'Sahih al-Bukhari 1, Sahih Muslim 1907',
        options: [
          { id: 'q4-a', text: 'Only outward actions matter', isCorrect: false },
          { id: 'q4-b', text: 'Intentions are central to the value of actions', isCorrect: true },
          { id: 'q4-c', text: 'There is no need for sincerity', isCorrect: false },
          { id: 'q4-d', text: 'Good deeds are always accepted by everyone', isCorrect: false }
        ]
      },
      {
        id: 'q5',
        prompt: 'Which of the following reflects the Prophetic teaching on kindness?',
        explanation:
          'The Prophet ﷺ encouraged compassion and kindness, even to animals, and taught that mercy is a core Islamic virtue.',
        source: 'Sahih Muslim',
        options: [
          { id: 'q5-a', text: 'Kindness is optional in Islam', isCorrect: false },
          { id: 'q5-b', text: 'Mercy is a part of faith and character', isCorrect: true },
          { id: 'q5-c', text: 'Only scholars should be merciful', isCorrect: false },
          { id: 'q5-d', text: 'Kindness is unrelated to worship', isCorrect: false }
        ]
      },
      {
        id: 'q6',
        prompt: 'Why are authentic hadiths important in Islamic learning?',
        explanation:
          'Authentic hadiths help clarify and explain Qur’anic teachings and provide practical examples from the Prophet ﷺ.',
        source: 'Various authenticated collections',
        options: [
          { id: 'q6-a', text: 'They replace the Qur’an completely', isCorrect: false },
          { id: 'q6-b', text: 'They explain and support the Qur’an’s teachings', isCorrect: true },
          { id: 'q6-c', text: 'They are only for historical interest', isCorrect: false },
          { id: 'q6-d', text: 'They are not needed for ordinary Muslims', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'quiz-seerah-life',
    title: 'Seerah: Life of the Prophet ﷺ',
    description: 'Explore key moments from the life of the Prophet ﷺ and their lessons for believers.',
    category: 'Seerah',
    difficulty: 'Intermediate',
    reviewCount: 26,
    rating: 4.9,
    attempts: 167,
    questions: [
      {
        id: 'q7',
        prompt: 'What was the Hijrah significant for the Muslim community?',
        explanation:
          'The Hijrah marks the migration from Makkah to Madinah, establishing a strong Muslim community and a new phase of Islamic development.',
        source: 'Seerah of the Prophet ﷺ',
        options: [
          { id: 'q7-a', text: 'It was a military retreat only', isCorrect: false },
          { id: 'q7-b', text: 'It marked the establishment of the Muslim community in Madinah', isCorrect: true },
          { id: 'q7-c', text: 'It ended the revelation', isCorrect: false },
          { id: 'q7-d', text: 'It happened after the death of the Prophet', isCorrect: false }
        ]
      },
      {
        id: 'q8',
        prompt: 'Which event is closely linked with the construction of the first Masjid in Madinah?',
        explanation:
          'The Masjid an-Nabawi was built after the migration and became a center of prayer, learning, and community life.',
        source: 'Seerah and Islamic history',
        options: [
          { id: 'q8-a', text: 'The Battle of Badr', isCorrect: false },
          { id: 'q8-b', text: 'The Hijrah to Madinah', isCorrect: true },
          { id: 'q8-c', text: 'The Year of the Elephant', isCorrect: false },
          { id: 'q8-d', text: 'The farewell pilgrimage', isCorrect: false }
        ]
      },
      {
        id: 'q9',
        prompt: 'Why is the Seerah of the Prophet ﷺ important for Muslims today?',
        explanation:
          'Studying the Seerah teaches us about character, leadership, patience, mercy, and how to live according to Islam in all circumstances.',
        source: 'Seerah literature and Islamic study',
        options: [
          { id: 'q9-a', text: 'It is only for historians', isCorrect: false },
          { id: 'q9-b', text: 'It provides moral and practical guidance based on the Prophet’s life', isCorrect: true },
          { id: 'q9-c', text: 'It has no spiritual relevance', isCorrect: false },
          { id: 'q9-d', text: 'It is only about military campaigns', isCorrect: false }
        ]
      }
    ]
  }
] as const;

export const dashboardStats = {
  totalUsers: 5400,
  activeLearners: 3200,
  quizzesPublished: 180,
  avgScore: 82,
  completionRate: 71
};

export const siteFeatures = [
  'User authentication and profiles',
  'Searchable and filterable Islamic quizzes',
  'Answer explanations and references',
  'Performance tracking and reports',
  'Verification dashboard for quiz content'
];

export type DemoUser = {
  email: string;
  password: string;
  name: string;
};

export const demoUsers: DemoUser[] = [
  { name: 'Aisha Rahman', email: 'aisha@example.com', password: 'password123' },
  { name: 'Yusuf Ali', email: 'yusuf@example.com', password: 'password123' }
];

export const quizCategories = categories.map((category) => ({
  ...category,
  quizCount: category.slug === 'quran' ? 24 : category.slug === 'hadith' ? 18 : category.slug === 'seerah' ? 12 : 15
}));

export const exampleAttempt = {
  score: 8,
  totalQuestions: 10,
  percentage: 80,
  level: 'Excellent'
};

export const isDatabaseConfigured = Boolean(process.env.DATABASE_URL);

export type QuizAnswerMap = Record<string, string>;
