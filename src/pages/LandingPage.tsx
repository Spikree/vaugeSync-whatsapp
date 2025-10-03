import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Bell, Globe, MessageSquare, Send, Shield, Users, Zap } from "lucide-react"
import { Link } from "react-router-dom"


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">VaugeSynce</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-foreground/70 hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link className="hidden sm:block" to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground">Trusted by 10,000+ businesses worldwide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            WhatsApp API for Growing Businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Send notifications, automate conversations, and expand your reach with our powerful WhatsApp Business API.
            Perfect for businesses and schools looking to connect with their audience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Everything you need to succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you communicate better with your customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Bulk Messaging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send personalized messages to thousands of contacts instantly with our powerful bulk messaging system.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Smart Notifications</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automate appointment reminders, order updates, and important alerts to keep customers informed.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Manage conversations with multiple team members and assign chats for better customer support.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Analytics & Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track message delivery, read rates, and engagement metrics with comprehensive analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">API Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamlessly integrate with your existing tools and workflows using our developer-friendly API.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Enterprise Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bank-level encryption and compliance with global data protection regulations for peace of mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Built for every industry</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From retail to education, our platform adapts to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-card-foreground mb-3">E-commerce & Retail</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Send order confirmations, shipping updates, and promotional offers directly to your customers'
                  WhatsApp.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Abandoned cart recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Order tracking notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Customer support automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-card-foreground mb-3">Schools & Education</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Keep parents informed with attendance alerts, exam schedules, and important announcements.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Attendance notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fee payment reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Event announcements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of businesses already using VaugeSynce to grow their customer relationships
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Contact Sales
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">VaugeSynce</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering businesses to connect with their customers through WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 VaugeSynce. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage