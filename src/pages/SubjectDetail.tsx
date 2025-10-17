import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, PlayCircle, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const SubjectDetail = () => {
  const { subject } = useParams();

  const subjectData: { [key: string]: any } = {
    math: {
      title: "Matematika",
      color: "#9b59b6",
      topics: [
        { id: 1, title: "Penjumlahan & Pengurangan", description: "Belajar operasi dasar matematika", completed: true },
        { id: 2, title: "Perkalian & Pembagian", description: "Kuasai perkalian dan pembagian", completed: true },
        { id: 3, title: "Pecahan", description: "Memahami konsep pecahan", completed: false },
        { id: 4, title: "Geometri Dasar", description: "Mengenal bangun datar", completed: false },
      ],
    },
    science: {
      title: "IPA",
      color: "#3498db",
      topics: [
        { id: 1, title: "Makhluk Hidup", description: "Klasifikasi dan ciri makhluk hidup", completed: false },
        { id: 2, title: "Tata Surya", description: "Mengenal planet dan bintang", completed: false },
        { id: 3, title: "Energi", description: "Jenis-jenis energi", completed: false },
        { id: 4, title: "Ekosistem", description: "Rantai makanan dan habitat", completed: false },
      ],
    },
    indonesian: {
      title: "Bahasa Indonesia",
      color: "#f39c12",
      topics: [
        { id: 1, title: "Membaca Cerita", description: "Memahami isi cerita", completed: false },
        { id: 2, title: "Menulis Karangan", description: "Belajar menulis cerita", completed: false },
        { id: 3, title: "Tata Bahasa", description: "Kalimat dan kata", completed: false },
        { id: 4, title: "Puisi", description: "Mengenal dan membuat puisi", completed: false },
      ],
    },
    english: {
      title: "Bahasa Inggris",
      color: "#27ae60",
      topics: [
        { id: 1, title: "Greetings & Introductions", description: "Learn basic greetings", completed: false },
        { id: 2, title: "Numbers & Colors", description: "Learn numbers and colors", completed: false },
        { id: 3, title: "Animals & Plants", description: "Vocabulary about nature", completed: false },
        { id: 4, title: "Daily Activities", description: "Talk about daily routines", completed: false },
      ],
    },
  };

  const currentSubject = subjectData[subject || "math"];

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
            <h1 className="text-2xl md:text-3xl font-bold">{currentSubject.title}</h1>
          </div>
        </div>
      </header>

      {/* Topics Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-foreground">Pilih Topik Pembelajaran</h2>
          <div className="space-y-4">
            {currentSubject.topics.map((topic: any, index: number) => (
              <Card 
                key={topic.id} 
                className="p-6 hover:shadow-hover transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{topic.title}</h3>
                      {topic.completed && (
                        <CheckCircle className="w-5 h-5 text-success" />
                      )}
                    </div>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </div>
                  <Link to={`/quiz/${subject}/${topic.id}`}>
                    <Button variant="fun" className="gap-2">
                      <PlayCircle className="w-5 h-5" />
                      <span className="hidden sm:inline">
                        {topic.completed ? "Ulangi" : "Mulai"}
                      </span>
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubjectDetail;
