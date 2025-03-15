
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  guests: z.number().min(1).max(5),
  attending: z.enum(['yes', 'no', 'maybe']),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RSVPForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      guests: 1,
      attending: 'yes',
      dietaryRestrictions: '',
      message: '',
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      
      setIsSuccess(true);
      toast({
        title: "RSVP Received!",
        description: "Thank you for your response. We look forward to celebrating with you!",
        variant: "default",
      });
      
      // Reset form after success
      form.reset();
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your RSVP could not be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="rsvp" 
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Sparkles className="w-8 h-8 text-cosmic-light mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">RSVP</h2>
          <p className="text-cosmic-accent max-w-2xl mx-auto">
            Please let us know if you'll be joining our celestial celebration by December 15th
          </p>
          <div className="w-20 h-1 bg-cosmic-light mx-auto mt-4"></div>
        </div>
        
        <div className="cosmic-card">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-cosmic rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Thank You!</h3>
              <p className="text-cosmic-accent mb-6">
                Your RSVP has been received. We're excited to celebrate with you!
              </p>
              <Button 
                onClick={() => setIsSuccess(false)}
                className="bg-cosmic hover:bg-cosmic-light text-white"
              >
                Submit Another Response
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-cosmic-dark/50 border-cosmic-light/30 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          type="email" 
                          {...field} 
                          className="bg-cosmic-dark/50 border-cosmic-light/30 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="attending"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Will you attend?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="text-cosmic-accent font-normal cursor-pointer">
                              Yes, I'll be there!
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="text-cosmic-accent font-normal cursor-pointer">
                              Sorry, I can't make it
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="maybe" />
                            </FormControl>
                            <FormLabel className="text-cosmic-accent font-normal cursor-pointer">
                              Maybe
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Number of Guests (including yourself)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min={1} 
                          max={5} 
                          {...field} 
                          onChange={e => field.onChange(parseInt(e.target.value))}
                          className="bg-cosmic-dark/50 border-cosmic-light/30 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="dietaryRestrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Dietary Restrictions (if any)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Vegetarian, gluten-free, etc." 
                          {...field} 
                          className="bg-cosmic-dark/50 border-cosmic-light/30 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message (optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special messages or notes" 
                          {...field} 
                          className="bg-cosmic-dark/50 border-cosmic-light/30 text-white resize-none h-24"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-cosmic hover:bg-cosmic-light text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send RSVP"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
