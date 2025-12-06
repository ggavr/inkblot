import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface WaitlistDialogProps {
  children: React.ReactNode;
}

const WaitlistDialog = ({ children }: WaitlistDialogProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail("");
        setName("");
        setCity("");
      }, 300);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-secondary/20 bg-background">
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
              <Check className="w-8 h-8 text-success" />
            </div>
            <DialogTitle className="font-display text-2xl text-foreground mb-2">
              You're on the list!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              We'll be in touch soon with exclusive updates.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center sm:text-center">
              <DialogTitle className="font-display text-2xl text-foreground">
                Join the <span className="italic text-secondary">Waitlist</span>
              </DialogTitle>
              <DialogDescription className="text-muted-foreground pt-2">
                Be the first to experience Inkblot. Early members get exclusive perks and founding member pricing.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-muted/50 border-secondary/20 focus:border-secondary/40"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-muted/50 border-secondary/20 focus:border-secondary/40"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-foreground">
                  City (UK)
                </label>
                <Input
                  id="city"
                  type="text"
                  placeholder="London, Manchester, etc."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="bg-muted/50 border-secondary/20 focus:border-secondary/40"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="velvet" 
                className="w-full h-12 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground pt-2">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;

