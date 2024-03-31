import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hlkfkqwoapkbnjqluhcj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsa2ZrcXdvYXBrYm5qcWx1aGNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjA2ODgsImV4cCI6MjAyNzM5NjY4OH0.6OmohI5cVUTrBohWlYqCMeYpqciQenoz-vVPbRFuk_A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)