# Sensai

An AI-powered career assistant platform built with Next.js that helps users create professional documents, prepare for interviews, and advance their careers.

## Features

- **AI Cover Letter Generator** - Create personalized cover letters with AI assistance
- **Resume Builder** - Develop and manage professional resumes
- **Interview Preparation** - Practice with mock interviews and interview tips
- **User Dashboard** - Centralized hub to manage all your career documents
- **Authentication** - Secure sign-in and sign-up with Clerk
- **Onboarding** - Guided setup process for new users

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) - React framework with App Router
- **Database**: [Prisma](https://www.prisma.io) - ORM for database management
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: Custom component library with shadcn/ui patterns
- **Authentication**: Clerk
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sensai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Set up the database:
```bash
npx prisma migrate dev
```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The application will automatically reload when you make changes to the code.

## Project Structure

```
sensai/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── (auth)/         # Authentication pages (sign-in, sign-up)
│   │   ├── (main)/         # Main app pages
│   │   │   ├── ai-cover-letter/   # Cover letter generator
│   │   │   ├── dashboard/         # User dashboard
│   │   │   ├── interview/         # Interview preparation
│   │   │   ├── resume/            # Resume builder
│   │   │   └── onboarding/        # Onboarding flow
│   │   └── layout.js        # Root layout
│   ├── components/          # Reusable React components
│   │   └── ui/             # UI component library
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and helpers
│   └── data/               # Static data (FAQs, testimonials, etc.)
├── actions/                # Server actions
├── prisma/                 # Database schema and migrations
└── public/                 # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Setup

The project uses Prisma for database management. Key commands:

```bash
# Run pending migrations
npx prisma migrate dev

# View database with Prisma Studio
npx prisma studio

# Generate Prisma client
npx prisma generate
```

## Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL` - Database connection string
- `CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the repository.
