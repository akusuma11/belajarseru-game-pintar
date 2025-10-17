import { SubjectCard } from "@/components/SubjectCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Beaker, Languages, Globe, Trophy, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import mathHero from "@/assets/math-hero.jpg";
import scienceHero from "@/assets/science-hero.jpg";
import indonesianHero from "@/assets/indonesian-hero.jpg";
import englishHero from "@/assets/english-hero.jpg";

const Index = () => {
  const subjects = [
    {
      title: "Matematika",
      icon: BookOpen,
      color: "#9b59b6",
      image: mathHero,
      description: "Belajar berhitung dengan cara yang menyenangkan!",
      to: "/subject/math",
    },
    {
      title: "IPA",
      icon: Beaker,
      color: "#3498db",
      image: scienceHero,
      description: "Jelajahi dunia sains yang menakjubkan!",
      to: "/subject/science",
    },
    {
      title: "Bahasa Indonesia",
      icon: Languages,
      color: "#f39c12",
      image: indonesianHero,
      description: "Tingkatkan kemampuan berbahasa Indonesia!",
      to: "/subject/indonesian",
    },
    {
      title: "Bahasa Inggris",
      icon: Globe,
      color: "#27ae60",
      image: englishHero,
      description: "Learn English with fun activities!",
      to: "/subject/english",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 animate-float" />
              <h1 className="text-2xl md:text-3xl font-bold">Belajar Ceria</h1>
            </div>
            <Link to="/progress">
              <Button variant="secondary" size="sm" className="gap-2">
                <Trophy className="w-4 h-4" />
                <span className="hidden sm:inline">Progres</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Selamat Datang, Pelajar Hebat! 🎉
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Belajar jadi lebih seru dengan kuis interaktif dan materi menarik. Yuk, mulai petualangan belajarmu!
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
            Pilih Mata Pelajaran
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div key={subject.title} style={{ animationDelay: `${index * 0.1}s` }}>
                <SubjectCard {...subject} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-accent">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-accent-foreground">
            Siap Dapat Nilai Bagus? 🌟
          </h3>
          <p className="text-accent-foreground/90 mb-6 max-w-lg mx-auto">
            Jawab kuis, kumpulkan poin, dan raih pencapaian keren!
          </p>
          <Link to="/subject/math">
            <Button variant="secondary" size="lg" className="shadow-lg">
              Mulai Belajar Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
