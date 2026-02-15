import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Building2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { catalogueConfig } from '@/config/catalogue.config';
import { useCatalogue } from '@/context/CatalogueContext';

interface UserInfoFormProps {
  onSubmit: () => void;
}

export function UserInfoForm({ onSubmit }: UserInfoFormProps) {
  const { setUserInfo } = useCatalogue();
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Submit to Forminit
      const forminit = new (window as any).Forminit();
      const submitData = new FormData();
      submitData.append('fullName', formData.fullName);
      submitData.append('company', formData.company);
      submitData.append('email', formData.email);
      
      const { error } = await forminit.submit("ms16c0mbc8i", submitData);
      if (error) {
        console.error('Forminit error:', error);
      }

      // Store user info in context
      setUserInfo(formData);
      
      // Also store in localStorage for persistence
      localStorage.setItem('catalogueUserInfo', JSON.stringify(formData));

      onSubmit();
    } catch (error) {
      console.error('Form submission error:', error);
      // Still proceed even if MS Forms fails
      setUserInfo(formData);
      localStorage.setItem('catalogueUserInfo', JSON.stringify(formData));
      onSubmit();
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { id: 'fullName', label: 'Full Name', icon: User, type: 'text', placeholder: 'John Doe' },
    { id: 'company', label: 'Company', icon: Building2, type: 'text', placeholder: 'Your Company Ltd.' },
    { id: 'email', label: 'Email Address', icon: Mail, type: 'email', placeholder: 'john@company.com' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl"
      />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-6"
            >
              <User className="h-8 w-8 text-primary" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Welcome
            </h1>
            <p className="text-muted-foreground">
              Please share your details to continue exploring our catalogue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Label htmlFor={field.id} className="text-foreground font-medium mb-2 block">
                  {field.label}
                </Label>
                <div className="relative">
                  <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, [field.id]: e.target.value }));
                      if (errors[field.id]) {
                        setErrors(prev => ({ ...prev, [field.id]: '' }));
                      }
                    }}
                    className={`pl-12 h-14 bg-secondary/50 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 ${
                      errors[field.id] ? 'border-destructive' : ''
                    }`}
                  />
                </div>
                {errors[field.id] && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-destructive"
                  >
                    {errors[field.id]}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Continue</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          {/* Privacy note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center text-xs text-muted-foreground"
          >
            Your information is securely stored and will not be shared with third parties.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
