import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { AchievementBadge } from "@/components/AchievementBadge";
import { ArrowLeft, Trophy, Star, Award, Zap, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import achievementHero from "@/assets/achievement-hero.jpg";

const Progress = () => {
  const achievements = [
    { 
      title: "Pemula Hebat", 
      icon: Star, 
      description: "Selesaikan kuis pertama", 
      earned: true,
      color: "#f39c12"
    },
    { 
      title: "Matematika Pro", 
      icon: Target, 
      description: "Skor 100 di Matematika", 
      earned: true,
      color: "#9b59b6"
    },
    { 
      title: "Pembelajar Aktif", 
      icon: Zap, 
      description: "Belajar 3 hari berturut", 
      earned: false,
      color: "#3498db"
    },
    { 
      title: "Bintang Kelas", 
      icon: Award, 
      description: "Raih skor sempurna 5 kali", 
      earned: false,
      color: "#27ae60"
    },
  ];

  const subjectProgress = [
    { subject: "Matematika", progress: 75, color: "#9b59b6" },
    { subject: "IPA", progress: 25, color: "#3498db" },
    { subject: "Bahasa Indonesia", progress: 0, color: "#f39c12" },
    { subject: "Bahasa Inggris", progress: 0, color: "#27ae60" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Progres Belajar</h1>
          </div>
        </div>
      </header>

      {/* Hero Stats */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${achievementHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="p-8 bg-gradient-accent text-accent-foreground shadow-hover animate-bounce-in">
            <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
              <div>
                <Trophy className="w-12 h-12 mx-auto mb-2" />
                <div className="text-4xl font-bold mb-1">450</div>
                <div className="text-sm opacity-90">Total Poin</div>
              </div>
              <div>
                <BookOpen className="w-12 h-12 mx-auto mb-2" />
                <div className="text-4xl font-bold mb-1">8</div>
                <div className="text-sm opacity-90">Kuis Selesai</div>
              </div>
              <div>
                <Star className="w-12 h-12 mx-auto mb-2" />
                <div className="text-4xl font-bold mb-1">2</div>
                <div className="text-sm opacity-90">Pencapaian</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Subject Progress */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Progres per Mata Pelajaran</h2>
          <Card className="p-6 space-y-6">
            {subjectProgress.map((item, index) => (
              <div 
                key={item.subject}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProgressBar 
                  label={item.subject} 
                  value={item.progress} 
                />
              </div>
            ))}
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Pencapaian</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AchievementBadge {...achievement} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Terus Semangat Belajar! 💪
          </h3>
          <p className="text-muted-foreground mb-6">
            Kamu sudah melakukan pekerjaan yang luar biasa! Mari kita lanjutkan petualangan belajar.
          </p>
          <Link to="/">
            <Button variant="fun" size="lg">
              Lanjut Belajar
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Progress;
