"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Shield, ExternalLink } from "lucide-react";

const apiKeySchema = z.object({
  apiKey: z
    .string()
    .min(1, "API key is required")
    .min(10, "API key seems too short"),
});

type ApiKeyForm = z.infer<typeof apiKeySchema>;

interface ApiKeySetupProps {
  onApiKeySubmit: (apiKey: string) => void;
  currentApiKey: string;
}

export function ApiKeySetup({
  onApiKeySubmit,
  currentApiKey,
}: ApiKeySetupProps) {
  const [showApiKey, setShowApiKey] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApiKeyForm>({
    resolver: zodResolver(apiKeySchema),
    defaultValues: {
      apiKey: currentApiKey || "",
    },
  });

  // Reset the form when the current API key changes
  useEffect(() => {
    if (currentApiKey) {
      reset({ apiKey: currentApiKey });
    }
  }, [currentApiKey, reset]);

  const onSubmit = (data: ApiKeyForm) => {
    console.log("API key submitted:", data.apiKey);
    onApiKeySubmit(data.apiKey);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-500" />
            Privacy Promise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Your API key is stored locally in your browser and never sent to
              our servers. This is a temporary chat - no data is saved on our
              end. You have complete control over your privacy.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enter Your Gemini API Key</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">Gemini API Key</Label>
              <div className="relative">
                <Input
                  id="apiKey"
                  type={showApiKey ? "text" : "password"}
                  placeholder="Enter your Gemini API key..."
                  {...register("apiKey")}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {errors.apiKey && (
                <p className="text-sm text-destructive">
                  {errors.apiKey.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isSubmitting ? "Saving..." : "Save API Key"}
            </Button>
          </form>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Don't have a Gemini API key?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get your free API key from Google AI Studio. It's free to use with
              generous limits.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://makersuite.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Get API Key <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
