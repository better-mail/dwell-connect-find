import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      type: "seeker",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Browse available rooms",
        "Basic filters",
        "Send 5 messages per month",
        "View public profiles",
        "Basic support"
      ],
      buttonText: "Get Started Free",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Seeker Pro",
      type: "seeker",
      price: "299",
      description: "For serious room seekers",
      features: [
        "Everything in Free",
        "Unlimited messaging",
        "Advanced filters",
        "Priority matching",
        "Post your room requirements",
        "24/7 support"
      ],
      buttonText: "Choose Seeker Pro",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Provider",
      type: "provider",
      price: "199",
      description: "List your rooms",
      features: [
        "List up to 3 rooms",
        "Receive applications",
        "Tenant screening tools",
        "Basic analytics",
        "Standard support"
      ],
      buttonText: "List Your Room",
      variant: "accent" as const,
      popular: false
    },
    {
      name: "Provider Pro",
      type: "provider",
      price: "499",
      description: "For property managers",
      features: [
        "Everything in Provider",
        "Unlimited listings",
        "Featured listings",
        "Advanced analytics",
        "Bulk messaging",
        "Priority support",
        "Verified badge"
      ],
      buttonText: "Go Pro",
      variant: "hero" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, Transparent 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include our core matching features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-primary/50 shadow-glow' : 'border-border'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {plan.name}
                    {plan.name.includes('Pro') && <Crown className="h-4 w-4 text-accent" />}
                  </h3>
                  <p className="text-sm text-foreground/70">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">₹{plan.price}</span>
                    <span className="text-foreground/60 ml-1">/month</span>
                  </div>
                  {plan.price === "0" && (
                    <p className="text-xs text-foreground/50">No credit card required</p>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant}
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-foreground/60">
            All plans include phone verification, secure messaging, and basic support.
          </p>
          <p className="text-sm text-foreground/50">
            Prices are in Ethiopian Birr (ETB). Plans auto-renew monthly. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;