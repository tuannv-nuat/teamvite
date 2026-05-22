import React from 'react';

const TopAppBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-margin-mobile py-sm bg-surface backdrop-blur-xl shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-sm hover:scale-105 transition-transform duration-200">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjzmxSTP6dK46tPyNIP7XmW44QbUBmwvh2eq8KVsjx5nYK9y-hmH7jWITRHZAidHnhA694WXOjCvtZ73r4IsvU-NINYdxAAQxneXxwKFlMnAQ3NGSbugSPaBZuYJ0Uyl2wHHxDzY-FN8dxxj54GlzQWRSEb0CHnkDsW3kuPg58qY404GDQp7847jD9HRuAWLHTQfUG6moowXM6kQRAa58YtYph4f2w4B7DyuGle-rRuUBxOQLYQ9C9mVq0_Hj0kM_MHgPzsbH4aSc"
          />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          TeamVibe
        </h1>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-primary hover:scale-105 transition-transform duration-200">
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  );
};

export default TopAppBar;
