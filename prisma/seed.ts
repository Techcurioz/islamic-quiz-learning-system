import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@islamicquiz.com';
  const passwordHash = await bcrypt.hash('admin1234', 10);

  const categories = [
    { name: 'Qur’an', slug: 'quran', description: 'Questions about Qur’an guidance and reflection.' },
    { name: 'Hadith', slug: 'hadith', description: 'Study of authentic prophetic teachings.' },
    { name: 'Seerah', slug: 'seerah', description: 'Lessons from the life of the Prophet ﷺ.' },
    { name: 'Fiqh', slug: 'fiqh', description: 'Daily Islamic rulings and worship practices.' }
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category
    });
  }

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'System Admin',
      email: adminEmail,
      passwordHash,
      role: 'ADMIN'
    }
  });

  const quranCategory = await prisma.category.findUnique({ where: { slug: 'quran' } });

  if (quranCategory) {
    const quiz = await prisma.quiz.upsert({
      where: { id: 'seed-quran-quiz' },
      update: {},
      create: {
        id: 'seed-quran-quiz',
        title: 'Qur’an Basics',
        description: 'A beginner friendly quiz on core Islamic understanding from the Qur’an.',
        difficulty: 'BEGINNER',
        isPublished: true,
        categoryId: quranCategory.id,
        authorId: admin.id
      }
    });

    const existingQuestions = await prisma.question.findMany({ where: { quizId: quiz.id } });

    if (existingQuestions.length === 0) {
      await prisma.question.createMany({
        data: [
          {
            prompt: 'What is the primary purpose of the Qur’an?',
            explanation: 'The Qur’an guides people to righteousness and reminds them of Allah’s mercy and wisdom.',
            source: 'Surah Al-Baqarah 2:2',
            quizId: quiz.id
          },
          {
            prompt: 'The Qur’an was revealed in which language?',
            explanation: 'The Qur’an was revealed in Arabic, and its message is preserved through Arabic recitation and translation.',
            source: 'Various authentic evidences from revelation history',
            quizId: quiz.id
          },
          {
            prompt: 'Reflection on the Qur’an is important because it helps believers:',
            explanation: 'Reflecting upon the Qur’an helps believers understand it, apply it, and live by its guidance.',
            source: 'Surah Sad 38:29',
            quizId: quiz.id
          }
        ]
      });

      const createdQuestions = await prisma.question.findMany({ where: { quizId: quiz.id } });

      const options = [
        { questionId: createdQuestions[0].id, text: 'To entertain people', isCorrect: false },
        { questionId: createdQuestions[0].id, text: 'To guide humanity to righteousness', isCorrect: true },
        { questionId: createdQuestions[0].id, text: 'To replace all other knowledge', isCorrect: false },
        { questionId: createdQuestions[0].id, text: 'To be memorized without reflection', isCorrect: false },

        { questionId: createdQuestions[1].id, text: 'English', isCorrect: false },
        { questionId: createdQuestions[1].id, text: 'Arabic', isCorrect: true },
        { questionId: createdQuestions[1].id, text: 'French', isCorrect: false },
        { questionId: createdQuestions[1].id, text: 'Latin', isCorrect: false },

        { questionId: createdQuestions[2].id, text: 'Only recite without understanding', isCorrect: false },
        { questionId: createdQuestions[2].id, text: 'Understand and implement its guidance', isCorrect: true },
        { questionId: createdQuestions[2].id, text: 'Avoid all learning beyond it', isCorrect: false },
        { questionId: createdQuestions[2].id, text: 'Ignore the Qur’an completely', isCorrect: false }
      ];

      await prisma.questionOption.createMany({ data: options });
      console.log('Seed quiz created successfully with question data.');
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
