
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeToggle from '@/components/ThemeToggle';
import { MessageSquare, Zap, Shield, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Chat
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the future of conversation with our advanced AI assistant. 
            Get instant, intelligent responses to all your questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
              <Link to="/chat">Start Chatting</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <Card className="glass-effect hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Get instant responses powered by advanced AI technology
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-effect hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your conversations are protected with enterprise-grade security
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="glass-effect hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Smart & Intuitive</CardTitle>
              <CardDescription>
                Natural language processing that understands context and nuance
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Join thousands of users already chatting with our AI assistant
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
            <Link to="/register">Create Free Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
