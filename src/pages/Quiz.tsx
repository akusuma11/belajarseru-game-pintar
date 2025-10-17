import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Trophy, Star } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

const Quiz = () => {
  const { subject, topicId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Sample quiz data
  const quizData = [
    {
      question: "Berapa hasil dari 5 + 3?",
      options: ["6", "7", "8", "9"],
      correctAnswer: 2,
    },
    {
      question: "Berapa hasil dari 10 - 4?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
    },
    {
      question: "Berapa hasil dari 3 × 4?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 2,
    },
    {
      question: "Berapa hasil dari 15 ÷ 3?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
    },
  ];

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    const correct = index === quizData[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 25);
      toast.success("🎉 Benar! Kamu hebat!", {
        description: "+25 poin",
      });
    } else {
      toast.error("Belum tepat, coba lagi!", {
        description: "Terus semangat belajar!",
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(false);
    } else {
      setShowResult(true);
    }
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center px-4">
        <Card className="max-w-md w-full p-8 text-center animate-bounce-in">
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mb-4 animate-float">
              <Trophy className="w-12 h-12 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-foreground">Selesai! 🎊</h2>
            <p className="text-xl text-muted-foreground mb-4">Skor Kamu:</p>
            <div className="text-5xl font-bold text-primary mb-2">{score}</div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    score >= (i + 1) * 25 ? "text-accent fill-accent" : "text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <Button 
              variant="fun" 
              size="lg" 
              className="w-full"
              onClick={() => window.location.reload()}
            >
              Coba Lagi
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full"
              onClick={() => navigate(`/subject/${subject}`)}
            >
              Kembali ke Topik
            </Button>
            <Link to="/progress" className="block">
              <Button variant="outline" size="lg" className="w-full">
                Lihat Progres
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link to={`/subject/${subject}`}>
                <Button variant="secondary" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Kuis</h1>
                <p className="text-sm text-primary-foreground/80">
                  Pertanyaan {currentQuestion + 1} dari {quizData.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5" />
              <span className="font-bold">{score}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Quiz Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 mb-6 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground text-center">
              {quizData[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-6 rounded-xl border-2 text-left font-semibold text-lg transition-all ${
                    selectedAnswer === null
                      ? "border-border hover:border-primary hover:bg-primary/5"
                      : selectedAnswer === index
                      ? isCorrect
                        ? "border-success bg-success/10 text-success"
                        : "border-destructive bg-destructive/10 text-destructive"
                      : index === quizData[currentQuestion].correctAnswer
                      ? "border-success bg-success/10 text-success"
                      : "border-border opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      selectedAnswer === null
                        ? "bg-muted text-muted-foreground"
                        : selectedAnswer === index
                        ? isCorrect
                          ? "bg-success text-success-foreground"
                          : "bg-destructive text-destructive-foreground"
                        : index === quizData[currentQuestion].correctAnswer
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {selectedAnswer !== null && (
            <div className="text-center animate-bounce-in">
              <Button 
                variant="fun" 
                size="lg" 
                onClick={handleNext}
                className="px-12"
              >
                {currentQuestion < quizData.length - 1 ? "Selanjutnya" : "Lihat Hasil"}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
